import { ArrowUpRight } from 'lucide-react'
import { profile, projects } from '@/lib/profile'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-16 sm:py-20">
      <SectionHeading index="03" id="projects-title" title="Projects" />
      <ul className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className={
                  project.status === 'Live'
                    ? 'rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground'
                    : 'rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground'
                }
              >
                {project.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag} className="font-mono text-xs text-primary">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        See all repositories on GitHub
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
