import PropTypes from "prop-types"

import styles from "./Card.module.css"

function Card(props) {
  const { borderRadius } = props
  return (
    <div className={styles.card} style={{ borderRadius: borderRadius }}>
      {props.children}
    </div>
  )
}

Card.propTypes = {
  borderRadius: PropTypes.string,
}

export default Card
