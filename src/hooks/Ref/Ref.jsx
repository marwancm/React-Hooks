import React, { useRef } from 'react'

export default function Ref() {
  const lastPost = useRef()

  const moveDown = () => {
    lastPost.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <>
    <h1>GO TO PARAGRAPH</h1>
    <button onClick={moveDown}>Move Down!</button>
    <div> 
      <section>
        <img src="https:picsum.photos/id/238/200/200"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda dignissimos hic necessitatibus facilis exercitationem sunt dolores eius maiores, at cum dolore, possimus esse, blanditiis laboriosam ratione aspernatur odio ullam!</p>
      </section>

      <section>
        <img src="https:picsum.photos/id/238/200/200"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda dignissimos hic necessitatibus facilis exercitationem sunt dolores eius maiores, at cum dolore, possimus esse, blanditiis laboriosam ratione aspernatur odio ullam!</p>
      </section>

      <section>
        <img src="https:picsum.photos/id/238/200/200"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda dignissimos hic necessitatibus facilis exercitationem sunt dolores eius maiores, at cum dolore, possimus esse, blanditiis laboriosam ratione aspernatur odio ullam!</p>
      </section>

      <section>
        <img src="https:picsum.photos/id/238/200/200"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda dignissimos hic necessitatibus facilis exercitationem sunt dolores eius maiores, at cum dolore, possimus esse, blanditiis laboriosam ratione aspernatur odio ullam!</p>
      </section>

      <section>
        <img src="https:picsum.photos/id/238/200/200"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda dignissimos hic necessitatibus facilis exercitationem sunt dolores eius maiores, at cum dolore, possimus esse, blanditiis laboriosam ratione aspernatur odio ullam!</p>
      </section>

      <section>
        <img src="https:picsum.photos/id/238/200/200"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda dignissimos hic necessitatibus facilis exercitationem sunt dolores eius maiores, at cum dolore, possimus esse, blanditiis laboriosam ratione aspernatur odio ullam!</p>
      </section>

      <section>
        <img src="https:picsum.photos/id/238/200/200"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda dignissimos hic necessitatibus facilis exercitationem sunt dolores eius maiores, at cum dolore, possimus esse, blanditiis laboriosam ratione aspernatur odio ullam!</p>
      </section>

      <section>
        <img src="https:picsum.photos/id/238/200/200"/>
        <p ref={lastPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda dignissimos hic necessitatibus facilis exercitationem sunt dolores eius maiores, at cum dolore, possimus esse, blanditiis laboriosam ratione aspernatur odio ullam!</p>
      </section>
    </div>
    </>
  )
}
