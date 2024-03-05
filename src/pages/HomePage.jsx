import React from 'react'
import "../style/main/HomePage.css"
import Banner from '../components/HomePage/Banner'
import { Features } from '../components/HomePage/Features';
import Header from '../components/HomePage/Header';

const bannerText = "Website is currently under construction aiming to be ready by May 2024!";
const headerTextOne = "Everything About "
const topicText = "Full Stack,"
const headerTextTwo = "All in One Place"

const HomePage = () => {
  return (
    <>
      <header>
        <Banner text={bannerText} />
        <Header textOne={headerTextOne} topicText={topicText} textTwo={headerTextTwo}/>
      </header>
      <main>
        <section>
          <Features/>
        </section>
      </main>
    </>
  )
}
export default HomePage