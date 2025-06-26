import { useState } from 'react'
import {Hijo} from './hijo'

function App() {

const {color, setColor} = useState ("green")

  return (
    <div style = {{backgroundColor: color}}>
      <h2>Color actual: {color} </h2>
      <Hijo color = {color} setColor={setColor} />
    </div>

  )
}

export default App
