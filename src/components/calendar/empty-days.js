/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import PropTypes from 'prop-types'

import v4 from 'uuid/v4'

const EmptyDays = ({ days }) => (
  <React.Fragment>
    {Array(days)
      .fill(null)
      .map(() => (
        <div
          key={v4()}
          sx={{
            textAlign: `center`,
            alignSelf: `center`
          }}
        />
      ))}
  </React.Fragment>
)

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired,
}

export default EmptyDays
