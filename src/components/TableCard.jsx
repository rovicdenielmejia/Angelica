const TableCard = ({ table }) => {
  return (
    <div className="rounded-2xl overflow-hidden border shadow-soft" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <div className="px-4 py-3 border-b" style={{ background: 'var(--color-surface-strong)', borderColor: 'var(--color-border-light)' }}>
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-serif text-base font-medium text-primary">
            {table.name}
          </h4>
          <span className="text-xs font-medium text-secondary px-2 py-1 rounded-full" style={{ background: 'var(--color-accent-muted)', border: '1px solid var(--color-border)' }}>
            {table.guests.length}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
        {table.guests.map((guest) => (
          <div key={guest.id} className="py-2 border-b last:border-0" style={{ borderColor: 'var(--color-border-light)' }}>
            <p className="text-sm text-primary">
              {guest.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableCard
