import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  PaintBrushIcon,
  WindowIcon,
  CircleStackIcon,
  PlusIcon 
} from '@heroicons/react/24/outline'
import NavigationBar from './components/NavigationBar';
import logo from "./assets/logo/logo-transparent.png"
import Footer from './components/Footer';

import HomePage from './pages/HomePage';

export default function App() {
  const navigation = [
    { name: 'UI Design', href: '#', icon: PaintBrushIcon, subpages: [
      { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
      { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    ]},
    { name: 'Frontend', href: '#', icon: WindowIcon, subpages: [
      { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
      { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
      { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
      { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
      { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]},
    { name: 'Backend', href: '#', icon: CircleStackIcon, subpages: [
      { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
      { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
      { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
      { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
      { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]},
    { name: 'Extras', href: '#', icon: PlusIcon, subpages: [
      { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
      { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
      { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
      { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
      { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]},
  ]
  const solutions = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  return (
    <div className="antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-400">
      <Router>
        <NavigationBar navigation={navigation} logo={logo} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}