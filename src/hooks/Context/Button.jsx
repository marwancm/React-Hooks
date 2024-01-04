import { useContext } from "react"
import UserContext from "./UserContext"

export default function Button() {
  const {setUserOne} = useContext(UserContext)
  return (
    <button 
    onClick={()=>{ 
      setUserOne("Marwan Hegazy")
    }}>
      Update User
    </button>
  )
}
