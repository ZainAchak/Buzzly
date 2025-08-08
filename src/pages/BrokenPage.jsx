import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const BrokenPage = () => {
    const routeError = useRouteError()
    //console.log(routeError)
  return (
    <div>
      <h1>This page is broken</h1>
      <p>Error Message: {routeError?.message}</p>
    </div>
  )
}

export default BrokenPage
