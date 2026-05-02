import { cn } from "@/lib/utils"

export const DistortedGlass = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "relative h-[50px] w-full overflow-hidden",
          className
        )}
      >
        <div className="pointer-events-none absolute bottom-0 z-10 size-full overflow-hidden">
          <div className="glass-effect size-full" />
        </div>
        <svg>
          <title>Distorted Glass</title>
          <defs>
            <filter id="fractal-noise-glass">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.12 0.12"
                numOctaves={1}
                result="warp"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale={30}
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <style>{`
        .glass-effect {
          background: repeating-radial-gradient(
            circle at 50% 50%,
            rgba(244, 242, 238, 0),
            rgba(244, 242, 238, 0.2) 10px,
            rgba(244, 242, 238, 1) 31px
          );
          filter: url(#fractal-noise-glass);
          background-size: 6px 6px;
          backdrop-filter: blur(0px);
        }
        [data-theme="noir"] .glass-effect {
          background: none !important;
          filter: none !important;
          background: linear-gradient(
            to bottom,
            #0C0A08 0%,
            rgba(12, 10, 8, 0) 100%
          ) !important;
        }
      `}</style>
    </>
  )
}
