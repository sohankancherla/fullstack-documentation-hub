import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { Bars3Icon, SunIcon, MoonIcon, ComputerDesktopIcon, XMarkIcon, Cog6ToothIcon, HomeIcon, UsersIcon, FolderIcon, DocumentDuplicateIcon, CalendarIcon, ChartPieIcon } from '@heroicons/react/24/outline'

export default function App() {
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  ]
  return (
    <div className="antialiased min-h-screen bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400">
      <Router>
        <NavigationBar navigation={navigation} />
        <Routes>
        </Routes>
      </Router>
    </div>
  )
}