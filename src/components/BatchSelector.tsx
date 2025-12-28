'use client'

interface BatchSelectorProps {
  selectedBatch: 1 | 2
  onBatchChange: (batch: 1 | 2) => void
}

export function BatchSelector({ selectedBatch, onBatchChange }: BatchSelectorProps) {
  return (
    <div className="px-4 pb-4">
      <div className="flex gap-2">
        <button
          onClick={() => onBatchChange(1)}
          className={`
            flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300
            ${
              selectedBatch === 1
                ? 'bg-blue-400/15 text-blue-400 border-2 border-blue-400 shadow-lg shadow-blue-400/10'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-gray-300'
            }
          `}
        >
          Batch 1
        </button>
        <button
          onClick={() => onBatchChange(2)}
          className={`
            flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300
            ${
              selectedBatch === 2
                ? 'bg-blue-400/15 text-blue-400 border-2 border-blue-400 shadow-lg shadow-blue-400/10'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-gray-300'
            }
          `}
        >
          Batch 2
        </button>
      </div>
    </div>
  )
}
