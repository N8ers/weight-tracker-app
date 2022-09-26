import PropTypes from "prop-types"

import styles from "./Input.module.css"

function Input(props) {
  const { label, placeholder, type } = props
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input
