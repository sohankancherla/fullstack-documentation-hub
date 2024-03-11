import React from 'react'
import { Layout } from '../../../components/Layouts/Docs/Layout'
import { Routes, Route } from 'react-router-dom';
import Header from '../../../components/Layouts/Docs/Header';
import logo from "../../../assets/logo/logo-transparent.png"
import NotFound from '../../Main/NotFound';
import PythonPage from './PythonPage';
import Installation from './Installation';

const navigation = [
    {
      title: 'Introduction',
      links: [
        { title: 'What is Python?', href: '/backend/python' },
        { title: 'Installation', href: '/backend/python/installation' },
        { title: 'IDE', href: '/backend/python/ide' },
      ],
    },
    {
      title: 'Core concepts',
      links: [
        { title: 'Understanding caching', href: '/docs/understanding-caching' },
        {
          title: 'Predicting user behavior',
          href: '/docs/predicting-user-behavior',
        },
        { title: 'Basics of time-travel', href: '/docs/basics-of-time-travel' },
        {
          title: 'Introduction to string theory',
          href: '/docs/introduction-to-string-theory',
        },
        { title: 'The butterfly effect', href: '/docs/the-butterfly-effect' },
      ],
    },
    {
      title: 'Advanced guides',
      links: [
        { title: 'Writing plugins', href: '/docs/writing-plugins' },
        { title: 'Neuralink integration', href: '/docs/neuralink-integration' },
        { title: 'Temporal paradoxes', href: '/docs/temporal-paradoxes' },
        { title: 'Testing', href: '/docs/testing' },
        { title: 'Compile-time caching', href: '/docs/compile-time-caching' },
        {
          title: 'Predictive data generation',
          href: '/docs/predictive-data-generation',
        },
      ],
    },
    {
      title: 'API reference',
      links: [
        { title: 'CacheAdvance.predict()', href: '/docs/cacheadvance-predict' },
        { title: 'CacheAdvance.flush()', href: '/docs/cacheadvance-flush' },
        { title: 'CacheAdvance.revert()', href: '/docs/cacheadvance-revert' },
        { title: 'CacheAdvance.regret()', href: '/docs/cacheadvance-regret' },
      ],
    },
    {
      title: 'Contributing',
      links: [
        { title: 'How to contribute', href: '/docs/how-to-contribute' },
        { title: 'Architecture guide', href: '/docs/architecture-guide' },
        { title: 'Design principles', href: '/docs/design-principles' },
      ],
    },
]
const title = "Python";
const pages = [
  { name: 'Backend', href: '/backend', current: false },
  { name: 'Python', href: '/backend/python', current: true },
]
const companyName="FDH"

const Python = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout header={<Header title={title} pages={pages}/>} navigation={navigation} children={
            <PythonPage />
          } />}/>
          <Route path="/installation" element={<Layout header={<Header title={title} pages={pages}/>} navigation={navigation} children={
            <Installation />
          } />}/>
          <Route path="/*" element={<NotFound logo={logo} companyName={companyName} />} />
        </Routes>
    </>
  )
}

export default Python