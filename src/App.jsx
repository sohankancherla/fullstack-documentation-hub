import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
      </Routes>
    </Router>
  )
}