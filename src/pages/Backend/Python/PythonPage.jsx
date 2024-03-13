import React from 'react'
import DocsLayout from '../../../components/Layouts/Docs/DocsLayout'
import DocsHeader from '../../../components/Layouts/Docs/DocsHeader'
import Header2 from '../../../components/Layouts/Docs/Header2'
import Header3 from '../../../components/Layouts/Docs/Header3'
import Table from '../../../components/Layouts/Docs/Table'
import UnorderedList from '../../../components/Layouts/Docs/UnorderedList'
import DocLink from '../../../components/Layouts/Docs/DocLink'

const title = "What is Python?"
const section = "Introduction"
const description = "Python is a programming language loved by many for its simple and intuitive syntax."
const prevNext = {
    previousPage: null,
    previousHref: null,
    nextPage: "Installation",
    nextHref: "/backend/python/installation"
}
const tableOfContents = [
  {
    id: "popularity", title: "Popularity", children: [
    ]
  },
  {
    id: "applications", title: "Applications", children: [
      { id: "automation", title: "Automation" },
      { id: "web", title: "Web Development" },
      { id: "data", title: "Data Analysis" },
      { id: "ai", title: "Artificial Intelligence" },
    ]
  },
];


const PythonPage = () => {
  return (
    <DocsLayout 
      prevNext={prevNext}
      tableOfContents={tableOfContents}
      content={
        <>
          <DocsHeader title={title} section={section} description={description}/>
          <p>
            Meta, Amazon, Apple, Google, and Microsoft are few of the many companies that use Python in their tech stack.
          </p>

          <Header2 id={"popularity"} text={"Popularity"} />
          <p>
            In 2023, Python was the second most in-demand programming language among employers.
          </p>
          <Table />
          <p>Source: <DocLink href="https://www.devjobsscanner.com/blog/top-8-most-demanded-programming-languages/">devjobsscanner</DocLink></p>
          
          <Header2 id={"applications"} text={"Applications"} />
          <p>
            Developers use Python for many different applications because of its extensive collection of libraries.
          </p>
          <Header3 id={"automation"} text={"Automation"}/>
          <p>
            Python is a popular choice for automating repetitive tasks,
            thanks to its quick development time compared to other programming languages.
          </p>
          <UnorderedList text={"Libraries:"} list={["Selenium", "Paramiko"]}/>
          <Header3 id={"web"} text={"Web Development"}/>
          <p>
            Python is used for backend web development with the help of frameworks 
            that offer developers the ability to create secure and scalable web applications.
          </p>
          <UnorderedList text={"Frameworks:"} list={["Django", "Flask"]}/>
          <Header3 id={"data"} text={"Data Analysis"}/>
          <p>
            Python offers robust libraries that make it easy to process, analyze, and visualize data.
          </p>
          <UnorderedList text={"Libraries:"} list={["Pandas", "Numpy", "Matplotlib"]}/>
          <Header3 id={"ai"} text={"Artificial Intelligence"}/>
          <p>
            Python is at the forefront of AI development, providing 
            a rich ecosystem of libraries that streamline the creation of machine learning models.
          </p>
          <UnorderedList text={"Libraries:"} list={["Scikit-learn", "TensorFlow", "PyTorch"]}/>
        </>
      }
    />
  )
}

export default PythonPage