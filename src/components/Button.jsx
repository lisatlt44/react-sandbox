import { useState } from "react"

export default function Button() {
  const [nbClicks, setNbClicks ] = useState(0)
  const handleClick = () => {
    setNbClicks(nbClicks + 1)
  }

  return(
    <>
    <p>Clicked {nbClicks} times</p>
      <button
        onClick={handleClick}
      >
        Click me !
      </button>
      <button
        onClick={() => setNbClicks(0)}
      >
        Reset
      </button>
    </>
  )
}