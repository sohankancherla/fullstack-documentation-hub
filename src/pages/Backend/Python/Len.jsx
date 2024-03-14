import React from 'react'
import DocsLayout from '../../../components/Layouts/Docs/DocsLayout'
import DocsHeader from '../../../components/Layouts/Docs/DocsHeader'
import Header2 from '../../../components/Layouts/Docs/Header2'
import Header3 from '../../../components/Layouts/Docs/Header3'
import Terminal from '../../../components/Layouts/Docs/Terminal'
import DocCode from '../../../components/Layouts/Docs/DocCode'

const title = "Len"
const section = "Introduction"
const description = "Get the length of a data structure"
const prevNext = {
    previousPage: "Input",
    previousHref: "/backend/python/input",
    nextPage: "Len",
    nextHref: "/backend/python/len"
}
const tableOfContents = [
  {
    id: "len", title: "Using Len", children: [
        {id: "string", title: "Length of a String"},
        {id: "tuple", title: "Length of a Tuple"},
        {id: "list", title: "Length of a List"},
        {id: "dict", title: "Length of a Dictionary"},
        {id: "set", title: "Length of a Set"},
    ]
  },
];

const code1 = `
team = "Boston Celtics"
print(len(team))
`
const code2 = `
players = ("Jayson Tatum", "LeBron James", "Stephen Curry")
print(len(players))
`

const code3 = `
teams = ["Boston Celtics", "Los Angeles Lakers", "Golden State Warriors"]
print(len(teams))
`
const code4 = `
roster = {"Boston Celtics": "Jayson Tatum", "Los Angeles Lakers": "Lebron James", "Golden State Warriors": "Stephen Curry"}
print(len(roster))
`
const code5 = `
unique_teams = {"Boston Celtics", "Los Angeles Lakers", "Golden State Warriors", "Boston Celtics"}
print(len(unique_teams))
`

export default function Len() {
  return (
    <DocsLayout 
      prevNext={prevNext}
      tableOfContents={tableOfContents}
      content={
        <>
            <DocsHeader title={title} section={section} description={description}/>

            <Header2 id={"len"} text={"Using Len"} />
            <Header3 id={"string"} text={"Length of a String"} />
            <p>
                Get the number of characters in a string:
            </p>
            <DocCode code={code1} language="python" />
            <p>Output:</p>
            <Terminal text={"14"}/>
            <Header3 id={"tuple"} text={"Length of a Tuple"} />
            <p>
                Get the number of items in a tuple:
            </p>
            <DocCode code={code2} language="python" />
            <p>Output:</p>
            <Terminal text={"3"}/>
            <Header3 id={"list"} text={"Length of List"} />
            <p>
                Get the number of elements in a list:
            </p>
            <DocCode code={code3} language="python" />
            <p>Output:</p>
            <Terminal text={"3"}/>
            <Header3 id={"dict"} text={"Length of a Dictionary"} />
            <p>
                Get the number of key, value pairs in a dictionary:
            </p>
            <DocCode code={code4} language="python" />
            <p>Output:</p>
            <Terminal text={"3"}/>
            <Header3 id={"set"} text={"Length of a Set"} />
            <p>
                Get the number of items in a set:
            </p>
            <DocCode code={code5} language="python" />
            <p>Output:</p>
            <Terminal text={"3"}/>
        </>
      }
    />
  )
}