import './Home.css'

const Home = () => {
  return (
    <section id='Home' className='hero flex'>
      <div className="left-section">
        <div className="parent-avatar flex">
          <img className='avatar' src="/me-circle.png" alt="image1" />
          <div className='icon-verified' />
        </div>
        <h1 className='title'>MERN Full Stack Web Developer, <br/> IT Manager.</h1>
        <p className='subtitle'>I am a dedicated and skilled full-stack web developer with strong expertise in HTML,
           CSS, and JavaScript, as well as proficiency in frameworks like Node.js and React.js.
            I have extensive experience working with MongoDB databases and have successfully delivered numerous
             high-quality projects on time. My passion for creating efficient and scalable web solutions drives
              me to consistently exceed client expectations while staying up-to-date with the latest industry trends and technologies.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-facebook"/>
          <div className="icon icon-instagram"/>
          <div className="icon icon-github"/>
        </div>

      </div>


      <div className="right-section">animation</div>

    </section>
  )
}

export default Home