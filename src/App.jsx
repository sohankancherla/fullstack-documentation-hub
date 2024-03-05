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
  const menuNavigation = [
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

  const companyName = "FDH";
  const description = "Concise, open source, beginner friendly documentation about everything fullstack.";
  const githubLink = "https://github.com/sohankancherla/fullstack-documentation-hub";
  const columnNames = ["Conent", "Resources", "Company", "Support"];
  const footerNavigation = {
    content: [
      { name: 'UI Design', href: '#' },
      { name: 'Front End', href: '#' },
      { name: 'Back End', href: '#' },
      { name: 'Extras', href: '#' },
    ],
    resources: [
      { name: 'MDN Web Docs', href: 'https://developer.mozilla.org/en-US/' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Team', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Contribute', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    social: [
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }

  return (
    <div className="antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-400">
      <Router>
        <NavigationBar navigation={menuNavigation} logo={logo} description={description} companyName={companyName} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer logo={logo} companyName={companyName} githubLink={githubLink} columnNames={columnNames} navigation={footerNavigation}/>
      </Router>
    </div>
  )
}