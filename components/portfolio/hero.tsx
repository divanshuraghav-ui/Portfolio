import { ArrowRight } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/lib/profile'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        Open to internships and learning opportunities
      </div>
      <h1 id="hero-title" className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 font-mono text-sm uppercase tracking-widest text-primary">{profile.role}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{profile.tagline}</p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my work
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Github className="size-4" aria-hidden="true" />
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Linkedin className="size-4" aria-hidden="true" />
          LinkedIn
        </a>
      </div>
    </section>
  )
}
