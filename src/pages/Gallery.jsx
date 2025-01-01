import React from 'react'

function Gallery() {
  const data = [
    {
      imageLink:
        "https://drive.google.com/thumbnail?id=1dRMPzGUsilL3ZxoQQD96J_TBHgTl0UN2",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/128817/pexels-photo-128817.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/2623968/pexels-photo-2623968.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imageLink:
        "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-wrap flex-col pt-16 items-center justify-center text-center bg-white">
        <div className="pt-10 text-4xl font-semibold font-serif">My Gallery</div>
        <div className="w-36 h-1 border-b-4 border-indigo-400 mt-2 rounded-2xl md:mt-4"></div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10 bg-white p-5">
        {data.map(({ imageLink }, index) => (
          <div key={index} className="w-full transform transition-transform duration-300 hover:scale-110">
            <img
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
              src={imageLink}
              alt="photo"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery
