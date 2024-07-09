import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function BreadCrumbs() {

    const {pathname} = useLocation();
    
    const pathNames = pathname.split("/").filter((x) => x);

  return (
    <div className='breadcrumbs'>
        { pathNames.length > 0 && <Link to={"/"}>Home</Link> }
        {
            pathNames.map((name, index) => {
                const isLast = index === pathNames.length-1 

                return isLast ? <span key={name}> / {name}</span> :(
                    <span> / <Link key={name} to={name}>
                                    {name}
                             </Link>
                    </span>
                )
            })
        }
    </div>
  )
}

export default BreadCrumbs