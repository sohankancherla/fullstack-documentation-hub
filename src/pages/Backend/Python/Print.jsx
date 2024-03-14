import React from 'react'
import DocsLayout from '../../../components/Layouts/Docs/DocsLayout'
import DocsHeader from '../../../components/Layouts/Docs/DocsHeader'
import Header2 from '../../../components/Layouts/Docs/Header2'
import Header3 from '../../../components/Layouts/Docs/Header3'
import Terminal from '../../../components/Layouts/Docs/Terminal'
import Note from '../../../components/Layouts/Docs/Note'
import DocCode from '../../../components/Layouts/Docs/DocCode'

const title = "Print"
const section = "Introduction"
const description = "Use print() to display information to the terminal."
const prevNext = {
    previousPage: "Installation",
    previousHref: "/backend/python/installation",
    nextPage: "Input",
    nextHref: "/backend/python/input"
}
const tableOfContents = [
  {
    id: "print", title: "Using Print", children: []
  },
  {
    id: "separate", title: "Print Separator", children: []
  },
  {
    id: "printf", title: "Print f-strings", children: []
  },
];

const code1 = `
greeting = "Hello!"
print(greeting)
`

const code2 = `
name = "Bob"
age = 32
print(f"Hi, my name is {name} and I am {age} years old.")
`

export default function Print() {
  return (
    <DocsLayout 
      prevNext={prevNext}
      tableOfContents={tableOfContents}
      content={
        <>
            <DocsHeader title={title} section={section} description={description}/>

            <Header2 id={"print"} text={"Using Print"} />
            <p>Print a string to the terminal:</p>
            <DocCode code={'print("Hello World!")'} language="python" />
            <p>Output:</p>
            <Terminal text={"Hello World!"}/>
            <br></br>
            <p>Print a variable to the terminal:</p>
            <DocCode code={code1} language="python" />
            <p>Output:</p>
            <Terminal text={"Hello!"}/>

            <Header2 id={"separate"} text={"Print Separator"} />
            <p>Print strings seperated by a space:</p>
            <DocCode code={'print("How", "are", "you?")'} language="python" />
            <p>Output:</p>
            <Terminal text={"How are you?"}/>
            <br></br>
            <p>Use a custom seperator:</p>
            <DocCode code={'print("How", "are", "you?", sep="/")'} language="python" />
            <p>Output:</p>
            <Terminal text={"How/are/you?"}/>

            <Header2 id={"printf"} text={"Print f-strings"} />
            <p>Use f-strings for more readable code:</p>
            <DocCode code={code2} language="python" />
            <p>Output:</p>
            <Terminal text={"Hi, my name is Bob and I am 32 years old."}/>
        </>
      }
    />
  )
}