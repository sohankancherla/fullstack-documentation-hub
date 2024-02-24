import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-800">
      <Router>
        <NavigationBar />
        <Routes>
        </Routes>
      </Router>
    </div>
  )
}