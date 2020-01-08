/** @jsx jsx */
import { jsx } from 'theme-ui'

export function DefinitionList(props) {
  return (
    <dl
      sx={{
        position: `relative`,
        p: `16px 0 16px 20px`,
        m: `0`,
        fontSize: `13px`,
        lineHeight: `1.6`,
        borderTopWidth: `1px`,
        borderTopStyle: `solid`,
        borderTopColor: `divider`
      }}>
      {props.children}
    </dl>
  )
}

export function DefinitionTerm(props) {
  return (
    <dt
      sx={{
        float: `left`,
        fontWeight: `bold`,
        color: `secondary`
      }}>
        {props.children}
     </dt>
  )
}

export function DefinitionDetail(props) {
  return (
    <dd
      sx={{
        margin: `0 0 0 100px`,
        color: `tertiary`
      }}>
        {props.children}
     </dd>
  )
}
