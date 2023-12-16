import React, { useMemo, useState } from 'react'

export default function Memo() {
  const [countOne, setCountOne] = useState(0)
  const [countTow, setCountTow] = useState(0)
  const changeOne = () =>{setCountOne(prev => prev + 1)}
  const changeTow = () =>{setCountTow(prev => prev + 1)}

  const toEvent = useMemo(()=>{
    let i = 0
    while(i < 200000000) i++
    return countOne  % 2 === 0
  },[countOne])
  
  return (
    <>
    <button onClick={changeOne}>{countOne}</button>
    <h1>{toEvent ? 'Even' : 'Odd'}</h1>
    <button onClick={changeTow}>{countTow}</button>
    </>
  )
}
