import { useCallback, useState } from "react"
import Age from "./age"
import Salary from "./Salary"
import Button from "./Button"


export default function Callback() {

  const [age, setAge] = useState(20)
  const [salary, setSalary] = useState(2000)

  const ageUp = useCallback(() => setAge(age + 1),[age])
  const salaryUp = useCallback(() => setSalary(salary + 1000),[salary])
  return (
    <>
      <div>
        <Age age={age} />
        <br />
        <Salary salary={salary} />
      </div>
      <div>
        <Button text={"Age Up"} action={ageUp}/>
        <Button text={"Salary Up"} action={salaryUp}/>
      </div>
    </>
  )
}
