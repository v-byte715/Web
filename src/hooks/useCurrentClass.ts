'use client'

import { useEffect, useState } from 'react'
import { ClassSession } from '@/data/timetable'
import { isClassCurrent } from '@/lib/utils'

/**
 * Hook to detect which class is currently ongoing
 * Updates every minute to reflect real-time status
 */
export function useCurrentClass(classes: ClassSession[]): ClassSession | null {
  const [currentClass, setCurrentClass] = useState<ClassSession | null>(null)

  useEffect(() => {
    // Function to find current class
    const findCurrentClass = () => {
      const ongoing = classes.find(classSession => isClassCurrent(classSession))
      setCurrentClass(ongoing || null)
    }

    // Initial check
    findCurrentClass()

    // Update every minute
    const interval = setInterval(findCurrentClass, 60000) // 60 seconds

    // Cleanup on unmount
    return () => clearInterval(interval)
  }, [classes])

  return currentClass
}
