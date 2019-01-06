import React from 'react'
import './Filter.scss'
import { connect } from 'react-redux'

const Filter = (props) => {
  return (
    <aside className="nav">
      <div>
        <label>Topic: </label>
        <select>
          <option value="all"></option>
          <option value="benefits">Education</option>
          <option value="health-care">Health Care</option>
          <option value="disability">Disability</option>
          <option value="pension">Pension</option>
          <option value="Housing">Housing</option>
          <option value="employment">Employment</option>
          <option value="events">Events</option>
          <option value="memorial">Memorials</option>
          <option value="charity">Charity</option>
        </select>
      </div>
      <div>
        <label>Branch: </label>
        <select>
          <option value="all"></option>
          <option value="army">Army</option>
          <option value="navy">Navy</option>
          <option value="air-force">Air Force</option>
          <option value="coast-guard">Coast Guard</option>
          <option value="marines">Marines</option>
        </select>
      </div>
      <div>
        <label>Source: </label>
        <select>
          <option value="all"></option>
          {props.sources.map(source => {
            return <option value={source.id}>{source.name}</option>
          })}
        </select>
      </div>
      <div>
        <label>From:</label>
        <input type="date" className="date"></input>
        <label>To:</label>
        <input type="date" className="date"></input>
      </div>
      <div>
        <button className="filter-btn">SUBMIT FILTERS</button>
      </div>
    </aside>
  )
}

const mapStateToProps = (state) => ({
  sources: state.sources
})

export default connect(mapStateToProps)(Filter)