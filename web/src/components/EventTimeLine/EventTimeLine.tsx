import { useState } from 'react'

import format from 'date-fns/format'

import EventTimelineItem from './EventTimeLineItem'
import McStaffInput from './McStaffInput'
import ScheduledAtInput from './ScheduledAtInput'
import SubmitButton from './SubmitButton'

interface Event {
  id: number
  scheduledAt: string
  mcStaff?: string
  mcSubStaff?: string
}

const eventData = [
  {
    id: 1,
    scheduledAt: '2023-03-19T13:30:00.000Z',
    mcStaff: '山田太郎',
    mcSubStaff: '鈴木次郎',
  },
  {
    id: 2,
    scheduledAt: '2023-03-21T18:00:00.000Z',
    mcStaff: '佐藤花子',
    mcSubStaff: '伊藤健太郎',
  },
  {
    id: 3,
    scheduledAt: '2023-03-26T15:00:00.000Z',
  },
]

export type EditingEvent = {
  id: number
  scheduledAt: string
  mcStaff: string
  mcSubStaff: string
}

const EditModal = ({
  editingEvent,
  onCancel,
  onSubmit,
}: {
  editingEvent: Event
  onCancel: () => void
  onSubmit: (event: Event) => void
}): JSX.Element => {
  const [mcStaff, setMcStaff] = useState(editingEvent.mcStaff ?? '')
  const [mcSubStaff, setMcSubStaff] = useState(editingEvent.mcSubStaff ?? '')

  const handleSubmit = (): void => {
    onSubmit({ ...editingEvent, mcStaff, mcSubStaff })
  }

  const onHandleCancel = (): void => {
    setMcStaff(editingEvent.mcStaff ?? '')
    setMcSubStaff(editingEvent.mcSubStaff ?? '')
    onCancel()
  }

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>

        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2">
                  <ScheduledAtInput
                    scheduledAt={
                      eventData.find((event) => event.id === editingEvent.id)
                        .scheduledAt
                    }
                    onScheduledAtChange={(_) => {}}
                  />
                  <McStaffInput
                    mcStaff={
                      eventData.find((event) => event.id === editingEvent.id)
                        .mcStaff || ''
                    }
                    onMcStaffChange={(_) => {}}
                    mcSubStaff={
                      eventData.find((event) => event.id === editingEvent.id)
                        .mcSubStaff || ''
                    }
                    onMcSubStaffChange={(_) => {}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <SubmitButton onClick={onHandleCancel}>キャンセル</SubmitButton>
            <SubmitButton onClick={handleSubmit}>保存</SubmitButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const EventTimeline = (): JSX.Element => {
  const now = new Date()

  const [editingEvent, setEditingEvent] = useState<EditingEvent | null>(null)

  const handleEditEvent = (event: Event): void => {
    setEditingEvent({
      id: event.id,
      scheduledAt: event.scheduledAt,
      mcStaff: event.mcStaff ?? '',
      mcSubStaff: event.mcSubStaff ?? '',
    })
  }

  const handleCancelEdit = (): void => {
    setEditingEvent(null)
  }

  const [upcomingEvents, pastEvents] = eventData.reduce(
    (acc, event) => {
      const eventDate = new Date(event.scheduledAt)
      if (eventDate > now) {
        acc[0].push({ ...event, isUpcoming: true })
      } else {
        acc[1].push(event)
      }
      return acc
    },
    [[], []]
  )

  upcomingEvents.sort((event1, event2) => {
    const date1 = new Date(event1.scheduledAt)
    const date2 = new Date(event2.scheduledAt)
    return date1.getTime() - date2.getTime()
  })

  const [highlightEvent, ...restUpcomingEvents] = upcomingEvents

  return (
    <div className="flex w-full flex-col space-y-8">
      {highlightEvent && (
        <div
          className="flex items-center"
          onClick={() => handleEditEvent(highlightEvent)}
          role="button"
          onKeyDown={() => handleEditEvent(highlightEvent)}
          tabIndex={0}
        >
          <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-blue-500 font-bold text-white">
            <div className="text-xs">
              {format(new Date(highlightEvent.scheduledAt), 'M') + '月'}
            </div>
            <div className="text-lg">
              {format(new Date(highlightEvent.scheduledAt), 'dd')}
            </div>
          </div>
          <div className="ml-4 font-bold text-gray-700">
            <div className="text-sm text-gray-500">次のイベント</div>
            <div className="text-lg">
              {format(new Date(highlightEvent.scheduledAt), 'yyyy年MM月dd日')}{' '}
              {highlightEvent.mcStaff &&
                highlightEvent.mcSubStaff &&
                `(${highlightEvent.mcStaff} & ${highlightEvent.mcSubStaff})`}
            </div>
          </div>
        </div>
      )}
      {restUpcomingEvents.length > 0 && (
        <div className="font-bold text-gray-700">次のイベント</div>
      )}
      {restUpcomingEvents.map((event) => (
        <div
          key={event.id}
          className="flex cursor-pointer items-center"
          onClick={() => handleEditEvent(event)}
          onKeyDown={() => handleEditEvent(event)}
          role="button"
          tabIndex={0}
        >
          <EventTimelineItem
            event={event}
            editingEventId={editingEvent?.id}
            onHandleCancel={handleCancelEdit}
            onHandleSubmit={() => {}}
          />
        </div>
      ))}
      {restUpcomingEvents.length === 0 && !highlightEvent && (
        <div className="text-lg font-bold text-gray-700">
          次のイベントはありません
        </div>
      )}
      {pastEvents.map((event) => (
        <div
          key={event.id}
          className="flex cursor-pointer items-center"
          onClick={() => handleEditEvent(event)}
          onKeyDown={() => handleEditEvent(event)}
          role="button"
          tabIndex={0}
        >
          <EventTimelineItem
            event={event}
            editingEventId={editingEvent?.id}
            onHandleCancel={handleCancelEdit}
            onHandleSubmit={() => {}}
          />
        </div>
      ))}
      {/* {editingEvent !== null && (
        <EditModal
          editingEvent={{
            id: editingEvent.id,
            scheduledAt: editingEvent.scheduledAt,
            mcStaff: editingEvent.mcStaff,
            mcSubStaff: editingEvent.mcSubStaff,
          }}
          onCancel={handleCancelEdit}
          onSubmit={handleEditEvent}
        />
      )} */}
    </div>
  )
}

export default EventTimeline
