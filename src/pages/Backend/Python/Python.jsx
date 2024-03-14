import React from 'react'
import { Layout } from '../../../components/Layouts/Docs/Layout'
import { Routes, Route } from 'react-router-dom';
import Header from '../../../components/Layouts/Docs/Header';
import logo from "../../../assets/logo/logo-transparent.png"
import NotFound from '../../Main/NotFound';
import Print from './Print';

const navigation = [
    {
      title: 'Basic Commands',
      links: [
        { title: 'Print', href: '/backend/python' },
        {
          title: 'Input', href: '/backend/python/input',
        },
        { title: 'Len', href: '/backend/python/len' },
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
            <Print />
          } />}/>
          <Route path="/*" element={<NotFound logo={logo} companyName={companyName} />} />
        </Routes>
    </>
  )
}

export default Python