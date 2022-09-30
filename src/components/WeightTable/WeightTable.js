import PropTypes from "prop-types"

import WeightTableRow from "../WeightTableRow/WeightTableRow"

import styles from "./WeightTable.module.css"

function WeightTable(props) {
  const { tableData } = props

  return (
    <div>
      <div>I am the WeightTable</div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>date</th>
            <th>id</th>
            <th>user_id</th>
            <th>weight</th>
          </tr>

          {tableData?.length &&
            tableData.map((data) => (
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
    </div>
  )
}

WeightTable.propTypes = {
  weightData: PropTypes.array,
}

export default WeightTable
