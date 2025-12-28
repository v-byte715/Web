'use client'

import { useState } from 'react'
import { DayOfWeek } from '@/data/timetable'
import { timetableData } from '@/data/timetable'
import { getCurrentDay } from '@/lib/utils'
import { Header } from '@/components/Header'
import { DateSelector } from '@/components/DateSelector'
import { BatchSelector } from '@/components/BatchSelector'
import { ScheduleView } from '@/components/ScheduleView'

export default function Home() {
  // State management
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(getCurrentDay())
  const [selectedBatch, setSelectedBatch] = useState<1 | 2>(1)

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="max-w-4xl mx-auto">
        {/* Date selector with current day and day pills */}
        <DateSelector selectedDay={selectedDay} onDayChange={setSelectedDay} />

        {/* Batch selector */}
        <BatchSelector selectedBatch={selectedBatch} onBatchChange={setSelectedBatch} />

        {/* Schedule view */}
        <ScheduleView
          selectedDay={selectedDay}
          selectedBatch={selectedBatch}
          timetableData={timetableData}
        />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-white/5 border-t border-white/10 py-3 px-4 z-40">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>Designed for Robotics and Automation Department</p>
          <p>Version 1.0.0</p>
        </div>
      </footer>
    </div>
  )
}
