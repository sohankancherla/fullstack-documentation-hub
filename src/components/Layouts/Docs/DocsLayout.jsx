import { PrevNextLinks } from './PrevNextLinks'
import { TableOfContents } from './TableOfContents'


export default function DocsLayout({ prevNext, tableOfContents, content }) {
  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-8 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        <article className='prose prose-slate max-w-none dark:prose-invert'>
          {content}
        </article>
        <PrevNextLinks prevNext={prevNext}/>
      </div>
      <TableOfContents tableOfContents={tableOfContents} />
    </>
  )
}