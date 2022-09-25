import PropTypes from "prop-types"

function Input(props) {
  const { label, placeholder, type } = props
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input
