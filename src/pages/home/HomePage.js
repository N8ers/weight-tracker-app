import { useState, useEffect } from "react"

import WeightTable from "../../components/WeightTable/WeightTable"

export default function HomePage() {
  const [tableData, setTableData] = useState([])

  const fetchData = () => {
    fetch("http://localhost:5000/weights/6")
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.log("error ", error))
  }

  useEffect(fetchData, [])

  return (
    <div>
      <h1>I am the HomePage</h1>
      <WeightTable tableData={tableData} />
    </div>
  )
}
