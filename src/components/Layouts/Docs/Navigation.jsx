import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export function Navigation({ navigation, className }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-gray-900 dark:text-white">
              {section.title}
            </h2>
            <ul role="list" className="mt-2 space-y-2 border-l-2 border-gray-200 lg:mt-4 lg:space-y-4 lg:border-gray-200 dark:border-gray-800">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    to={link.href}
                    className={clsx(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === pathname
                        ? 'font-semibold text-primary-700 before:bg-primary-700'
                        : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
