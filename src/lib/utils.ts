// Utility functions for timetable operations

import { ClassSession, DaySchedule, DayOfWeek } from '@/data/timetable'

/**
 * Get current day of the week as DayOfWeek type
 * Returns 'Monday' for Sunday (since no Sunday classes)
 */
export function getCurrentDay(): DayOfWeek {
  const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = new Date().getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Map Sunday (0) to Monday, otherwise use day - 1
  const dayIndex = today === 0 ? 0 : today - 1

  return days[dayIndex]
}

/**
 * Filter classes by specific day
 * Returns classes array for that day, or empty array if not found
 */
export function filterClassesByDay(schedule: DaySchedule[], day: DayOfWeek): ClassSession[] {
  const daySchedule = schedule.find(s => s.day === day)
  return daySchedule?.classes || []
}

/**
 * Sort classes by start time (ascending)
 */
export function sortClassesByTime(classes: ClassSession[]): ClassSession[] {
  return [...classes].sort((a, b) => {
    const timeA = parseTime(a.startTime)
    const timeB = parseTime(b.startTime)
    return timeA - timeB
  })
}

/**
 * Check if a class is currently ongoing
 * Compares current time with class start/end times
 */
export function isClassCurrent(classSession: ClassSession): boolean {
  const now = new Date()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()

  const startMinutes = parseTime(classSession.startTime)
  const endMinutes = parseTime(classSession.endTime)

  return currentMinutes >= startMinutes && currentMinutes < endMinutes
}

/**
 * Parse time string "HH:MM" to minutes since midnight
 */
function parseTime(timeString: string): number {
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours * 60 + minutes
}

/**
 * Format time string for display (24-hour format)
 * Input: "HH:MM" -> Output: "HH:MM"
 */
export function formatTime(time: string): string {
  return time
}

/**
 * Get display label for current date
 * Returns format like "23 Tue"
 */
export function getCurrentDateLabel(): string {
  const now = new Date()
  const day = now.getDate()
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayName = dayNames[now.getDay()]

  return `${day} ${dayName}`
}

/**
 * Check if a day is today
 */
export function isToday(day: DayOfWeek): boolean {
  return getCurrentDay() === day
}

/**
 * Calculate class duration in hours
 */
export function getClassDuration(startTime: string, endTime: string): number {
  const startMinutes = parseTime(startTime)
  const endMinutes = parseTime(endTime)
  const durationMinutes = endMinutes - startMinutes
  return durationMinutes / 60
}
