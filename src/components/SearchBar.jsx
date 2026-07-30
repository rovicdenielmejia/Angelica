const SearchBar = ({ value, onChange, onClear, autoFocus, onKeyDown }) => {
  return (
    <div className="relative">
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
          style={{ color: 'rgba(92, 26, 46, 0.4)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search your name..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-12 py-4 rounded-2xl text-primary text-base shadow-soft transition-all"
          style={{
            background: 'var(--color-input)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-primary)',
          }}
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'var(--color-accent-muted)', border: '1px solid var(--color-border)' }}
          >
            <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
