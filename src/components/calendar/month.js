/** @jsx jsx */
import { jsx } from 'theme-ui'

import EmptyDays from "./empty-days"
import Days from "./days"

import { getDaysInMonth, getISODay, format } from 'date-fns'

function MonthView(props) {
  return (
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(7, 1fr)`,
        gridGap: `5px`,
      }}
      {...props}>
      {props.children}
    </div>
  )
}

const CalendarMonth = ({ monthlyCalendar, setActiveEntry, activeEntry }) => {
  const [currentMonthNumber, currentYear] = monthlyCalendar.date.split('-')

  const currentMonth = new Date(
    currentYear,
    parseInt(currentMonthNumber, 10) - 1,
    1,
  )

  const currentMonthIsoDay = getISODay(currentMonth)
  const currentMonthDays = getDaysInMonth(currentMonth)
  const emptyDaysAtBeginning = (currentMonthIsoDay - 1)
  const emptyDaysAtEnd = 7 - ((currentMonthIsoDay + currentMonthDays) % 7)

  return (
    <div
      sx={{
        p: `0 5px`
      }}>
      <MonthView
        sx={{
          gridAutoRows: `40px`
        }}>
        {currentMonthIsoDay !== 1 && <EmptyDays days={emptyDaysAtBeginning} />}
        <div
          sx={{
            textAlign: `center`,
            alignSelf: `center`,
            color: `tertiary`,
          }}>
          {`${format(currentMonth, 'MMM')} `}
        </div>
      </MonthView>
      <MonthView
        sx={{
          gridAutoRows: `minmax(50px, 5vw)`
        }}>
        {currentMonthIsoDay !== 1 && <EmptyDays days={emptyDaysAtBeginning} />}
        <Days
          days={currentMonthDays}
          month={currentMonth}
          entries={monthlyCalendar.entries}
          setActiveEntry={setActiveEntry}
          activeEntry={activeEntry}
        />
        {emptyDaysAtEnd !== 7 && <EmptyDays days={emptyDaysAtEnd} />}
      </MonthView>
    </div>
  )
}

export default CalendarMonth