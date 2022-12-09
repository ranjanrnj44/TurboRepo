import React, { useState } from 'react'
  
const CounterButton = () => {
    //state
    const [count, setCount] = useState(4);
  return (
    <button style={{margin:"0.2rem", padding:"0.6rem", fontWeight:"bold", width:"9rem", cursor:"pointer"}} type="button" onClick={() => setCount(prev => prev+1)} >incrementing:{count}</button>
  )
}

export default CounterButton

//visual tool to show graph is not working, need Graphviz tool to generate images
//npx turbo run build --graph=my-g.jpg 