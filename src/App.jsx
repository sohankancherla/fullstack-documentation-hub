import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <div className="antialiased min-h-screen bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400">
      <Router>
        <NavigationBar />
        <Routes>
        </Routes>
      </Router>
    </div>
  )
}