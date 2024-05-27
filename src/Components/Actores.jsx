import React from 'react'
const image = "https://image.tmdb.org/t/p/original";

const Actores = ({crew}) => {
  return (
    <div className="w-[90%] mx-auto mt-8">
      <h2 className="text-white text-4xl pb-8 font-bold relative z-100 ">Crew</h2>
      <div className="flex gap-5 custom-scrollbar overflow-x-auto ">
        {crew.map((person) => (
          <div
            key={person.id}
            className="min-w-[184px] h-auto bg-white rounded-lg"
          >
            <div className="">
              <img
                src={`${image}${person.profile_path}`?`${image}${person.profile_path}` :'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                alt={person.name}
                className="h-[75%] w-full rounded-t-lg"
              />
              <div className="w-[90%] mx-auto">
                <p className="font-bold text-[16px]">{person.name}</p>
                <p className="text-[14px]">{person.character}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Actores