import { skills } from '@/lib/profile'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-16 sm:py-20">
      <SectionHeading index="02" id="skills-title" title="Skills" />
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
