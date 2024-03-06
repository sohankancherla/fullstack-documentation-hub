import Container from './Container'
import { Link } from 'react-router-dom';

export default function Roadmap({ title, descritption }) {
  return (
    <div
      id="get-started-today"
      className="relative overflow-hidden bg-white dark:bg-gray-900 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-700 dark:text-gray-400">
            {descritption}
          </p>
          <Link
            className='group inline-flex items-center justify-center rounded-full 
            py-2 px-4 font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 mt-10
             bg-primary-700 text-white hover:bg-primary-600' 
            to="/roadmap">
            View Roadmap
          </Link>
        </div>
      </Container>
    </div>
  )
}
  