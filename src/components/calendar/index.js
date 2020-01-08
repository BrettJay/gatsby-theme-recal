/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { PureComponent } from 'react'

import groupEntriesByMonth from "../../utils/groupEntriesByMonth"

import CalendarHeader from "./header"
import CalendarMonth from "./month"
import Entry from "../entry"

class Calendar extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.setActiveEntry = this.setActiveEntry.bind(this);
  }

  initialState = {
    entry: this.props.entries[this.props.entries.length - 1],
    showCalendarOnMobile: false
  }

  state = this.initialState

  setActiveEntry(entry) {
    this.setState(state => ({
      entry: entry,
      showCalendarOnMobile: false
    }))
  }

  toggleCalendar() {
    this.setState(state => ({
      showCalendarOnMobile: !state.showCalendarOnMobile
    }))
  }

  render() {
    const entries = groupEntriesByMonth(this.props.entries)

    return (
      <React.Fragment>
        <button
          onClick={this.toggleCalendar}
          sx={{
            position: `absolute`,
            top: `10px`,
            right: `16px`,
            zIndex: `8`,
            display: [`block`, `block`, `none`],
            'WebkitAppearance': `none`,
            borderRadius: `3px`,
            backgroundColor: `#f7f9fa`,
            color: `primary`,
            border: `0 none`,
            p: `8px 16px`,
            fontSize: `13px`,
            fontWeight: `bold`,
          }}>
          Menu
        </button>
        <div
          sx={{
            display: [`block`, `block`, `grid`],
            gridTemplateColumns: [`initial`, `initial`, `minmax(375px, 1fr) 1.5fr`],
            minHeight: [`initial`, `100vh`, `100vh`],
            background: [`divider`, `divider`, `#fff`],
          }}>
          <div
            sx={{
              position: [`absolute`, `absolute`, `initial`],
              left: `0`,
              right: `0`,
              top: `0`,
              bottom: `0`,
              zIndex: `3`,
              transformOrigin: `50% 0%`,
              background: `#fff`,
              transition: `transform 0.2s ease, opacity 0.2s ease`,
              transform:
                this.state.showCalendarOnMobile
                  ? [`scale(1)`, `scale(1)`, `scale(1)` ]
                  : [`scale(0.7)`, `scale(0.7)`, `scale(1)` ],
              opacity:
                this.state.showCalendarOnMobile
                  ? [ 1, 1, 1]
                  : [ 0, 0, 1],
            }}>
            <CalendarHeader/>
            {
              entries.map(monthlyCalendar => (
                <CalendarMonth
                  monthlyCalendar={monthlyCalendar}
                  key={monthlyCalendar.date}
                  setActiveEntry={this.setActiveEntry}
                  activeEntry={this.state.entry}
                />
              ))
            }
          </div>
          <div
            sx={{
              borderLeftWidth: [`0`, `0`, `1px`],
              borderLeftStyle: `solid`,
              borderLeftColor: `divider`,
              position: [`absolute`, `absolute`, `initial`],
              left: `0`,
              right: `0`,
              top: `0`,
              bottom: `0`,
              zIndex: `5`,
              background: `#fff`,
              transformOrigin: `50% 100%`,
              transition: `transform 0.2s ease, opacity 0.2s ease`,
              transform:
                this.state.showCalendarOnMobile
                  ? [`scale(0.7)`, `scale(0.7)`, `scale(1)` ]
                  : `scale(1)`,
              opacity:
                this.state.showCalendarOnMobile
                  ? [0, 0, 1 ]
                  : [1, 1, 1 ]
            }}>
            <Entry
              day={this.state.entry}
              images={this.props.images}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Calendar