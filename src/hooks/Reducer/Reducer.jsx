// import React, { useReducer } from 'react'


// export default function Reducer() {
  
  //   const initiaState = {count : 0 }
  //   const reducer = (state, action) => {

    //     switch(action.type){
      //       case 'up' : return {count: state.count + 1}
      //       case 'reset' : return {count: 0}
//       case 'down' : return {count: state.count - 1}
//       default: state;
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, initiaState)

//   return (
//     <>
//     <h1>{state.count}</h1>
//     <button onClick={()=>{dispatch({type: 'up'})}}>Up</button>
//     <button onClick={()=>{dispatch({type: 'reset'})}}>Reset</button>
//     <button onClick={()=>{dispatch({type: 'down'})}}>Down</button>
//     </>
//   )
// }

// More example
import "./Reducer.css";
import { useReducer } from "react"


export default function Reducer() {

  const initiaStat = {
    username: "",
    email: "",
    notes: "",
  }

  const reducer = (state, action) => {
    switch (action.type){
      case "input":
      return {...state,[action.field] : action.value};
      case "reset":
      return initiaStat;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initiaStat)

  const handleChange = (e) => {
    dispatch({
      type: "input",
      field: e.target.name,
      value: e.target.value
  })
  }

  const handleReset = () => {dispatch({type: "reset"})}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    return state;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Username:
        <input type='text' name='username' value={state.username} onChange={handleChange}/>
      </label>

      <label> Email:
        <input type='email' name='email' value={state.email} onChange={handleChange}/>
      </label>

      <label> Notes:
        <textarea name="notes" value={state.notes} onChange={handleChange}></textarea>
      </label>

      <button type='submit'>Submit</button>
      <button type='button' onClick={handleReset}>Reset</button>
    </form>
  )
}
