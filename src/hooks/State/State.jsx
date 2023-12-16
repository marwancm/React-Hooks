import { useState } from "react"



export default function State() {

  const [posts, setPosts] = useState()
  const [postsId, setPostsId] = useState(1)
  
  const handleClickUp = () => {setPostsId(prev => prev + 1)}
  const handleClickDown = () => {setPostsId(prev => prev - 1)}
  
  //you shouod use useEffect but i don't because this lesson about useState only,
  //but we well use same correct example in the useEffect in second lesson. (Effect)
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => setPosts(data))

  return(
    <>
    {posts?.map((posts)=>(
      <>
        <>
        {posts.id === postsId ? (<h1>{posts.id} : {posts.title}</h1> ) : ("")}
        </>
      </>
    ))}
    <button onClick={handleClickUp}>+</button>
    <button onClick={handleClickDown}>-</button>
    </>
  )
}













// export default function State() {
//   const [value, setValue] = useState(0) 

//     const handleClickUp = () => {setValue(prev => prev + 1)}
//     const handleClickDown = () => {setValue(prev => prev - 1)}
//   return (
//     <>
//       <div>{value}</div>
//       <button onClick={handleClickUp}>+</button>
//       <button onClick={handleClickDown}>-</button>
//     </>
//   )
// }
