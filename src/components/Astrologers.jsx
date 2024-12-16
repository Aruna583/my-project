import React, { useEffect, useState } from 'react';
import AstrologerCard from './AstrologerCard';
import { useDispatch, useSelector } from 'react-redux';
import { setAstrologerData } from '../utils/searchSlice';
import { astrologersData } from '../utils/AstrologerData';

const Astrologers = () => {
    const astrologerData = useSelector(state =>state?.astrologerData)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    // the useeffect hook runs only once after the initial reder we can use this for fetch the data from api and handle side effects.
    useEffect(() => {
        dispatch(setAstrologerData(astrologersData))
        setIsLoading(false);
    }, [])

    if (isLoading) return <p className='text-center font-sans font-semibold py-6 md:text-2xl text-base'>Loading....</p>


  return (
    <div className='px-2 md:mx-28'>
        <h1 className='text-center font-normal text-sm md:text-5xl blue-gray-900 md:block py-10 font-sans'>Chat with Astrologers</h1>
        <div className='py-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-2 md:gap-2 lg:gap-4 px-2 md:px-0'>
            {astrologerData?.map((astrologer) => (
                <AstrologerCard key={astrologer.id} astrologer={astrologer}/>
            ))}
        </div>
    </div>
  )
}

export default Astrologers