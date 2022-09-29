import styles from "./WeightTable.module.css"

export default function WeightTable() {
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
        </tbody>
      </table>
    </div>
  )
}
