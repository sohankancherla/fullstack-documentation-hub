import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaintBrushIcon, WindowIcon, CircleStackIcon, PlusIcon } from '@heroicons/react/24/outline'
import NavigationBar from './components/NavigationBar';
import logo from "./assets/logo/logo-transparent.png"

export default function App() {
  const navigation = [
    { name: 'UI Design', href: '#', icon: PaintBrushIcon},
    { name: 'Frontend', href: '#', icon: WindowIcon},
    { name: 'Backend', href: '#', icon: CircleStackIcon},
    { name: 'Extras', href: '#', icon: PlusIcon},
  ]
  return (
    <div className="antialiased min-h-screen bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400">
      <Router>
        <NavigationBar navigation={navigation} logo={logo} />
        <Routes>
        </Routes>
      </Router>
    </div>
  )
}