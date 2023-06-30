import React from 'react'

function Page({className, children}) {
  return (
    <div className={className}>
        <h1>{children}</h1>
    </div>
  )
}

export default Page
