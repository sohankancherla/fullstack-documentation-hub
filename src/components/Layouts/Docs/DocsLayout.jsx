import { DocsHeader } from './DocsHeader'
import { PrevNextLinks } from './PrevNextLinks'

export function DocsLayout({ title, section, prevNext }) {

  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-8 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        <article className='prose prose-slate max-w-none dark:prose-invert'>
          <DocsHeader title={title} section={section} />
        </article>
        <PrevNextLinks prevNext={prevNext}/>
      </div>
    </>
  )
}