import PropTypes from "prop-types"

function Button(props) {
  const { label, color } = props
  return <button style={{ backgroundColor: color }}>{label}</button>
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
}

export default Button
