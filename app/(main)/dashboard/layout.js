import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const Layout = ({ children }) => {
        return (
                <div>
                        <div className='flex justify-between items-center mb-5'>
                                <h1 className="text-6xl font-bold gradient-title">Indusry Insight</h1>
                        </div>
                        <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color="gray" />}>
                                {children}
                        </Suspense>
                </div>
        )
}

export default Layout
