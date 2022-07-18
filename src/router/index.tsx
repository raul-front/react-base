import { Spin } from 'antd'
import React, { lazy, ReactNode, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import Layout from 'pages/Layout'

// const lazyLoad = (children: ReactNode): ReactNode => {
//   return (
//     <Suspense fallback={<Spin />}>
//         {children}
//     </Suspense>
//   )
// }

const lazyLoad = (path: string):ReactNode => {
  const Component = lazy(() => import(`../pages${path}`))
  return (
    // <Suspense fallback={<div>loading</div>}>
    <Suspense fallback={<Spin />}>
      <Component/>
    </Suspense>
  )
}

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: lazyLoad('/Home') },
      { path: '/user/list', element: lazyLoad('/User/List') },
      { path: '/user/detail/:id', element: lazyLoad('/User/Detail') },
    ],
  },
  { path: '/login', element: lazyLoad('/Login') },
]

export default router
