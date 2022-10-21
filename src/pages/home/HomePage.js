import { useState, useEffect, useContext } from "react"

import AuthContext from "../../context/auth-context"

import WeightTable from "../../components/WeightTable/WeightTable"

import { Button } from "../../components/UI"

export default function HomePage() {
  const [tableData, setTableData] = useState([])
  const [isCSVUploaded, setIsCSVUploaded] = useState(false)
  const [csvFile, setCSVFile] = useState(null)
  const { user } = useContext(AuthContext)

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    setIsCSVUploaded(true)
    setCSVFile(file)
  }

  const uploadFile = () => {
    fetch("http://localhost:5000/csv", {
      method: "POST",
      body: JSON.stringify(csvFile),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("data ", data))
      .catch((error) => console.log("error ", error))
  }

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
      <div>
        <span>Upload CSV: </span>
        <input type="file" onChange={handleFileUpload} />
        {isCSVUploaded && (
          <Button label="upload CSV" color="green" onClick={uploadFile} />
        )}
      </div>
      <WeightTable tableData={tableData} />
    </div>
  )
}
