import React from 'react'

import {
    HomeIcon , 
    BadgeCheckIcon ,
    CollectionIcon,
    LightBulbIcon,
    SearchIcon,
    UserIcon,} from '@heroicons/react/outline'

import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className='flex flex-grow justify-evenly max-w-2xl mt-3 '>
                <HeaderItem title='HOME'  Icon={HomeIcon}></HeaderItem>
                <HeaderItem title='TRENDING'  Icon={LightBulbIcon}></HeaderItem>
                <HeaderItem title='VERIFIED'  Icon={BadgeCheckIcon}></HeaderItem>
                <HeaderItem title='COLLECTION'  Icon={CollectionIcon}></HeaderItem>
                <HeaderItem title='SEARCH'  Icon={SearchIcon}></HeaderItem>
                <HeaderItem title='ACCOUNT'  Icon={UserIcon}></HeaderItem>
            </div>
            <div className=''>
                {/* <Image
                    className='object-contain'
                    src={'https://links.papareact.com/ua6'} width={200} height={100}
                /> */}
                <p className='font-bold  text-6xl'>MHO</p>
            </div>
            
        </header>
    )
}

export default Header
