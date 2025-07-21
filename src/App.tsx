import './App.css'
import Header from './components/Header.tsx'
import Portfolio from './components/Portfolio.tsx'
import { Background } from './components/Background.tsx'

function App() {

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
          <Header />
          <Background />

        <div className="relative z-10 p-20">
          <Portfolio />
        </div>
      </div>
    </>
  )
}

export default App
