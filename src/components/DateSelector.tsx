'use client'

import { DayOfWeek } from '@/data/timetable'
import { getCurrentDateLabel, isToday } from '@/lib/utils'

interface DateSelectorProps {
  selectedDay: DayOfWeek
  onDayChange: (day: DayOfWeek) => void
}

export function DateSelector({ selectedDay, onDayChange }: DateSelectorProps) {
  const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayAbbreviations: Record<DayOfWeek, string> = {
    Monday: 'Mon',
    Tuesday: 'Tue',
    Wednesday: 'Wed',
    Thursday: 'Thu',
    Friday: 'Fri',
    Saturday: 'Sat'
  }

  return (
    <div className="px-5 py-4 space-y-4">
      {/* Semester label */}
      <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
        SEMESTER VI • 2024–2025
      </div>

      {/* Current date display */}
      <div className="text-5xl font-bold text-white">
        {getCurrentDateLabel()}
      </div>

      {/* Day selector pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {days.map(day => {
          const isActive = selectedDay === day
          const isTodayDay = isToday(day)

          return (
            <button
              key={day}
              onClick={() => onDayChange(day)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-gray-300'
                }
              `}
            >
              {dayAbbreviations[day]}
              {isTodayDay && !isActive && (
                <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-purple-400" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
