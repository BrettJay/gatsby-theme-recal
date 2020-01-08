/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import v4 from 'uuid/v4'
import { format, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns'

const getWeekdays = () => {
  const now = new Date()
  const weekdays = eachDayOfInterval({ start: startOfWeek(now, { weekStartsOn: 1 }), end: endOfWeek(now, { weekStartsOn: 1 }) }).map(day =>
    format(day, 'EEEEE'),
  )
  return weekdays
}

const CalendarHeader = () => {
  const weekdays = getWeekdays()
  return (
    <React.Fragment>
      <div
        sx={{
          borderBottomWidth: `1px`,
          borderBottomStyle: `solid`,
          borderBottomColor: `divider`,
          height: `50px`,
          display: [`block`, `block`, `none`],
        }}
      />
      <div
        sx={{
          display: `flex`,
          p: `18px 5px`,
          borderBottomWidth: `1px`,
          borderBottomStyle: `solid`,
          borderBottomColor: `divider`,
        }}>
        {weekdays.map(weekday => (
          <div
            key={v4()}
            sx={{
              flex: `0 1 14.28%`,
              fontSize: `13px`,
              fontWeight: `bold`,
              textAlign: `center`,
              color: `secondary`
            }}>
            {weekday}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default CalendarHeader