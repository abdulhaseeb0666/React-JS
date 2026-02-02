import React from 'react'

const Imagecards = (card, idx) => {
  return (
    <div key={idx}className="relative w-[256px] h-[480px] rounded-3xl overflow-hidden shadow-xl shrink-0">

        {/* <!-- Image --> */}
        <img 
        src={card.image}
        alt="card image"
        className="w-full h-full object-cover"
        />

        {/* <!-- Dark Overlay --> */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* <!-- Content --> */}
        <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">

        {/* <!-- Top Number --> */}
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold">
            {card.number}
        </div>

        {/* <!-- Text + Button --> */}
        <div>
            <p className="text-sm leading-snug mb-4">
            {card.text}
            </p>

            <button className="flex items-center justify-between gap-2 bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-full text-sm font-medium">
            {card.button}
            <span className="text-lg">→</span>
            </button>
        </div>

        </div>
    </div>


  )
}

export default Imagecards
