import AuthContextProvider from './context/AuthContext'
import './index.css'
import Roots from './routes/Routes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AuthContextProvider>
      <Roots />
    </AuthContextProvider>
  )
}

export default App
