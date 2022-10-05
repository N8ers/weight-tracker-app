import { useState } from "react"

import { Button, Input } from "../UI/index"

import styles from "./AddWeight.module.css"

export default function AddWeight() {
  const [newWeight, setNewWeight] = useState(0)

  const submitNewWeight = (event) => {
    event.preventDefault()
    alert(newWeight)
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
