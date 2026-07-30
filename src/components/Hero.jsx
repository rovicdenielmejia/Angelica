const Hero = () => {
  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="space-y-6 text-center">


        <div className="space-y-2">
          <p className="text-secondary text-[10px] uppercase tracking-[0.18em]">The Eighteenth Birthday of</p>
          <h1 className="font-cinzel text-[52px] md:text-7xl font-medium text-primary tracking-[0.08em] leading-[0.9]">
            ANGELIKA JOYCE
          </h1>
          <p className="font-script text-secondary text-5xl leading-none">
            Cabacungan Agpalza
          </p>
        </div>

        <div className="border rounded-2xl p-6 space-y-5 shadow-soft text-left" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <div className="space-y-1 rounded-xl p-3 text-sm text-center" style={{ background: 'var(--color-surface-strong)', border: '1px solid var(--color-border-light)' }}>
            <p className="text-secondary text-[10px] uppercase tracking-[0.18em]">Date and Time</p>
            <p className="text-primary font-medium">Sunday, August 2, 2026</p>
            <p className="text-secondary">at 4:00 PM</p>
          </div>

          <div className="space-y-1 rounded-xl p-3" style={{ background: 'var(--color-surface-subtle)', border: '1px solid var(--color-border-light)' }}>
            <p className="text-secondary text-[10px] uppercase tracking-[0.18em]">Venue</p>
            <p className="text-primary font-medium">La Perfecta Convention Hall</p>
            <p className="text-secondary">Daramuangan Norte, San Mateo, Isabela</p>
          </div>
        </div>

        <div className="pt-1 space-y-1">
          <h2 className="font-serif text-2xl font-medium text-primary tracking-wide">
            &ldquo;Find your seat instantly&rdquo;
          </h2>
          <p className="text-secondary text-sm">Search your name below to view your table assignment.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
