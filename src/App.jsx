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
    <Router>
      <NavigationBar navigation={navigation} logo={logo} />
      <Routes>
      </Routes>
    </Router>
  )
}