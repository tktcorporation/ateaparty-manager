import React, { useState } from 'react'

import { Disclosure, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { format, isPast } from 'date-fns'

import EventTimeline from 'src/components/EventTimeLine/EventTimeLine'
import McStaffInput from 'src/components/EventTimeLine/McStaffInput'
import ScheduledAtInput from 'src/components/EventTimeLine/ScheduledAtInput'
import SubmitButton from 'src/components/EventTimeLine/SubmitButton'

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

const EventForm = ({ onSubmit }) => {
  const [scheduledAt, setScheduledAt] = useState('')
  const [mcStaff, setMcStaff] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ scheduledAt, mcStaff })
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setScheduledAt('')
    setMcStaff('')
    setIsSubmitted(false)
  }

  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <div className="text-lg font-bold text-gray-700">
            イベントを追加しました！
          </div>
          <div className="flex w-full justify-end">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
              onClick={handleReset}
            >
              別のイベントを追加する
            </button>
          </div>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {mcStaff ? (
            <div className="flex items-center">
              <div className="flex h-4 w-4">
                <CheckIcon className="h-full w-full text-green-500" />
              </div>
              <div className="ml-2 text-green-500">
                司会者が {mcStaff} に設定されました。
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                司会者の指定
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <ScheduledAtInput
                  scheduledAt={scheduledAt}
                  onScheduledAtChange={setScheduledAt}
                />
                <McStaffInput
                  mcStaff={mcStaff}
                  onMcStaffChange={setMcStaff}
                  mcSubStaff={mcStaff}
                  onMcSubStaffChange={setMcStaff}
                />
              </div>
              <SubmitButton onClick={handleSubmit}>
                イベントを追加する
              </SubmitButton>
            </div>
          )}
        </form>
      )}
    </>
  )
}

export const CalendarPage = () => {
  const [events, setEvents] = useState(eventData)

  const handleAddEvent = (event) => {
    setEvents([...events, { ...event, id: events.length + 1 }])
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-gray-700">イベント一覧</h1>
      <div className="mt-8 w-full">
        <EventTimeline />
      </div>
      <div className="mt-8 w-full">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50">
                <span>イベントを追加する</span>
                <span className="ml-3">
                  {open ? (
                    <svg
                      className="h-5 w-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.6a6.4 6.4 0 110-12.8 6.4 6.4 0 010 12.8zM10 8a1 1 0 011 1v1.5a1 1 0 01-2 0V9a1 1 0 011-1zm0 5a1 1 0 110-2 1 1 0 010 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <EventForm onSubmit={handleAddEvent} />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default CalendarPage
