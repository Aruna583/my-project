import React from 'react';
import { useSelector } from 'react-redux';
import AstrologerCard from './AstrologerCard';

const FilteredData = () => {
    const filteredData = useSelector(state=>state.filteredData)
  return (
    <div className='px-2 md:mx-28'>
        <h1 className='text-center font-normal text-sm md:text-5xl blue-gray-900 md:block py-10'>Filtered Data</h1>
        <div className='py-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-2 md:gap-2 lg:gap-4 px-2 md:px-0'>
            {filteredData?.length > 0 ? 
            (filteredData?.map((astrologer) => (
                <AstrologerCard key={astrologer.id} astrologer={astrologer}/>
            ))) 
            : (
                <div className='flex flex-row justify-center '>
                    <p className='text-xl font-semibold md:text-2xl text-red-500'> No Astrologers Found</p>
                </div>
            )
            }
        </div>
    </div>
  )
}

export default FilteredData