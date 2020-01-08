/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { format, parse } from 'date-fns'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Image from "./image"
import EntryLocations from "./locations"
import EntryWeather from "./weather"

function EntryContainer(props) {
  return (
    <div
      sx={{
        overflow: `scroll`,
        'WebkitOverflowScrolling': 'touch',
        position: 'relative'
      }}>
      {props.children}
    </div>
  )
}

function EntryHeader(props) {
  return (
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
      {props.children}
    </div>
  )
}

function EntryBody(props) {
  return (
    <div
      sx={{
        maxWidth: `800px`,
        m: `0 auto`,
        p: [`20px 16px 40px`, `40px 20px 40px`, `40px 80px 80px`],
      }}>
      {props.children}
    </div>
  )
}

function Entry(props) {
  const { day } = props
  if (!day) {
    return (
      <EntryContainer>
        <EntryHeader>No entries found</EntryHeader>
        <EntryBody>
          <Styled.h2
            sx={{
              textAlign: `center`,
            }}>
            No log entries found
          </Styled.h2>
          <Styled.p
            sx={{
              textAlign: `center`,
            }}>
            Check the <span sx={{ p: `3px 6px`, color: 'tertiary', background: '#f7f9fa', display: `inline-block`, borderRadius: `6px`}}>/entries/</span> directory.
          </Styled.p>
        </EntryBody>
      </EntryContainer>
    )
  }
  return (
    <EntryContainer>
      <EntryHeader>
        {format(parse(day.frontmatter.date, 'yyyy/MM/dd', new Date()), 'EEEE d MMM, yyyy')}
      </EntryHeader>
      <Image date={day.frontmatter.date}/>
      <EntryBody>
        <MDXRenderer>
          {day.body}
        </MDXRenderer>
        <div sx={{ m: `60px 0 0` }}>
          {day.frontmatter.locations.length && <EntryLocations day={day}/>}
          <EntryWeather day={day}/>
        </div>
      </EntryBody>
    </EntryContainer>
  )
}

export default Entry
