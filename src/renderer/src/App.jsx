import SideBar from './components/SideBar'
import Chat from './components/Chat'

const App = () => (
  <div className="flex items-stretch container mx-auto h-dvh bg-black">
    <SideBar />
    <Chat />
  </div>
)

export default App
