import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../store/actions/actions'

const FilterButton = (props) => {

  return (
    <div>
      <button onClick={() => props.changeFilter('ALL')}>ALL</button>
      <button onClick={() => props.changeFilter('ACTIVE')}>Active</button>
      <button onClick={() => props.changeFilter('COMPLETED')}>Completed</button>
    </div>
  )
}



const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (filterType) => dispatch(changeFilter(filterType))
  }
}

export default connect(null, mapDispatchToProps)(FilterButton)
