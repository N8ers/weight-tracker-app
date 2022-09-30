import PropTypes from "prop-types"

import styles from "./WeightTableRow.module.css"

function WeightTableRow(props) {
  const { date, id, userId, weight } = props

  return (
    <>
      <tr className={styles.row}>
        <td>{date}</td>
        <td>{id}</td>
        <td>{userId}</td>
        <td>{weight}</td>
      </tr>
    </>
  )
}

WeightTableRow.propTypes = {
  date: PropTypes.string,
  id: PropTypes.number,
  userId: PropTypes.number,
  weight: PropTypes.number,
}

export default WeightTableRow
