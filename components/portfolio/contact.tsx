import { Github, Linkedin } from './brand-icons'
import { profile } from '@/lib/profile'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-16 sm:py-20">
      <div className="rounded-xl border border-border bg-card p-8 sm:p-12">
        <p className="font-mono text-sm text-primary">05 — Contact</p>
        <h2 id="contact-title" className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {"Let's connect and build something together."}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          {"I'm always open to internships, collaborations, and conversations with fellow developers and mentors."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            Connect on LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Github className="size-4" aria-hidden="true" />
            Follow on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
