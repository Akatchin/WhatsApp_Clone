import './App.css'
import { SideBar } from './components/sidebar'
import { ContentArea } from './components/contentarea'

function App() {

  return (
    <div className='app-window'>
      <SideBar/>
      <ContentArea/>
    </div>
  )
}

export default App
