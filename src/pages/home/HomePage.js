import { useState, useEffect, useContext } from "react"

import AuthContext from "../../context/auth-context"

import WeightTable from "../../components/WeightTable/WeightTable"

import { Button } from "../../components/UI"

export default function HomePage() {
  const [tableData, setTableData] = useState([])
  const [isCSVUploaded, setIsCSVUploaded] = useState(false)
  const { user } = useContext(AuthContext)

  const handleFileUpload = () => {
    setIsCSVUploaded(true)
  }

  const uploadFile = () => {
    // An endpoint is needed
    console.log("GO UPLOAD!")
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
