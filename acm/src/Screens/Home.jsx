import React from 'react'
import Slider from '../Components/Slider/Slider'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Slider />
        <br></br>
      <br></br>
      <div >
                       <h1 className="abt"> About ACM Organisation</h1>
                       <p id="ph1" className="abt-con1">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                       <p id="ph2" className="abt-con2">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                       </div>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <br></br>
                       <Footer />
                       </div>
                       
  )
}

export default Home