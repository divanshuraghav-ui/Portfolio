import { About } from '@/components/portfolio/about'
import { Contact } from '@/components/portfolio/contact'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { Roadmap } from '@/components/portfolio/roadmap'
import { SiteHeader } from '@/components/portfolio/site-header'
import { Skills } from '@/components/portfolio/skills'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Roadmap />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Divanshu Raghav. All rights reserved.</p>
          <a href="#top" className="hover:text-foreground">
            Back to top
          </a>
        </div>
      </footer>
    </>
  )
}
