import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { guests } from '../data/guests'
import { tableArrangementImage } from '../constants/assets'
import Lightbox from './Lightbox'

const TableDetail = () => {
  const { tableName } = useParams()
  const navigate = useNavigate()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const decodedTableName = decodeURIComponent(tableName || '')
  const tableGuests = guests.filter(g => g.table === decodedTableName)

  if (tableGuests.length === 0) {
    return (
      <div className="invite-floral-canvas min-h-screen flex flex-col">
        <div className="max-w-md mx-auto w-full px-4 py-8">
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Seat Finder
          </button>
          <div className="rounded-2xl p-6 border text-center shadow-soft" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <p className="text-secondary">Table not found</p>
          </div>
        </div>
      </div>
    )
  }

  const getSimpleTableName = () => {
    return decodedTableName
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
  const side = getTableSide(decodedTableName)

  return (
    <div className="invite-floral-canvas min-h-screen flex flex-col">
      <div className="max-w-md mx-auto w-full px-4 py-6 space-y-6 pb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Seat Finder
        </button>

        <div
          className="rounded-2xl p-3 border cursor-zoom-in hover:shadow-soft-lg transition-all"
          onClick={() => setLightboxOpen(true)}
          style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
        >
          <img
            src={tableArrangementImage}
            alt="Table Seating Arrangement"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-secondary text-xs text-center mt-2">Tap to zoom</p>
        </div>

        <div className="rounded-2xl p-6 border shadow-soft text-center" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <p className="text-secondary text-xs uppercase tracking-[0.18em] mb-2">Table</p>
          <h2 className="font-serif text-6xl md:text-7xl font-medium text-primary">
            {getSimpleTableName()}
          </h2>
          <p className="text-secondary text-sm mt-2">
            {tableGuests.length} {tableGuests.length === 1 ? 'guest' : 'guests'} seated at this table
          </p>
          <div className="mt-4 inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium text-primary" style={{
            background: 'var(--color-accent-muted)',
            border: '1px solid var(--color-border)',
          }}>
            {side}
          </div>
        </div>

        <Lightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)}>
          <img
            src={tableArrangementImage}
            alt="Table Seating Arrangement"
            className="w-full h-auto rounded-lg"
          />
        </Lightbox>

        <div className="rounded-2xl overflow-hidden border shadow-soft" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <div className="px-5 py-4 border-b" style={{ background: 'var(--color-surface-strong)', borderColor: 'var(--color-border-light)' }}>
            <h3 className="font-serif text-lg font-medium text-primary">
              Guests
            </h3>
          </div>
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {tableGuests.map((guest, index) => (
              <div
                key={guest.id}
                className="flex items-center gap-3 py-2 border-b last:border-0"
                style={{ borderColor: 'var(--color-border-light)' }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-secondary" style={{ background: 'var(--color-accent-muted)', border: '1px solid var(--color-border)' }}>
                  {index + 1}
                </span>
                <p className="text-sm font-medium text-primary">
                  {guest.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableDetail
