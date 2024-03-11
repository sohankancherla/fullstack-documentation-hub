import { Dialog, Menu, Transition, Popover } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, SunIcon, MoonIcon, ComputerDesktopIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationBar({navigation, logo, companyName}) {

  const getCurrentTheme = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'system-dark' : 'system-light';
    }
    return theme;
  };

  const [theme, setTheme] = useState(() => window.localStorage.getItem('theme') || 'system');
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme());

  useEffect(() => {
    setCurrentTheme(getCurrentTheme());

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', e.matches);
      }
      setCurrentTheme(getCurrentTheme());
    };
    mediaQuery.addEventListener('change', handleChange);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else if (theme === 'light') document.documentElement.classList.remove('dark');
    else document.documentElement.classList.toggle('dark', mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const handleSetTheme = (newTheme) => {
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (currentTheme === "dark" || currentTheme === "system-dark") {
    document.body.classList.add('bg-gray-900');
  } else {
    document.body.classList.remove('bg-gray-900');
  }

  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-800 px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Link to="/">
                      <img
                        className="h-12 w-auto"
                        src={logo}
                        alt={companyName}
                      />
                    </Link>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="text-gray-700 dark:text-white hover:text-white dark:hover:text-white hover:bg-primary-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              >
                                <item.icon
                                  className="text-gray-700 dark:text-white group-hover:text-white dark:group-hover:text-white hover:bg-primary-700 h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <Menu as="div" className="relative -mx-2">
                          <Menu.Button className="text-gray-700 dark:text-white hover:text-white dark:hover:text-white hover:bg-primary-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Dark Mode</span>
                            {(currentTheme === "light") ? (
                              <SunIcon className="stroke-gray-700 dark:stroke-white group-hover:stroke-white dark:group-hover:stoke-white h-6 w-6 shrink-0" aria-hidden="true" />
                            ) : ((currentTheme === "dark") ? 
                            (<MoonIcon className="stroke-gray-700 dark:stroke-white group-hover:stroke-white dark:group-hover:stoke-white h-6 w-6 shrink-0" aria-hidden="true" />
                            ) : (
                              <ComputerDesktopIcon className="stroke-gray-700 dark:stroke-white group-hover:stroke-white dark:group-hover:stoke-white h-6 w-6 shrink-0" aria-hidden="true" />
                            ))}
                            Appearance
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 bottom-12 z-10 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-gray-800  py-1 shadow-lg dark:shadow-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    onClick={() => handleSetTheme('light')}
                                    className={classNames(active ? 'bg-gray-100 dark:bg-gray-700' : '', theme === 'light' ? 'text-primary-700' : 'text-gray-700 dark:text-gray-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                                  >
                                    <SunIcon className={classNames(theme === "light" ? "stroke-primary-700" : "stroke-gray-700 dark:stroke-gray-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
                                    Light
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    onClick={() => handleSetTheme('dark')}
                                    className={classNames(active ? 'bg-gray-100 dark:bg-gray-700' : '', theme === 'dark' ? 'text-primary-700' : 'text-gray-700 dark:text-gray-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                                  >
                                    <MoonIcon className={classNames(theme === "dark" ? "stroke-primary-700" : "stroke-gray-700 dark:stroke-gray-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
                                    Dark
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    onClick={() => handleSetTheme('system')}
                                    className={classNames(active ? 'bg-gray-100 dark:bg-gray-700' : '', theme === 'system' ? 'text-primary-700' : 'text-gray-700 dark:text-gray-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                                  >
                                    <ComputerDesktopIcon className={classNames(theme === "system" ? "stroke-primary-700" : "stroke-gray-700 dark:stroke-gray-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
                                    System
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <nav className="shadow dark:shadow-gray-950">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="h-14 w-auto"
                    src={logo}
                    alt={companyName}
                  />
                </Link>
              </div>
              <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
                {navigation.map((item) => (
                  <Popover className="relative mt-4" key={item.name}>
                    <Popover.Button className="inline-flex items-center gap-x-0 text-sm font-semibold leading-6 text-gray-700 hover:text-primary-600 dark:text-white dark:hover:text-primary-600 focus:outline-none ui-open:text-primary-700 dark:ui-open:text-primary-700">
                      <span
                        className="px-1 pt-1 text-sm leading-6 font-semibold cursor-pointer"
                      >
                        {item.name}
                      </span>
                      <ChevronDownIcon className="h-3 w-3 ui-open:rotate-180 ui-open:transform" aria-hidden="true" />
                    </Popover.Button>
              
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-32 2xl:left-1/2 z-10 mt-6 flex w-screen max-w-max 2xl:-translate-x-1/2 px-4">
                        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-gray-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                          <div className="p-4">
                            {item.subpages.map((page) => (
                              <div key={page.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-800">
                                  <page.icon className="h-6 w-6 text-gray-700 dark:text-gray-400 group-hover:text-primary-700" aria-hidden="true" />
                                </div>
                                <div>
                                  <Popover.Button as={Link} to={page.href} className="font-semibold text-gray-900 dark:text-white">
                                    {page.name}
                                    <span className="absolute inset-0" />
                                  </Popover.Button>
                                  <p className="mt-1 text-gray-700 dark:text-gray-400">{page.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 divide-x divide-gray-900/5 dark:divide-gray-800 bg-gray-50 dark:bg-gray-700">
                            <Popover.Button
                              as={Link}
                              key={item.name}
                              to={item.href}
                              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              View More
                            </Popover.Button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ))}
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <div
                    id="search"
                    className="block hover:cursor-pointer w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 ring-1 ring-inset ring-gray-300 hover:bg-white text-gray-400 sm:text-sm sm:leading-6"
                    onClick={() => setShowSearch(true)}
                  >
                    Search
                  </div>
                  {showSearch && <Search open={showSearch} setOpen={setShowSearch}/>}
                </div>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:items-center">
              <Menu as="div" className="relative">
                <div>
                <Menu.Button className="relative flex-shrink-0 rounded-full p-1">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Dark Mode</span>
                  {(currentTheme === "light" || currentTheme === "system-light") ? (
                    <SunIcon className={classNames(currentTheme === "light" ? "stroke-primary-700" : "stroke-gray-400", "h-5 w-5 stroke-2")} aria-hidden="true" />
                  ) : (
                    <MoonIcon className={classNames(currentTheme === "dark" ? "stroke-primary-700" : "stroke-gray-400", "h-5 w-5 stroke-2")} aria-hidden="true" />
                  )}
                </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 2xl:left-1/2 2xl:-translate-x-1/2 z-10 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-gray-800  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => handleSetTheme('light')}
                          className={classNames(active ? 'bg-gray-100 dark:bg-gray-700' : '', theme === 'light' ? 'text-primary-700' : 'text-gray-700 dark:text-gray-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                        >
                          <SunIcon className={classNames(theme === "light" ? "stroke-primary-700" : "stroke-gray-700 dark:stroke-gray-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
                          Light
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => handleSetTheme('dark')}
                          className={classNames(active ? 'bg-gray-100 dark:bg-gray-700' : '', theme === 'dark' ? 'text-primary-700' : 'text-gray-700 dark:text-gray-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                        >
                          <MoonIcon className={classNames(theme === "dark" ? "stroke-primary-700" : "stroke-gray-700 dark:stroke-gray-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
                          Dark
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => handleSetTheme('system')}
                          className={classNames(active ? 'bg-gray-100 dark:bg-gray-700' : '', theme === 'system' ? 'text-primary-700' : 'text-gray-700 dark:text-gray-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                        >
                          <ComputerDesktopIcon className={classNames(theme === "system" ? "stroke-primary-700" : "stroke-gray-700 dark:stroke-gray-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
                          System
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}