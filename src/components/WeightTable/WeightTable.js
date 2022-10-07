import PropTypes from "prop-types"

import WeightTableRow from "../WeightTableRow/WeightTableRow"
import AddWeight from "../AddWeight/AddWeight"

import styles from "./WeightTable.module.css"

function WeightTable(props) {
  const { tableData } = props

  return (
    <div>
      <div>I am the WeightTable</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>date</th>
            <th>id</th>
            <th>user_id</th>
            <th>weight</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((data) => (
            <WeightTableRow
              key={data.id}
              id={data.id}
              date={data.date}
              userId={data.user_id}
              weight={data.weight}
            />
          ))}
        </tbody>
      </table>

      <AddWeight />
    </div>
  )
}

WeightTable.propTypes = {
  weightData: PropTypes.array,
}

export default WeightTable
