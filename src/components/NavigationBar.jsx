import { Dialog, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, SunIcon, MoonIcon, ComputerDesktopIcon, XMarkIcon, Cog6ToothIcon, HomeIcon, UsersIcon, FolderIcon, DocumentDuplicateIcon, CalendarIcon, ChartPieIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState, Fragment } from 'react';

import logo from "../assets/logo/logo-transparent.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function NavigationBar() {

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

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
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
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-indigo-700 text-white'
                                      : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-indigo-700 text-white'
                                      : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <nav className="shadow dark:shadow-slate-950">
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 ">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="h-14 w-auto"
                      src={logo}
                      alt="FDH"
                    />
                  </a>
                </div>
                <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
                  <span
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:text-primary-700 dark:text-slate-200 dark:hover:text-primary-700 cursor-pointer"
                  >
                    UI Design
                  </span>
                  <span
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:text-primary-700 dark:text-slate-200 dark:hover:text-primary-700 cursor-pointer"
                  >
                    Frontend
                  </span>
                  <span
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:text-primary-700 dark:text-slate-200 dark:hover:text-primary-700 cursor-pointer"
                  >
                    Backend
                  </span>
                  <span
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:text-primary-700 dark:text-slate-200 dark:hover:text-primary-700 cursor-pointer"
                  >
                    Extras
                  </span>
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
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
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
                    <Menu.Items className="absolute right-0  z-10 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-slate-800  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleSetTheme('light')}
                            className={classNames(active ? 'bg-gray-100 dark:bg-slate-700' : '', theme === 'light' ? 'text-primary-700' : 'text-slate-700 dark:text-slate-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                          >
                            <SunIcon className={classNames(theme === "light" ? "stroke-primary-700" : "stroke-slate-700 dark:stroke-slate-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
                            Light
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleSetTheme('dark')}
                            className={classNames(active ? 'bg-gray-100 dark:bg-slate-700' : '', theme === 'dark' ? 'text-primary-700' : 'text-slate-700 dark:text-slate-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                          >
                            <MoonIcon className={classNames(theme === "dark" ? "stroke-primary-700" : "stroke-slate-700 dark:stroke-slate-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
                            Dark
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleSetTheme('system')}
                            className={classNames(active ? 'bg-gray-100 dark:bg-slate-700' : '', theme === 'system' ? 'text-primary-700' : 'text-slate-700 dark:text-slate-400', 'flex gap-4 px-4 py-2 text-sm cursor-pointer')}
                          >
                            <ComputerDesktopIcon className={classNames(theme === "system" ? "stroke-primary-700" : "stroke-slate-700 dark:stroke-slate-400", "h-5 w-5 stroke-2")} aria-hidden="true"/>
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
      </div>
    </>
  )
}