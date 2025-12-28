'use client'

import { ClassSession } from '@/data/timetable'
import { getClassDuration } from '@/lib/utils'

interface ClassCardProps {
  classData: ClassSession
  isCurrentClass: boolean
}

export function ClassCard({ classData, isCurrentClass }: ClassCardProps) {
  const { subjectCode, subjectName, type, startTime, endTime, room, color } = classData
  const duration = getClassDuration(startTime, endTime)
  const isLab = type === 'Lab'

  // Get gradient class names
  const gradientClasses = `${color.from} ${color.to}`

  return (
    <div
      className={`
        relative mb-3 p-4 rounded-2xl backdrop-blur-md transition-all duration-300
        bg-white/3 border
        ${
          isCurrentClass
            ? 'border-2 border-purple-400 shadow-lg shadow-purple-400/20'
            : 'border-white/10'
        }
        hover:bg-white/5
      `}
    >
      {/* Gradient overlay */}
      <div
        className={`
          absolute inset-0 rounded-2xl opacity-10 bg-gradient-to-br ${gradientClasses}
        `}
      />

      {/* Content */}
      <div className="relative flex gap-4">
        {/* Time section */}
        <div className="flex-shrink-0 w-16">
          <div className="text-xl font-bold text-white leading-tight">{startTime}</div>
          <div className="text-xs text-gray-500 mt-0.5">{endTime}</div>
        </div>

        {/* Class info section */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-1">
            <h3 className="text-base font-bold text-white leading-tight">{subjectCode}</h3>
            {isLab && (
              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded bg-gradient-to-r from-orange-400 to-amber-400 text-black">
                LAB
              </span>
            )}
          </div>
          <p className="text-[13px] text-gray-400 leading-snug">{subjectName}</p>
          {isLab && duration >= 1.5 && (
            <p className="text-xs text-gray-500 mt-1">{Math.round(duration)} hours</p>
          )}
        </div>

        {/* Room section */}
        <div className="flex-shrink-0 text-right">
          <div className="inline-block px-3 py-1.5 rounded-lg bg-white/10 text-white text-[13px] font-bold">
            {room}
          </div>
          <div className="text-[11px] text-gray-500 mt-1">
            {room.startsWith('A') ? 'Block A' : 'Lab'}
          </div>
        </div>
      </div>
    </div>
  )
}
