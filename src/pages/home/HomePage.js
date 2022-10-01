import { useState, useEffect } from "react"

import WeightTable from "../../components/WeightTable/WeightTable"

export default function HomePage() {
  const [tableData, setTableData] = useState([])

  const fetchData = () => {
    console.log("go get data!")
    const dummyData = [
      {
        date: "2022-09-04",
        id: 2,
        user_id: 6,
        weight: 7.9,
      },
      {
        date: "2022-08-04",
        id: 3,
        user_id: 6,
        weight: 18.7,
      },
      {
        date: "2022-07-04",
        id: 4,
        user_id: 6,
        weight: 6,
      },
    ]
    setTableData(dummyData)
  }

  useEffect(fetchData, [])

  return (
    <div>
      <h1>I am the HomePage</h1>
      <WeightTable tableData={tableData} />
    </div>
  )
}
