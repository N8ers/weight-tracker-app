import PropTypes from "prop-types"

import styles from "./Input.module.css"

function Input(props) {
  const { label, placeholder, type, value, updateValue } = props

  const emitChange = (event) => {
    updateValue(event.target.value)
  }

  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input
        value={value}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={emitChange}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input
