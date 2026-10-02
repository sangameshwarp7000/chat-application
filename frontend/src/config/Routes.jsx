import App from '../App';
import { Routes, Route} from 'react-router';
import ChatPage from "../components/ChatPage";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/about" element={<h1>This is About Page</h1>} />
        <Route path="/contact" element={<h1>This is Contact Page</h1>} />
        <Route path="*" element={<h1>404 Page not Found</h1>} />
    </Routes>
  )
}

export default AppRoutes;