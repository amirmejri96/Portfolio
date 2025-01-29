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
          <div><a href="https://www.facebook.com/profile.php?id=100007273906351" className="icon icon-facebook"></a></div>
          <div><a href="https://www.instagram.com/Amir_mejri96/?fbclid=IwY2xjawIEzeRleHRuA2FlbQIxMAABHe2HeJ7SGS-0OoSQhBBmX2uODgUq7vIc6UvJNB9P3NmT1Wr2GUbXZnuKGA_aem_cDl8EVqngc797AX97Ii54Q#" className="icon icon-instagram"></a></div>
          <div><a href="https://github.com/amirmejri96" className="icon icon-github"></a></div>
        </div>

      </div>
    </section>
  )
}

export default Home