'use client'

import * as React from 'react'
import useGrowth from './useGrowth'

type Step = {
  stepLabel?: string
  title: string
  subtitle?: string
  description?: string
}

function StepCard({ step, badge }: { step?: Step; badge?: string }) {
  if (!step) return null
  return (
    <article className="bg-[#0B0F19] rounded-2xl p-6 md:p-8 border border-white/5">
      <div className="bg-black/80 flex items-center gap-2 text-[#FF9900] border border-[#FF9900] text-xs md:text-sm font-medium w-fit px-3 py-1 rounded-full tracking-[0.15rem]">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#FF9900" />
          </svg>
        </span>
        {badge}
      </div>

      <h3 className="text-white text-2xl md:text-[28px] font-semibold leading-snug mt-4">
        {step!.title}
      </h3>

      {step?.subtitle && (
        <p className="text-white/90 text-sm md:text-[13px] leading-[20px] mt-2">
          {step.subtitle}
        </p>
      )}
      {step?.description && (
        <p className="text-[#94A3B8] text-sm md:text-[13px] leading-[21px] mt-3">
          {step.description}
        </p>
      )}
    </article>
  )
}

export default function Growth() {
  const { GROWTH_STEPS } = useGrowth() as { GROWTH_STEPS: Step[] }

  // index of the step that is currently "active"
  const [active, setActive] = React.useState(0)
  const markersRef = React.useRef<(HTMLDivElement | null)[]>([])

  // Watch full-screen markers to decide which pair to show
  React.useEffect(() => {
    const els = markersRef.current.filter(Boolean) as HTMLDivElement[]
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        // choose the entry most in view
        let bestIdx = active
        let best = -1
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > best) {
            best = e.intersectionRatio
            bestIdx = Number(e.target.getAttribute('data-idx') || 0)
          }
        }
        if (best !== -1 && bestIdx !== active) setActive(bestIdx)
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Build the visible pair: (1,2) → (2,3) → (3,4) …
  const last = GROWTH_STEPS.length - 1
  const partner = Math.min(active + 1, last)

  // keep the lower (odd, 1-based) on the LEFT
  const leftIdx = active % 2 === 0 ? active : partner
  const rightIdx = leftIdx === active ? partner : active

  const leftStep = GROWTH_STEPS[leftIdx]
  const rightStep = GROWTH_STEPS[rightIdx]

  return (
    <section className="bg-[#02050E]">
      <div className="mx-auto px-6 md:px-[120px] py-16 md:py-24 relative">

        {/* 1) PINNED LAYER — stays for the whole section */}
        <div className="sticky top-16 md:top-24 z-10 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 w-full">
            <StepCard step={leftStep}  badge={leftStep?.stepLabel  ?? `Step ${leftIdx + 1}`} />
            <StepCard step={rightStep} badge={rightStep?.stepLabel ?? `Step ${rightIdx + 1}`} />
          </div>
        </div>

        {/* 2) SCROLL LENGTH — invisible full-screen markers */}
        <div aria-hidden className="mt-20">
          {GROWTH_STEPS.map((_, i) => (
            <div
              key={`marker-${i}`}
              data-idx={i}
              ref={(el) => { markersRef.current[i] = el; }}
              className="min-h-screen"
            />
          ))}
        </div>

      </div>
    </section>
  )
}
