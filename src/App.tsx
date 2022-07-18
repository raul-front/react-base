import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'

const App: FC = () => {
  return useRoutes(router)
}

export default App
