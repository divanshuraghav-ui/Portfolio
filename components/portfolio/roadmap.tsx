import { roadmap } from '@/lib/profile'
import { SectionHeading } from './section-heading'

export function Roadmap() {
  return (
    <section id="roadmap" aria-labelledby="roadmap-title" className="py-16 sm:py-20">
      <SectionHeading index="04" id="roadmap-title" title="Career Roadmap" />
      <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {roadmap.map((step, i) => (
          <li key={step.year} className="relative bg-card p-6">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={
                  i === 0
                    ? 'size-2.5 rounded-full bg-primary ring-4 ring-primary/15'
                    : 'size-2.5 rounded-full border-2 border-border'
                }
              />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{step.year}</span>
              {i === 0 && <span className="ml-auto text-xs font-medium text-primary">Now</span>}
            </div>
            <h3 className="mt-4 font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
