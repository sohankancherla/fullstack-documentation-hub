import React from 'react'
import "../style/main/HomePage.css"
import Banner from '../components/HomePage/Banner'
import { Features } from '../components/HomePage/Features';
import Header from '../components/HomePage/Header';

const bannerText = "Website is currently under construction aiming to be ready by May 2024!";
const headerTextOne = "Everything About "
const topicText = "Full Stack,"
const headerTextTwo = "All in One Place"

const features = [
  {
    title: 'UI Design',
    description:
      "Unlock the secrets of captivating interfaces with our extensive guides on aesthetics, usability, and user experience design.",
    image: "",
  },
  {
    title: 'Frontend',
    description:
      "Transform your ideas into reality with our detailed documentation on HTML, CSS, JavaScript, and modern frameworks to build interactive websites.",
    image: "",
  },
  {
    title: 'Backend',
    description:
      "Dive deep into server-side development with our tutorials on databases, server logic, and API integration for robust and scalable applications.",
    image: "",
  },
  {
    title: 'Extras',
    description:
      "Enhance your knowledge with our collection of additional resources, from additional information to essential tips.",
    image: "",
  },
]

const HomePage = () => {
  return (
    <>
      <header>
        <Banner text={bannerText} />
        <Header textOne={headerTextOne} topicText={topicText} textTwo={headerTextTwo}/>
      </header>
      <main>
        <section>
          <Features features={features} />
        </section>
      </main>
    </>
  )
}
export default HomePage