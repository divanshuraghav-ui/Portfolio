import { SectionHeading } from './section-heading'

const facts = [
  { label: 'Program', value: 'B.Tech, Computer Science' },
  { label: 'Current stage', value: 'First semester' },
  { label: 'Focus', value: 'Programming & DSA' },
  { label: 'Goal', value: 'Software engineering' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 sm:py-20">
      <SectionHeading index="01" id="about-title" title="About" />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            {"I'm a first-semester B.Tech Computer Science student focused on building a strong foundation in programming and problem-solving."}
          </p>
          <p>
            I learn best by building. Through consistent practice, certifications, and hands-on projects, I am working
            toward meaningful internships and a strong campus placement.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:col-span-2">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-card p-4">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</dt>
              <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
