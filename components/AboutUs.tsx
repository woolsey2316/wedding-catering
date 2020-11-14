import React from 'react'

function AboutUs() {
  return (
    <>
      <div className="bg-gray-100 p-16 text-center">
        <h1 className="font-parisienne text-5xl font-semibold">About Us</h1>
        <p className="font-rubik text-gray-700 md:px-48"> Et harum quidem rerum facilis est et expedita distinctio. 
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.
        </p>
      </div>
      <div className="w-full transform rotate-180 bg-gray-100" style={{bottom: '-19px'}} data-negative="false">
        <svg className="h-12 lg:h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="fill-current text-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>		
      </div>
      <div className="lg:flex md:px-4 lg:mt-20">
        <div className="w-full lg:relative mr-8 mb-56 lg:mb-0">
          <img className="w-full" src="about us/g2-1024x683.jpg"/>
          <div className="absolute bg-white -mt-16 shadow-lg mx-8 p-8 text-center">
            <h1 className="font-parisienne text-h2 font-semibold">Our Story </h1>
            <p className="font-rubik text-gray-700">At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas 
            molestias excepturi sint occaecati, viva la vida penci design.</p>
          </div>
        </div>
        <div className="lg:relative bg-white">
          <img src="about us/1-1024x682.jpg"/>
          <div className="absolute bg-white -mt-16 shadow-lg mx-8 p-8 text-center">
            <h1 className="font-parisienne text-h2 font-semibold">Our Core Values </h1>
            <p className="font-rubik text-gray-700">At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas 
            molestias excepturi sint occaecati, viva la vida penci design.</p>
          </div>
        </div>
      </div>
    </>
  )
}
export { AboutUs }