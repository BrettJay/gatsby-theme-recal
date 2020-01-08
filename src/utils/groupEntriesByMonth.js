import { format } from 'date-fns'

const groupEntriesByMonth = (entries) => {
  const entriesByMonthKey = entries.reduce(
    (acc, node ) => {
      const entryDate = new Date(node.frontmatter.date)
      const monthYear = format(entryDate, 'MM-yyyy')

      if (!acc[monthYear]) {
        return {
          ...acc,
          [monthYear]: [node],
        }
      }

      return {
        ...acc,
        [monthYear]: acc[monthYear].concat(node),
      }
    },
    {},
  )
  const result = Object.keys(entriesByMonthKey).map(monthKey => ({
    entries: entriesByMonthKey[monthKey],
    date: monthKey
  }))
  return result
}

export default groupEntriesByMonth