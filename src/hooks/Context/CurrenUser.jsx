import { useContext } from "react"
import UserContext from "./UserContext"

export default function CurrenUser() {
  const {userOne} = useContext(UserContext)
  return (
    <div>{userOne}</div>
  )
}
