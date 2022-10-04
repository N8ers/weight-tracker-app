import { useState } from "react"

import { Button, Input } from "../UI/index"

export default function AddWeight() {
  const [newWeight, setNewWeight] = useState(0)

  return (
    <>
      <Input
        label="weight"
        placeholder={"12.33"}
        type="number"
        value={newWeight}
        updateValue={(newValue) => setNewWeight(newValue)}
      />
      <Button label="add" color="pink" />
    </>
  )
}
