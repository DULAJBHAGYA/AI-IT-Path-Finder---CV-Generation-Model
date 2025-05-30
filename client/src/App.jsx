import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage'
import CVPreviewPage from './pages/CVPreviewPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/cv-preview" element={<CVPreviewPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
