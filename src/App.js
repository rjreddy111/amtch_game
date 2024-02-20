import Header from './components/Header'
import LeftBar from './components/LeftBar'
import MainContent from './components/MainContent'

import './App.css'

const App = () => (
  <>
    <Header />
    <div className="main-container">
      <LeftBar />
      <MainContent />
    </div>
  </>
)

export default App
