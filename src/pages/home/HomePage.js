import { useState, useEffect, useContext } from "react"

import AuthContext from "../../context/auth-context"

import WeightTable from "../../components/WeightTable/WeightTable"

export default function HomePage() {
  const [tableData, setTableData] = useState([])
  const { user } = useContext(AuthContext)

  const fetchData = () => {
    fetch("http://localhost:5000/weights/" + user.id)
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.log("error ", error))
  }

  useEffect(fetchData, [user])

  return (
    <div>
      <h1>I am the HomePage</h1>
      <WeightTable tableData={tableData} />
    </div>
  )
}
