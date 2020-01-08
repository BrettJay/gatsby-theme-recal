/** @jsx jsx */
import { jsx } from 'theme-ui'

import { format, isSameDay, parse } from 'date-fns'

const Day = ({ day, entry, onClick, activeEntry }) => {
  const today = new Date()
  const isToday = isSameDay(day, today)
  const hasEntry = ( entry.length > 0 )
  const isSelected = isSameDay(parse(activeEntry.frontmatter.date, 'yyyy/MM/dd', new Date()), day)

  return (
    <div
      {...entry.length && { onClick }}
      title={
        isToday
          ? `${format(day, 'MMM d')} (Today)`
          : format(day, 'MMM d')
      }
      sx={{
        textAlign: `center`,
        alignSelf: `stretch`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        borderRadius: `4px`,
        position: `relative`,
        transition: `background 0.2s ease, color 0.2s ease`,
        cursor:
          hasEntry
            ? `pointer`
            : `default`,
        color:
          isSelected
            ? `#fff`
            : hasEntry
            ? `primary`
            : `tertiary`,
        backgroundColor:
          isSelected
            ? `text`
            : hasEntry
            ? `#f7f9fa`
            : false,
      }}>
      <div>
        {isToday && <div title="Today" sx={{ width: `4px`, height: `4px`, borderRadius: `2px`, background: `red`, position: `absolute`, bottom: `20%`, left: `50%`, transform: `translateX(-50%)`}}/>}
        {format(day, 'd')}
      </div>
    </div>
  )
}

const Days = ({ days, entries, month, setActiveEntry, activeEntry }) =>
  Array(days)
    .fill(null)
    .map((x, i) => {
      const currentDay = new Date(month.getFullYear(), month.getMonth(), i + 1)
      const entryForDay = entries.filter(entry =>
        isSameDay(parse(entry.frontmatter.date, 'yyyy/MM/dd', new Date()), currentDay)
      )
      const onClick = () => setActiveEntry(entryForDay[0])
      return (
        <Day
          key={format(currentDay, 'dd-MM-yyyy')}
          day={currentDay}
          entry={entryForDay}
          activeEntry={activeEntry}
          onClick={onClick}
        />
      )
    })

export default Days
