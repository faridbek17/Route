import React from 'react'
import {Routes, Route,} from 'react-router-dom'
import { routes } from '../utils/routes'

function Main() {
  return (
    <main className="main container">
        <Routes>
            {
                routes.map(item => {
                    return(
                        <Route key={item.id} path={item.path} element={item.element}/>
                    )
                })
            }
        </Routes>
    </main>
  )
}

export default Main