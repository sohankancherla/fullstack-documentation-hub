import React from 'react'
import DocsLayout from '../../../components/Layouts/Docs/DocsLayout'
import DocsHeader from '../../../components/Layouts/Docs/DocsHeader'
import Header2 from '../../../components/Layouts/Docs/Header2'
import Terminal from '../../../components/Layouts/Docs/Terminal'
import TextCode from '../../../components/Layouts/Docs/TextCode'
import DocCode from '../../../components/Layouts/Docs/DocCode'

const title = "Print"
const section = "Introduction"
const description = "Display information to the terminal"
const prevNext = {
    previousPage: null,
    previousHref: null,
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
    id: "concat", title: "String Concatenation", children: []
  },
  {
    id: "printf", title: "Print F-strings", children: []
  },
];

const code1 = `
greeting = "Hello!"
print(greeting)
print(greeting)
`
const terminal1 = `
Hello!
Hello!
`

const code2 = `
name = "Tom"
print("Hello, " + name + "!")
`

const code3 = `
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
            <p>
                Print a message to the console by using <TextCode text={"print()"} /> and 
                placing text inside of <TextCode text={'""'} /> (string)
            </p>
            <DocCode code={'print("Hello World!")'} language="python" />
            <p>Output:</p>
            <Terminal text={"Hello World!"}/>
            <br />
            <p>
                Strings can be stored in a variable and displayed by printing the variable
            </p>
            <DocCode code={code1} language="python" />
            <p>Output:</p>
            <Terminal text={terminal1}/>

            <Header2 id={"separate"} text={"Print Separator"} />
            <p>Print strings separated by a space  by inserting a comma between each string</p>
            <DocCode code={'print("How", "are", "you?")'} language="python" />
            <p>Output:</p>
            <Terminal text={"How are you?"}/>
            <br />
            <p>You can specify a custom separator by changing the <TextCode text={'sep'} /> parameter</p>
            <DocCode code={'print("How", "are", "you?", sep="/")'} language="python" />
            <p>Output:</p>
            <Terminal text={"How/are/you?"}/>

            <Header2 id={"concat"} text={"String Concatenation"} />
            <p>
                Use <TextCode text={'+'} /> to concatenate (combine) strings. 
                Notice how you can concatenate string variables and you will need to manually provide a space between each string
            </p>
            <DocCode code={code2} language="python" />
            <p>Output:</p>
            <Terminal text={"Hello, Tom!"}/>

            <Header2 id={"printf"} text={"Print F-strings"} />
            <p>
                F-strings allow variables directly within strings inside of <TextCode text={'{}'} />, 
                which enables easy formatting and readable code. 
            </p>
            <DocCode code={code3} language="python" />
            <p>Output:</p>
            <Terminal text={"Hi, my name is Bob and I am 32 years old."}/>
        </>
      }
    />
  )
}