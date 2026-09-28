import { ArrowUpRight } from 'lucide-react'

const GITHUB_URL = 'https://github.com/Sireesh01'

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function CallingCard() {
  return (
    <article className="w-full max-w-xl overflow-hidden rounded-2xl bg-card text-card-foreground shadow-2xl shadow-black/30">
      <header className="border-b border-border px-8 pb-8 pt-10 sm:px-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Calling card
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Sireesh
        </h1>
        <p className="mt-3 text-pretty text-lg text-muted-foreground">
          Freelance AI trainer and software task specialist
        </p>
      </header>

      <div className="space-y-4 px-8 py-8 text-pretty leading-relaxed sm:px-12">
        <p>
          I work on AI training projects, building and reviewing coding tasks that help AI
          models learn to write better software.
        </p>
        <p>
          I enjoy solving tricky technical problems and turning them into clear, well-tested
          work. I&apos;m always looking for new projects and collaborations.
        </p>
      </div>

      <footer className="px-8 pb-10 sm:px-12">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Get in touch
        </h2>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 flex items-center gap-3 rounded-xl bg-primary px-5 py-4 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
        >
          <GitHubMark className="size-6 shrink-0" />
          <span className="flex min-w-0 flex-col">
            <span className="text-sm opacity-80">GitHub</span>
            <span className="truncate font-medium">github.com/Sireesh01</span>
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="ml-auto size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </footer>
    </article>
  )
}
