import { useState } from 'react'
import './App.css'

/*Meu proprios componentes*/
import FirstComponent from "./components/FirstComponent"
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import MeuEvents from './components/MeuEvents'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <p>Como um pai: <MyComponent /> </p>
      <MeuEvents />
      <Challenge />
    </>
  )
}

export default App
