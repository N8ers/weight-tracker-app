import { useState } from "react"

import { Button, Input } from "../UI/index"

import styles from "./AddWeight.module.css"

export default function AddWeight() {
  const [newWeight, setNewWeight] = useState(0)

  const submitNewWeight = (event) => {
    event.preventDefault()

    /**
     * the userId is hardcoded right now - update later
     */
    const fullISO = new Date().toISOString()
    const date = fullISO.split("T")[0]
    const payload = {
      date: date,
      user_id: 6,
      weight: newWeight,
    }

    fetch("http://localhost:5000/weights", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("data ", data))
      .catch((error) => console.log("error ", error))
  }

  return (
    <form onSubmit={submitNewWeight} className={styles.form}>
      <Input
        placeholder={"12.33"}
        type="number"
        value={newWeight}
        updateValue={(newValue) => setNewWeight(newValue)}
      />
      <Button label="add" color="pink" type="submit" />
    </form>
  )
}
