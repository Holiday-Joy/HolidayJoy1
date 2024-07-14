import React from 'react'
import PackageCard from './PackageCard';


const Recommend = () => {

    return (
        <div className='flex my-10 justify-center items-start gap-10'>
            <PackageCard />
            <PackageCard />
            <PackageCard />

        </div>
    )
}

export default Recommend;