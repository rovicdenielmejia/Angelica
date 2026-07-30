import { useNavigate } from 'react-router-dom'

const GuestResult = ({ guest }) => {
  const navigate = useNavigate()

  const handleViewTable = () => {
    navigate(`/table/${encodeURIComponent(guest.table)}`)
  }

  const getSimpleTableName = (tableName) => {
    return tableName
  }

  const getTableSide = (table) => {
    if (table === "VIP TABLE 1 (Left)") return "Left Side"
    if (table === "VIP TABLE 2 (Right)") return "Right Side"
    const match = table.match(/^Table (\d+)$/)
    if (match) {
      const num = parseInt(match[1])
      return num % 2 === 1 ? "Left Side" : "Right Side"
    }
    return "Right Side"
  }
  const side = getTableSide(guest.table)

  return (
    <div className="rounded-2xl p-5 border card-hover animate-fade-in-up" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <div className="flex items-center justify-between gap-4">
        <div className="text-center min-w-[60px]">
          <p className="text-secondary text-[10px] uppercase tracking-[0.16em] mb-1">Table</p>
          <h3 className="font-serif text-5xl font-medium leading-none text-primary">
            {getSimpleTableName(guest.table)}
          </h3>
          <p className="text-secondary text-[8px] uppercase tracking-[0.12em] mt-1">
            {side}
          </p>
        </div>

        <div className="w-px h-10" style={{ background: 'var(--color-border)' }}></div>

        <div className="flex-1 text-center">
          <p className="text-secondary text-[10px] uppercase tracking-[0.16em] mb-1">Name</p>
          <h4 className="font-serif text-lg font-medium text-primary">
            {guest.name}
          </h4>
        </div>
      </div>

      <button
        onClick={handleViewTable}
        className="w-full mt-4 py-3 px-4 text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
        style={{
          background: 'var(--color-accent-muted)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-primary)',
        }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        View Table Details
      </button>
    </div>
  )
}

export default GuestResult
