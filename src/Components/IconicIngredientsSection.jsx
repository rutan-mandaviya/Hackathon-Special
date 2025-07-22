import React from 'react'

const IconicIngredientsSection = ({ ingredients }) => {
    if (!ingredients) return null;

  return (
    <div className="w-full px-2 py-10 md:py-16  flex flex-col items-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#953f40] uppercase text-center mb-2 tracking-wide">
        A POWERFUL TRIO OF ICONIC INGREDIENTS
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-[#843c3e] font-light text-center max-w-2xl mb-8">
        IDÔLE BREAKS THE ESTABLISHED CODES OF FRAGRANCE, BRINGING TO LIFE THE ESSENCE OF A NEW SPIRIT WITH SUSTAINABLY SOURCED INGREDIENTS.
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        {ingredients.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center max-w-xs">
            <div className="w-36 h-36 mb-3 rounded-full overflow-hidden flex items-center justify-center shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-extrabold font-serif text-[#2d1b1b] tracking-wide mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#794540] font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default IconicIngredientsSection