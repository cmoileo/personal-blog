import ReactDOM from 'react-dom/client'
import App from './App'
import { UserContextProvider } from './Contexts/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <App />
    </UserContextProvider>
)
