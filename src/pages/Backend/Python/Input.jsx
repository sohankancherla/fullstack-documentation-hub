import React from 'react'
import DocsLayout from '../../../components/Layouts/Docs/DocsLayout'
import DocsHeader from '../../../components/Layouts/Docs/DocsHeader'
import Header2 from '../../../components/Layouts/Docs/Header2'
import Terminal from '../../../components/Layouts/Docs/Terminal'
import TextCode from '../../../components/Layouts/Docs/TextCode'
import DocCode from '../../../components/Layouts/Docs/DocCode'

const title = "Input"
const section = "Introduction"
const description = "Get information from the user"
const prevNext = {
    previousPage: "Print",
    previousHref: "/backend/python",
    nextPage: "Len",
    nextHref: "/backend/python/len"
}
const tableOfContents = [
  {
    id: "input", title: "Using Input", children: []
  },
];

const code1 = `
name = input("What is your name: ")
print(f"Hello, {name}!")
`
const terminal1 = `
What is your name: Bob
Hello, Bob!
`

const code2 = `
age = int(input("What is your age: "))
print(f"You are {age} years old!")
`
const terminal2 = `
What is your age: 25
You are 25 years old!
`

export default function Input() {
  return (
    <DocsLayout 
      prevNext={prevNext}
      tableOfContents={tableOfContents}
      content={
        <>
            <DocsHeader title={title} section={section} description={description}/>

            <Header2 id={"input"} text={"Using Input"} />
            <p>
                Get information from the user by using <TextCode text={"input()"} /> and 
                placing a prompt inside of <TextCode text={'""'} />
            </p>
            <DocCode code={code1} language="python" />
            <p>Output:</p>
            <Terminal text={terminal1}/>
            <br />
            <p>
                By default, the input will be a string. Cast the string as an int using <TextCode text={'int()'} /> to 
                get an integer as an input.
            </p>
            <DocCode code={code2} language="python" />
            <p>Output:</p>
            <Terminal text={terminal2}/>
        </>
      }
    />
  )
}