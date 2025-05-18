
import CodeEX from '../Pages/CodeEX'
import Landing from '../Pages/Landing'
import { Routes , Route } from "react-router"

function App() {
 
  return (


    <>
    
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='codeex' element={<CodeEX/>} />
      </Routes>


    </>

      

  )
}

export default App
