import React, { lazy, Suspense } from 'react'

const LazyComponent=lazy(()=>import('./LazyComponent'))
const HomeComponent:React.FC = () => {
  return (
    <div>
        <h1>Sample Text From Home Component</h1>
        <Suspense fallback={<p>loading....</p>}>
            <LazyComponent/>
        </Suspense>
       
    </div>
  )
}

export default HomeComponent