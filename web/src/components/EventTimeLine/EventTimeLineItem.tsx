import React from 'react'

import { format } from 'date-fns'

import { EditingEvent } from './EventTimeLine'
import McStaffInput from './McStaffInput'
import SubmitButton from './SubmitButton'

interface Event {
  id: number
  scheduledAt: string
  mcStaff?: string
  mcSubStaff?: string
}
type Props = {
  event: Event
  editingEventId?: number
  onHandleSubmit: () => void
  onHandleCancel: () => void
}

const EditComponent = ({
  editingEvent,
  onCancel,
  onSubmit,
}: {
  editingEvent: EditingEvent
  onCancel: () => void
  onSubmit: (event: Event) => void
}): JSX.Element => {
  return (
    <div className="flex items-center">
      <McStaffInput
        mcStaff={editingEvent.mcStaff ?? ''}
        onMcStaffChange={(_) => {}}
        mcSubStaff={editingEvent.mcSubStaff ?? ''}
        onMcSubStaffChange={(_) => {}}
      />
      <div className="flex justify-end">
        <SubmitButton onClick={() => onCancel()}>キャンセル</SubmitButton>
        <SubmitButton
          onClick={() => {
            onSubmit(editingEvent)
          }}
        >
          保存
        </SubmitButton>
      </div>
    </div>
  )
}

const EventTimelineItem = ({
  event,
  onHandleSubmit,
  onHandleCancel,
  editingEventId,
}: Props) => {
  return (
    <>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 text-white">
        {format(new Date(event.scheduledAt), 'dd')}
      </div>
      <div className="ml-4 text-gray-500">
        <div className="text-sm">
          {format(new Date(event.scheduledAt), 'yyyy年MM月dd日')}
        </div>
        {editingEventId === event.id ? (
          <div className="flex items-center">
            <EditComponent
              editingEvent={{
                id: event.id,
                scheduledAt: event.scheduledAt,
                mcStaff: event.mcStaff,
                mcSubStaff: event.mcSubStaff,
              }}
              onCancel={() => onHandleCancel()}
              onSubmit={() => onHandleSubmit()}
            />
          </div>
        ) : event.mcStaff && event.mcSubStaff ? (
          <div>
            {event.mcStaff} & {event.mcSubStaff}司会のイベント
          </div>
        ) : (
          <div>司会者未定のイベント</div>
        )}
      </div>
    </>
  )
}

export default EventTimelineItem
