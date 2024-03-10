import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export function TableOfContents({ tableOfContents }) {
  const [currentSection, setCurrentSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const sectionOffsets = tableOfContents.flatMap(section => [
      { id: section.id, offsetTop: document.getElementById(section.id)?.offsetTop },
      ...section.children.map(child => ({ id: child.id, offsetTop: document.getElementById(child.id)?.offsetTop }))
    ]).filter(item => item.offsetTop !== undefined);

    const findCurrentSection = () => {
      const currentPosition = window.scrollY + window.innerHeight * 0.1;

      let foundSection = sectionOffsets.find(section => currentPosition >= section.offsetTop);
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (currentPosition >= sectionOffsets[i].offsetTop) {
          foundSection = sectionOffsets[i].id;
          break;
        }
      }

      setCurrentSection(foundSection);
    };

    window.addEventListener('scroll', findCurrentSection);
    findCurrentSection();

    return () => window.removeEventListener('scroll', findCurrentSection);
  }, [tableOfContents]);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  const isActive = useCallback((id) => currentSection === id, [currentSection]);

  return (
    <div className="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        {tableOfContents.length > 0 && (
          <>
            <h2 id="on-this-page-title" className="font-display text-sm font-medium text-slate-900 dark:text-white">
              On this page
            </h2>
            <ol role="list" className="mt-4 space-y-3 text-sm">
              {tableOfContents.map((section) => (
                <li key={section.id}>
                  <h3>
                    <Link
                      to={`#${section.id}`}
                      className={clsx(
                        isActive(section.id) ? 'text-primary-700' : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
                      )}
                    >
                      {section.title}
                    </Link>
                  </h3>
                  {section.children.length > 0 && (
                    <ol role="list" className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                      {section.children.map((subSection) => (
                        <li key={subSection.id}>
                          <Link
                            to={`#${subSection.id}`}
                            className={
                              isActive(subSection.id) ? 'text-primary-700' : 'hover:text-slate-600 dark:hover:text-slate-300'
                            }
                          >
                            {subSection.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </>
        )}
      </nav>
    </div>
  );
}
