import React from 'react'
import DocsLayout from '../../../components/Layouts/Docs/DocsLayout'
import DocsHeader from '../../../components/Layouts/Docs/DocsHeader'
import Header2 from '../../../components/Layouts/Docs/Header2'
import Header3 from '../../../components/Layouts/Docs/Header3'
import DocLink from '../../../components/Layouts/Docs/DocLink'
import DocImage from '../../../components/Layouts/Docs/DocImage'
import Terminal from '../../../components/Layouts/Docs/Terminal'
import Note from '../../../components/Layouts/Docs/Note'
import pythonRelease from '../../../assets/images/docs/Python/python-release.png'
import pythonFiles from '../../../assets/images/docs/Python/python-files.png'
import pythonInstaller from '../../../assets/images/docs/Python/python-installer.png'

const title = "Installation"
const section = "Introduction"
const description = ""
const prevNext = {
    previousPage: "What is Python?",
    previousHref: "/backend/python/",
    nextPage: "IDE",
    nextHref: "/backend/python/ide"
}
const tableOfContents = [
  {
    id: "mac", title: "MacOS", children: [
      { id: "mac1", title: "Install Homebrew" },
      { id: "mac2", title: "Install Python with Homebrew" },
      { id: "mac3", title: "Verify Installation" },
    ]
  },
  {
    id: "win", title: "Windows", children: [
      { id: "win1", title: "Find the Latest Python Release" },
      { id: "win2", title: "Download the Python Installer" },
      { id: "win3", title: "Install Python" },
      { id: "win4", title: "Verify Installation" },
    ]
  },
];


export default function Installation() {
  return (
    <DocsLayout 
      prevNext={prevNext}
      tableOfContents={tableOfContents}
      content={
        <>
          <DocsHeader title={title} section={section} description={description}/>

          <Header2 id={"mac"} text={"MacOS"} />
          <Header3 id={"mac1"} text={"1. Install Homebrew"}/>
          <p>
            Open a Mac Terminal, paste the following command and press Enter:
          </p>
          <Terminal text={'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'}/>
          <Note 
            title={"Apple Silicon Mac"} 
            text={'Find the "Next steps" section in the terminal output and paste the commands given to add Homebrew to your PATH.'}
          />
          <Header3 id={"mac2"} text={"2. Install Python with Homebrew"}/>
          <p>
            Once Homebrew is installed, paste the following command and press Enter:
          </p>
          <Terminal text={'brew install python'}/>
          <Header3 id={"mac3"} text={"3. Verify Installation"}/>
          <p>
            Verify you have successfully installed Python and pip with the following commands:
          </p>
          <Terminal text={'python3 --version'}/>
          <Terminal text={'pip3 --version'}/>
          <Note 
            title={"Command Not Found"} 
            text={'If you are facing a "command not found" error it means that Python or pip is not added to your PATH. '
            + 'The steps will vary depending on your MacOS version. ' 
            + 'It is recommended to use Google or Chat GPT to help fix your error.'}
          />

          <Header2 id={"win"} text={"Windows"} />
          <Header3 id={"win1"} text={"1. Find the Latest Python Release"}/>
          <p>
            Visit the <DocLink href="https://www.python.org/downloads/windows/">official Python website</DocLink> and click on the latest Python release for Windows.
          </p>
          <DocImage src={pythonRelease} alt="Latest Python Release" />
          <Header3 id={"win2"} text={"2. Download the Python Installer"}/>
          <p>
            Scroll down and download the Windows 64-bit installer.
          </p>
          <DocImage src={pythonFiles} alt="Python Installer Files" />
          <Header3 id={"win3"} text={"3. Install Python"}/>
          <p>
            Locate the Python installer (usually in the Downloads folder) and double-click to launch.
          </p>
          <p>
            IMPORTANT: Make sure to check "Add python.exe to PATH" then press "Install Now"
          </p>
          <DocImage src={pythonInstaller} alt="Python Installer Files" />
          <Header3 id={"win4"} text={"4. Verify Installation"}/>
          <p>
            Open Command Prompt and verify you have successfully installed Python and pip with the following commands:
          </p>
          <Terminal text={'python --version'}/>
          <Terminal text={'python -m pip --version'}/>
        </>
      }
    />
  )
}