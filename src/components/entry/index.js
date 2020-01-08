/** @jsx jsx */
import { jsx } from 'theme-ui'
import { format, parse } from 'date-fns'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Image from "./image"
import EntryLocations from "./locations"
import EntryWeather from "./weather"

function Entry(props) {
  const { day } = props

  return (
    <div
      sx={{
        overflow: `scroll`,
        height: `100vh`,
        'WebkitOverflowScrolling': 'touch',
        position: 'relative'
      }}>
      <div
        sx={{
          textAlign: `center`,
          lineHeight: `50px`,
          borderBottomWidth: `1px`,
          borderBottomStyle: `solid`,
          borderBottomColor: `divider`,
          position: `sticky`,
          top: `0`,
          background: `#fff`,
          color: `primary`,
          zIndex: `1`
        }}>
        {format(parse(day.frontmatter.date, 'yyyy/MM/dd', new Date()), 'EEEE d MMM, yyyy')}
      </div>
      <Image date={day.frontmatter.date}/>
      <div
        sx={{
          maxWidth: `800px`,
          m: `0 auto`,
          p: [`20px 16px 40px`, `40px 20px 40px`, `40px 80px 80px`],
        }}>
        <MDXRenderer>
          {day.body}
        </MDXRenderer>
        <div sx={{ m: `60px 0 0` }}>
          {day.frontmatter.locations.length && <EntryLocations day={day}/>}
          <EntryWeather day={day}/>
        </div>
      </div>
    </div>
  )
}

export default Entry
