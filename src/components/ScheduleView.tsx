'use client'

import { useMemo } from 'react'
import { TimetableData, DayOfWeek } from '@/data/timetable'
import { filterClassesByDay, sortClassesByTime } from '@/lib/utils'
import { useCurrentClass } from '@/hooks/useCurrentClass'
import { ClassCard } from './ClassCard'

interface ScheduleViewProps {
  selectedDay: DayOfWeek
  selectedBatch: 1 | 2
  timetableData: TimetableData
}

export function ScheduleView({ selectedDay, selectedBatch, timetableData }: ScheduleViewProps) {
  // Get the schedule for selected batch
  const batchSchedule = useMemo(() => {
    const batch = timetableData.batches.find(b => b.batchNumber === selectedBatch)
    return batch?.schedule || []
  }, [timetableData, selectedBatch])

  // Filter classes for selected day
  const dayClasses = useMemo(() => {
    const classes = filterClassesByDay(batchSchedule, selectedDay)
    return sortClassesByTime(classes)
  }, [batchSchedule, selectedDay])

  // Detect current ongoing class
  const currentClass = useCurrentClass(dayClasses)

  // Determine section title
  const sectionTitle = selectedDay === 'Monday' ? "Today's Classes" : `${selectedDay}'s Classes`

  return (
    <div className="px-5 pb-20 fade-slide-in">
      {/* Section title */}
      <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">
        {sectionTitle}
      </h2>

      {/* Classes list or empty state */}
      {dayClasses.length > 0 ? (
        <div>
          {dayClasses.map((classSession, index) => (
            <ClassCard
              key={`${classSession.subjectCode}-${classSession.startTime}-${index}`}
              classData={classSession}
              isCurrentClass={currentClass?.startTime === classSession.startTime &&
                              currentClass?.subjectCode === classSession.subjectCode}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-gray-400 text-lg">No classes scheduled for {selectedDay}</p>
          <p className="text-gray-500 text-sm mt-2">Enjoy your day off!</p>
        </div>
      )}
    </div>
  )
}
