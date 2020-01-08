/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import "./normalize.css"

require('typeface-rubik')

export default ( {children} ) => (
  <Styled.root>
    {children}
  </Styled.root>
)