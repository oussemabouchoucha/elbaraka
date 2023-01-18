import Sidebar from '../Sidebar'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const WithSidebarLayout = ({children }: Props) => {
  return (
      <>
          {  <Sidebar>{children}</Sidebar> }
      </>
  )
}

export default WithSidebarLayout