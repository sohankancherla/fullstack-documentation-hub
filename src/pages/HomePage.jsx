import React from 'react'
import "../style/main/HomePage.css"
import Banner from '../components/Banner'

const text = "Website is currently under construction aiming to be ready by May 2024!";

const HomePage = () => {
  return (
    <>
      <header>
        <Banner text={text} />
        <div className="magicpattern flex flex-col items-center justify-center relative py-52">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl">Everything About <span className="text-primary-700">Full Stack,</span></h1>
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl">All in One Place</h1>
        </div>
      </header>
    </>
  )
}
export default HomePage