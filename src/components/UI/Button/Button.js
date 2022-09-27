import PropTypes from "prop-types"

import styles from "./Button.module.css"

function Button(props) {
  const { label, color, onClick } = props
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
}

export default Button
