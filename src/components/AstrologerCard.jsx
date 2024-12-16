import React from 'react';
import { LiaStarSolid } from "react-icons/lia";
import { PiSealCheckFill } from "react-icons/pi";
import ButtonElement from './ButtonElement';


const AstrologerCard = ({astrologer}) => {

    const onlineStyles = 'border-2 border-green-400 bg-white text-green-500 hover:bg-green-400 hover:text-white';
    const offlineStyles = 'border-2 border-red-400 text-red-500 bg-white hover:bg-red-400 hover:text-white';

  return (
    <div className='border rounded-xl shadow-md bg-white w-full lg:height-[186px] py-6 px-2 gap-2'>
        
        <div className='flex justify-evenly'>
            {/* Image section added */}
        <div className=''>
        <img 
        src={astrologer?.imageUrl}
        alt={astrologer.name}
        className='h-10 w-10 md:h-24 md:w-24 rounded-full border-2 border-emerald-500'
        />
        </div>

        {/* Details Section Was Added */}
        <div className='flex flex-col'>
            <div className='flex gap-2'>
                <h2 className='text-slate-900 font-semibold text-base md:text-2xl'>{astrologer.name}</h2>
                <div className='flex gap-1'>
                    <LiaStarSolid className='text-yellow-400 h-2.5 w-2.5 md:h-5 md:w-5'/>
                    <p className='text-xs md:text-base'>{astrologer.rating}</p>
                </div>
            </div>
            <p className='text-xs md:text-base py-1 text-gray-500 truncate'>{astrologer.speciality}</p>
            <p className='text-xs md:text-base py-1 text-gray-500'>{astrologer.languages}</p>
            <p className='text-xs md:text-base py-1 text-gray-500'>Exp: {astrologer.experience}</p>
            <p className=''>
                <span className={`text-base md:text-2xl ${astrologer.isFree || astrologer.offerAmt ? 'line-through decoration-red-500 text-gray-400' : 'text-gray-400'}`}>
                    {astrologer.amount}
                </span> 
                {astrologer?.isFree && <span className='text-red-500 pl-2 font-semibold text-base md:text-2xl'>FREE</span>}
                {astrologer?.offerAmt && <span className='text-red-500 pl-2 font-semibold text-base md:text-2xl'>{astrologer?.offerAmt}</span>}
            </p>
        </div>

        <div className='flex flex-col justify-between items-end '>
            <PiSealCheckFill className='h-5 w-5 md:h-6 md:w-6 text-emerald-500'/>
            <div>
            <ButtonElement 
            children="Chat"
            className={astrologer.online ? onlineStyles: offlineStyles }
            width="110px"
            height="44px"
            onClick={() => alert('Clicked')}
            />
            <p className='text-red-400 text-xs px-6 py-1'>{!astrologer.online && <span>wait - 7 min</span>}</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default AstrologerCard