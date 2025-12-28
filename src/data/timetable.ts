// Timetable data structure and schedule for Robotics and Automation Department

export type ClassType = 'Theory' | 'Lab'

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'

export interface ClassSession {
  subjectCode: string
  subjectName: string
  type: ClassType
  startTime: string  // 24-hour format "HH:MM"
  endTime: string    // 24-hour format "HH:MM"
  room: string
  color: {
    from: string  // Tailwind color class for gradient start
    to: string    // Tailwind color class for gradient end
  }
}

export interface DaySchedule {
  day: DayOfWeek
  classes: ClassSession[]
}

export interface BatchTimetable {
  batchNumber: 1 | 2
  schedule: DaySchedule[]
}

export interface TimetableData {
  batches: BatchTimetable[]
}

// Complete timetable data for both batches
export const timetableData: TimetableData = {
  batches: [
    // Batch 1
    {
      batchNumber: 1,
      schedule: [
        {
          day: 'Monday',
          classes: [
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '10:00',
              endTime: '10:50',
              room: 'A108',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Theory',
              startTime: '11:00',
              endTime: '11:50',
              room: 'A310',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A202',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '15:00',
              endTime: '15:50',
              room: 'A302',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '16:00',
              endTime: '16:50',
              room: 'A108',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            }
          ]
        },
        {
          day: 'Tuesday',
          classes: [
            {
              subjectCode: 'GE23627',
              subjectName: 'General Engineering',
              type: 'Theory',
              startTime: '08:00',
              endTime: '08:50',
              room: 'A311',
              color: { from: 'from-green-300', to: 'to-emerald-300' }
            },
            {
              subjectCode: 'GE23627',
              subjectName: 'General Engineering',
              type: 'Theory',
              startTime: '09:00',
              endTime: '09:50',
              room: 'A311',
              color: { from: 'from-green-300', to: 'to-emerald-300' }
            },
            {
              subjectCode: 'RO23632',
              subjectName: 'Robot Vision and Intelligence',
              type: 'Theory',
              startTime: '10:00',
              endTime: '10:50',
              room: 'A203',
              color: { from: 'from-orange-300', to: 'to-amber-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Theory',
              startTime: '11:00',
              endTime: '11:50',
              room: 'A309',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            },
            {
              subjectCode: 'RO23631',
              subjectName: 'Robot Operating System',
              type: 'Lab',
              startTime: '11:50',
              endTime: '13:20',
              room: 'DGOIAL',
              color: { from: 'from-purple-300', to: 'to-violet-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A308',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            }
          ]
        },
        {
          day: 'Wednesday',
          classes: [
            {
              subjectCode: 'RO23632',
              subjectName: 'Robot Vision and Intelligence',
              type: 'Lab',
              startTime: '08:00',
              endTime: '09:40',
              room: 'DGOIAL',
              color: { from: 'from-orange-300', to: 'to-amber-300' }
            },
            {
              subjectCode: 'RO23632',
              subjectName: 'Robot Vision and Intelligence',
              type: 'Theory',
              startTime: '13:20',
              endTime: '14:10',
              room: 'A302',
              color: { from: 'from-orange-300', to: 'to-amber-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A302',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            }
          ]
        },
        {
          day: 'Thursday',
          classes: [
            {
              subjectCode: 'RO23632',
              subjectName: 'Robot Vision and Intelligence',
              type: 'Theory',
              startTime: '09:00',
              endTime: '09:50',
              room: 'A304',
              color: { from: 'from-orange-300', to: 'to-amber-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Lab',
              startTime: '10:00',
              endTime: '11:40',
              room: 'DGOIAL',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            },
            {
              subjectCode: 'RO23631',
              subjectName: 'Robot Operating System',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A109',
              color: { from: 'from-purple-300', to: 'to-violet-300' }
            }
          ]
        },
        {
          day: 'Friday',
          classes: [
            {
              subjectCode: 'RO23631',
              subjectName: 'Robot Operating System',
              type: 'Theory',
              startTime: '10:00',
              endTime: '10:50',
              room: 'A310',
              color: { from: 'from-purple-300', to: 'to-violet-300' }
            },
            {
              subjectCode: 'GE23627',
              subjectName: 'General Engineering',
              type: 'Theory',
              startTime: '11:00',
              endTime: '11:50',
              room: 'A311',
              color: { from: 'from-green-300', to: 'to-emerald-300' }
            },
            {
              subjectCode: 'GE23627',
              subjectName: 'General Engineering',
              type: 'Theory',
              startTime: '12:00',
              endTime: '12:50',
              room: 'A311',
              color: { from: 'from-green-300', to: 'to-emerald-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A303',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Lab',
              startTime: '15:00',
              endTime: '16:40',
              room: 'DGOIAL',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            }
          ]
        },
        {
          day: 'Saturday',
          classes: []
        }
      ]
    },
    // Batch 2 (identical to Batch 1 as per user requirements)
    {
      batchNumber: 2,
      schedule: [
        {
          day: 'Monday',
          classes: [
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '10:00',
              endTime: '10:50',
              room: 'A108',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Theory',
              startTime: '11:00',
              endTime: '11:50',
              room: 'A310',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A202',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '15:00',
              endTime: '15:50',
              room: 'A302',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '16:00',
              endTime: '16:50',
              room: 'A108',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            }
          ]
        },
        {
          day: 'Tuesday',
          classes: [
            {
              subjectCode: 'GE23627',
              subjectName: 'General Engineering',
              type: 'Theory',
              startTime: '08:00',
              endTime: '08:50',
              room: 'A311',
              color: { from: 'from-green-300', to: 'to-emerald-300' }
            },
            {
              subjectCode: 'GE23627',
              subjectName: 'General Engineering',
              type: 'Theory',
              startTime: '09:00',
              endTime: '09:50',
              room: 'A311',
              color: { from: 'from-green-300', to: 'to-emerald-300' }
            },
            {
              subjectCode: 'RO23632',
              subjectName: 'Robot Vision and Intelligence',
              type: 'Theory',
              startTime: '10:00',
              endTime: '10:50',
              room: 'A203',
              color: { from: 'from-orange-300', to: 'to-amber-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Theory',
              startTime: '11:00',
              endTime: '11:50',
              room: 'A309',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            },
            {
              subjectCode: 'RO23631',
              subjectName: 'Robot Operating System',
              type: 'Lab',
              startTime: '11:50',
              endTime: '13:20',
              room: 'DGOIAL',
              color: { from: 'from-purple-300', to: 'to-violet-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A308',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            }
          ]
        },
        {
          day: 'Wednesday',
          classes: [
            {
              subjectCode: 'RO23632',
              subjectName: 'Robot Vision and Intelligence',
              type: 'Lab',
              startTime: '08:00',
              endTime: '09:40',
              room: 'DGOIAL',
              color: { from: 'from-orange-300', to: 'to-amber-300' }
            },
            {
              subjectCode: 'RO23632',
              subjectName: 'Robot Vision and Intelligence',
              type: 'Theory',
              startTime: '13:20',
              endTime: '14:10',
              room: 'A302',
              color: { from: 'from-orange-300', to: 'to-amber-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A302',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            }
          ]
        },
        {
          day: 'Thursday',
          classes: [
            {
              subjectCode: 'RO23632',
              subjectName: 'Robot Vision and Intelligence',
              type: 'Theory',
              startTime: '09:00',
              endTime: '09:50',
              room: 'A304',
              color: { from: 'from-orange-300', to: 'to-amber-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Lab',
              startTime: '10:00',
              endTime: '11:40',
              room: 'DGOIAL',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            },
            {
              subjectCode: 'RO23631',
              subjectName: 'Robot Operating System',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A109',
              color: { from: 'from-purple-300', to: 'to-violet-300' }
            }
          ]
        },
        {
          day: 'Friday',
          classes: [
            {
              subjectCode: 'RO23631',
              subjectName: 'Robot Operating System',
              type: 'Theory',
              startTime: '10:00',
              endTime: '10:50',
              room: 'A310',
              color: { from: 'from-purple-300', to: 'to-violet-300' }
            },
            {
              subjectCode: 'GE23627',
              subjectName: 'General Engineering',
              type: 'Theory',
              startTime: '11:00',
              endTime: '11:50',
              room: 'A311',
              color: { from: 'from-green-300', to: 'to-emerald-300' }
            },
            {
              subjectCode: 'GE23627',
              subjectName: 'General Engineering',
              type: 'Theory',
              startTime: '12:00',
              endTime: '12:50',
              room: 'A311',
              color: { from: 'from-green-300', to: 'to-emerald-300' }
            },
            {
              subjectCode: 'ME23612',
              subjectName: 'Design of Transmission Systems',
              type: 'Theory',
              startTime: '14:10',
              endTime: '15:00',
              room: 'A303',
              color: { from: 'from-blue-300', to: 'to-cyan-300' }
            },
            {
              subjectCode: 'RO23633',
              subjectName: 'Robot Dynamics and Motion Planning',
              type: 'Lab',
              startTime: '15:00',
              endTime: '16:40',
              room: 'DGOIAL',
              color: { from: 'from-pink-300', to: 'to-rose-300' }
            }
          ]
        },
        {
          day: 'Saturday',
          classes: []
        }
      ]
    }
  ]
}
