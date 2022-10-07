
import PropTypes from 'prop-types'

export function Demo1({ name }) {
    return (
      <div>Hello, {name}</div>
    )
  }
  
  Demo1.propTypes = {
    name: PropTypes.string
  }

  Demo1.defaultProps = {
 
    name:"12"
}