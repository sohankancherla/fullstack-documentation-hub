import React from 'react'
import "../../style/HomePage.css"
import Banner from '../../components/HomePage/Banner'
import { Features } from '../../components/HomePage/Features';
import Header from '../../components/HomePage/Header';
import Contribute from '../../components/HomePage/Contribute';
import Roadmap from '../../components/HomePage/Roadmap';
import githubLight from "../../assets/images/github-light.png";
import githubDark from "../../assets/images/github-dark.png";

const bannerText = "Website is currently under construction aiming to be ready by May 2024!";
const headerTextOne = "Everything About "
const topicText = "Full Stack,"
const headerTextTwo = "All in One Place"


const featuresTitle = "The Ultimate Guide to Full Stack Mastery";
const featuresDesc = "Dive into comprehensive docs and resources for every layer of full stack development"
const features = [
  {
    title: 'UI Design',
    description:
      "Unlock the secrets of captivating interfaces with our extensive guides on aesthetics, usability, and user experience design.",
    image: "https://tailwindui.com/img/component-images/project-app-screenshot.png",
  },
  {
    title: 'Frontend',
    description:
      "Transform your ideas into reality with our detailed documentation on HTML, CSS, JavaScript, and modern frameworks to build interactive websites.",
    image: "https://tailwindui.com/img/component-images/project-app-screenshot.png",
  },
  {
    title: 'Backend',
    description:
      "Dive deep into server-side development with our tutorials on databases, server logic, and API integration for robust and scalable applications.",
    image: "https://tailwindui.com/img/component-images/project-app-screenshot.png",
  },
  {
    title: 'Extras',
    description:
      "Enhance your knowledge with our collection of additional resources, from supplementary information to essential tips.",
    image: "https://tailwindui.com/img/component-images/project-app-screenshot.png",
  },
]

const roadmapTitle = "Don't know where to start?";
const roadmapDesc = "Check out our Full-Stack Developer Roadmap for a step-by-step path, ensuring a seamless transition from begineer to expert. ";

const HomePage = () => {
  return (
    <>
      <header>
        <Banner text={bannerText} />
        <Header textOne={headerTextOne} topicText={topicText} textTwo={headerTextTwo}/>
      </header>
      <main>
        <section>
          <Features title={featuresTitle} descritption={featuresDesc} features={features} />
        </section>
        <section>
          <Roadmap title={roadmapTitle} descritption={roadmapDesc}/>
        </section>
        <section>
          <Contribute image={githubLight} darkImage={githubDark} />
        </section>
      </main>
    </>
  )
}
export default HomePage