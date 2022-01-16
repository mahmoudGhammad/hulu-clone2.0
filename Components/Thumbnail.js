import React from 'react'
import Image from 'next/image'
import {ThumbUpIcon} from "@heroicons/react/outline"

const  Thumbnail =({result}) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className='group cursor-pointer p-2 transition duration-200 ease-in trnasform sm:hover:scale-105 hover:z-50' 
        
        >
            <Image layout='responsive' src={`${BASE_URL}${result.backdrop_path ||result.poster.path}`} height={1080} width={1920}/>
            <div className='p-2' >
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='mt-2 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_nmae}</h2>
                <p className='flex'>
                    {result.media_type && `${result.media_type } .`}{''}
                    {result.release_date || result.first_air_date} .{' '}
                    {result.vote_average}
                    <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
