import { Query } from '@tanstack/react-query'
import './App.css'
import Fetch from './Fetch'
import Swr from './Swr'

function App() {

  return (
    <>
      <Swr />
      <Fetch />
      <Query />
    </>
  )
}

export default App
