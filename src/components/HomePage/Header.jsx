import React from 'react'

const Header = ({ textOne, topicText, textTwo }) => {
  return (
    <div className="magicpattern flex flex-col items-center justify-center relative py-60">
        <h1 className="text-3xl font-normal tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            {textOne}
            <span className="text-primary-700">{topicText}</span>
        </h1>
        <h1 className="text-3xl font-normal tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            {textTwo}
        </h1>
    </div>
  )
}

export default Header