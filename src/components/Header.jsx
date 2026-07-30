const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b shadow-soft" style={{ background: 'var(--color-header)', borderColor: 'var(--color-border-light)' }}>
      <div className="max-w-md mx-auto px-4 py-4 text-center">
        <div className="flex items-center justify-center gap-3 text-sm md:text-base tracking-[0.08em] uppercase font-medium">
          <span className="text-primary">Seat Finder</span>
          <span className="text-secondary opacity-50">|</span>
          <a
            href="https://venuelle.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-secondary"
          >
            Powered by Venuelle
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
