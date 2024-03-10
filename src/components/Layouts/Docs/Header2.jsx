import React, { useEffect } from 'react';

const Header2 = ({ id, text }) => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(id);
            if (element) {
                console.log(true)
                element.scrollIntoView();
            }
        }
    }, []);
  return (
    <>
        <dl className="my-9 flex border-t border-slate-200 dark:border-slate-800"></dl>
        <h2 id={id} className="font-medium text-2xl mb-6 text-gray-900 dark:text-white">
            {text}
        </h2>
    </>
  )
}

export default Header2