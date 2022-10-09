import PropTypes from "prop-types"

import styles from "./WeightTableRow.module.css"

function WeightTableRow(props) {
  const { date, id, userId, weight } = props

  const deleteWeight = () => {
    fetch("http://localhost:5000/weights/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("data ", data))
      .catch((error) => console.log("error ", error))
  }

  return (
    <tr className={styles.row}>
      <td>{date}</td>
      <td>{id}</td>
      <td>{userId}</td>
      <td>{weight}</td>
      <td>
        <button onClick={deleteWeight}>x</button>
      </td>
    </tr>
  )
}

WeightTableRow.propTypes = {
  date: PropTypes.string,
  id: PropTypes.number,
  userId: PropTypes.number,
  weight: PropTypes.number,
}

export default WeightTableRow
