import React from 'react'
import DocsLayout from '../../../components/Layouts/Docs/DocsLayout'
import DocsHeader from '../../../components/Layouts/Docs/DocsHeader'
import Header2 from '../../../components/Layouts/Docs/Header2'
import Header3 from '../../../components/Layouts/Docs/Header3'
import Terminal from '../../../components/Layouts/Docs/Terminal'
import DocCode from '../../../components/Layouts/Docs/DocCode'
import TextCode from '../../../components/Layouts/Docs/TextCode'

const title = "Type Conversion"
const section = "Data Types and Variables"
const description = "Convert data types from one type to another"

const prevNext = {
    previousPage: "Len",
    previousHref: "/backend/python/len",
    nextPage: "Basic Data Types",
    nextHref: "/backend/python/datatypes"
}

const tableOfContents = [
    {id: "int", title: "Integers", children: []},
    {id: "float", title: "Floats", children: []},
    {id: "string", title: "Strings", children: []},
    {id: "bool", title: "Booleans", children: []},
];

const code1 = `
x = 5
print(float(x))
`
const code2 = `
x = 5
print(x + x)
print(str(x) + str(x))
`
const terminal2 = `
10
55
`
const code3 = `
x = 0
print(bool(x))
`
const code4 = `
x = 5
y = -5
print(bool(x))
print(bool(y))
`
const terminal4 = `
True
True
`
const code5 = `
x = 5.6
y = 5.4
print(int(x))
print(int(y))
`
const terminal5 = `
5
5
`
const code6 = `
x = 5.4
print(x + x)
print(str(x) + str(x))
`
const terminal6 = `
10.8
5.45.4
`
const code7 = `
x = 0.0000
print(bool(x))
`
const code8 = `
x = 5.5
y = -5.5
print(bool(x))
print(bool(y))
`
const terminal8 = `
True
True
`

export default function TypeConversion() {
  return (
    <DocsLayout 
      prevNext={prevNext}
      tableOfContents={tableOfContents}
      content={
        <>
            <DocsHeader title={title} section={section} description={description}/>

            <Header2 id={"int"} text={"Integers"} />
            <Header3 id={"int2float"} text={"Integer to Float"} />
            <p>
                An <TextCode text={"int"} /> converted to a <TextCode text={"float"} /> will append a <TextCode text={".0"} /> to 
                the integer to make it a floating point value.
            </p>
            <DocCode code={code1} language="python" />
            <p>Output:</p>
            <Terminal text={"5.0"}/>
            <Header3 id={"int2str"} text={"Integer to String"} />
            <p>
                An <TextCode text={"int"} /> converted to a <TextCode text={"str"} /> 
                will behave like text and will not support mathematical operations
            </p>
            <DocCode code={code2} language="python" />
            <p>Output:</p>
            <Terminal text={terminal2}/>
            <Header3 id={"int2bool"} text={"Integer to Boolean"} />
            <p>
                An <TextCode text={"int"} /> with a vaule <TextCode text={"0"} /> converted to a <TextCode text={"bool"} /> 
                will be <TextCode text={"False"} />
            </p>
            <DocCode code={code3} language="python" />
            <p>Output:</p>
            <Terminal text={"False"}/>
            <br />
            <p>
                An <TextCode text={"int"} /> with any vaule other than <TextCode text={"0"} /> converted to a <TextCode text={"bool"} /> 
                will be <TextCode text={"True"} />
            </p>
            <DocCode code={code4} language="python" />
            <p>Output:</p>
            <Terminal text={terminal4}/>

            <Header2 id={"float"} text={"Floats"} />
            <Header3 id={"float2int"} text={"Float to Integer"} />
            <p>
                A <TextCode text={"float"} /> converted to a <TextCode text={"int"} /> 
                will ignore the decimal values and just keep the whole number on the left of the decimal
            </p>
            <DocCode code={code5} language="python" />
            <p>Output:</p>
            <Terminal text={terminal5}/>
            <Header3 id={"float2str"} text={"Float to String"} />
            <p>
                A <TextCode text={"float"} /> converted to a <TextCode text={"str"} /> 
                will behave like text and will not support mathematical operations
            </p>
            <DocCode code={code6} language="python" />
            <p>Output:</p>
            <Terminal text={terminal6}/>
            <Header3 id={"float2bool"} text={"Float to Boolean"} />
            <p>
                A <TextCode text={"float"} /> with a vaule <TextCode text={"0.0"} /> converted to a <TextCode text={"bool"} /> 
                will be <TextCode text={"False"} />
            </p>
            <DocCode code={code7} language="python" />
            <p>Output:</p>
            <Terminal text={"False"}/>
            <br />
            <p>
                A <TextCode text={"float"} /> with any vaule other that does not equal <TextCode text={"0.0"} /> converted to a <TextCode text={"bool"} /> 
                will be <TextCode text={"True"} />
            </p>
            <DocCode code={code8} language="python" />
            <p>Output:</p>
            <Terminal text={terminal8}/>

            <Header2 id={"string"} text={"Strings"} />
            <Header3 id={"string2int"} text={"Float to Integer"} />
            <p>
                A <TextCode text={"float"} /> converted to a <TextCode text={"int"} /> 
                will ignore the decimal values and just keep the whole number on the left of the decimal
            </p>
            <DocCode code={code5} language="python" />
            <p>Output:</p>
            <Terminal text={terminal5}/>
            <Header3 id={"float2str"} text={"Float to String"} />
            <p>
                A <TextCode text={"float"} /> converted to a <TextCode text={"str"} /> 
                will behave like text and will not support mathematical operations
            </p>
            <DocCode code={code6} language="python" />
            <p>Output:</p>
            <Terminal text={terminal6}/>
            <Header3 id={"float2bool"} text={"Float to Boolean"} />
            <p>
                A <TextCode text={"float"} /> with a vaule <TextCode text={"0.0"} /> converted to a <TextCode text={"bool"} /> 
                will be <TextCode text={"False"} />
            </p>
            <DocCode code={code7} language="python" />
            <p>Output:</p>
            <Terminal text={"False"}/>
            <br />
            <p>
                A <TextCode text={"float"} /> with any vaule other that does not equal <TextCode text={"0.0"} /> converted to a <TextCode text={"bool"} /> 
                will be <TextCode text={"True"} />
            </p>
            <DocCode code={code8} language="python" />
            <p>Output:</p>
            <Terminal text={terminal8}/>
        </>
      }
    />
  )
}