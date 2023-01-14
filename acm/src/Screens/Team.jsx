import React from 'react'
import Profilecard from "../Components/Profilecard";
import Leaddetails from "../Components/Leaddetails";
import Footer from "../Components/Footer";
const Team = () => {
  return (
    <>
    <div id="blog" className="my-4 mx-4 blog px-5">
    <h1>Core Team</h1>
    
      <div className="row">
        
        {Leaddetails.map((value, ind) => {
          return (
            <Profilecard
              key={ind}
              title={value.title}
              description={value.description}
              imgsrc={value.imgsrc}
              maillink={value.maillink}
              linkedinlink={value.linkedinlink}
              instalink={value.instalink}
            ></Profilecard>
          );
        })}
      </div>
      
    </div>
    < Footer />
    </>
  )
}

export default Team