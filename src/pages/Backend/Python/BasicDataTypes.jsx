import React from 'react'
import DocsLayout from '../../../components/Layouts/Docs/DocsLayout'
import DocsHeader from '../../../components/Layouts/Docs/DocsHeader'
import Header2 from '../../../components/Layouts/Docs/Header2'
import Terminal from '../../../components/Layouts/Docs/Terminal'
import DocCode from '../../../components/Layouts/Docs/DocCode'
import TextCode from '../../../components/Layouts/Docs/TextCode'

const title = "Basic Data Types"
const section = "Data Types and Variables"
const description = "Data types enable developers to store different forms of data"

const prevNext = {
    previousPage: "Len",
    previousHref: "/backend/python/len",
    nextPage: "Type Conversion",
    nextHref: "/backend/python/convert"
}

const tableOfContents = [
    {id: "int", title: "Integers", children: []},
    {id: "float", title: "Floats", children: []},
    {id: "string", title: "Strings", children: []},
    {id: "bool", title: "Booleans", children: []},
];

const code1 = `
x = 5
y = -5
print(type(x))
print(type(y))
`
const terminal1 = `
<class 'int'>
<class 'int'>
`

const code2 = `
x = 3.14
y = -3.14
print(type(x))
print(type(y))
`

const terminal2 = `
<class 'float'>
<class 'float'>
`

const code3 = `
x = 'Hello World!'
y = "Hello World!"
print(type(x))
print(type(y))
`
const terminal3 = `
<class 'str'>
<class 'str'>
`
const code4 = `
x = True
y = False
print(type(x))
print(type(y))
`

const terminal4 = `
<class 'bool'>
<class 'bool'>
`

export default function BasicDataTypes() {
  return (
    <DocsLayout 
      prevNext={prevNext}
      tableOfContents={tableOfContents}
      content={
        <>
            <DocsHeader title={title} section={section} description={description}/>

            <Header2 id={"int"} text={"Integers"} />
            <p>
                An <TextCode text={"int"} /> data type stores a positive or negative whole number
            </p>
            <DocCode code={code1} language="python" />
            <p>Output:</p>
            <Terminal text={terminal1}/>

            <Header2 id={"float"} text={"Floats"} />
            <p>
                A <TextCode text={"float"} /> data type stores a positive or negative floating point number
            </p>
            <DocCode code={code2} language="python" />
            <p>Output:</p>
            <Terminal text={terminal2}/>

            <Header2 id={"string"} text={"Strings"} />
            <p>
                A <TextCode text={"str"} /> data type stores text inside of 
                single quotes <TextCode text={"''"} /> or double quotes <TextCode text={'""'} />
            </p>
            <DocCode code={code3} language="python" />
            <p>Output:</p>
            <Terminal text={terminal3}/>

            <Header2 id={"bool"} text={"Booleans"} />
            <p>
                A <TextCode text={"bool"} /> data type stores a <TextCode text={"True"} /> or <TextCode text={"False"} />
            </p>
            <DocCode code={code4} language="python" />
            <p>Output:</p>
            <Terminal text={terminal4}/>
        </>
      }
    />
  )
}