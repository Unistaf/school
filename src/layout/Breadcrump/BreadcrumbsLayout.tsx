import { Breadcrumbs } from './Breadcrumbs'
import { Outlet } from 'react-router-dom'

const BreadcrumbsLayout = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className='mt-6'>
        <Outlet />
      </div>
    </div>
  )
}

export default BreadcrumbsLayout