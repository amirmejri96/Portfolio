import './About.css'

const About = () => {
  return (
    <>
    <div id='About' className="title">
        <h1> About Me</h1>
    </div>
    <main className='flex'>
      <div className="info-box-left">
        <div style={{gap:'20px', alignItems:'center'}} className="about-me flex">
          <h3>Full Name :</h3>
          <p>Mejri Amir</p>
        </div>
        <div style={{gap:'20px', alignItems:'center'}} className="about-me flex">
          <h3>Expertise :</h3>
          <p>MERN full stack web developer</p>
        </div>
        <div style={{gap:'20px', alignItems:'center'}} className="about-me flex">
          <h3>Date of birth :</h3>
          <p>23 august 1996</p>
        </div>
        <div style={{gap:'20px', alignItems:'center'}} className="about-me flex">
          <h3>Adress :</h3>
          <p>El aouina, Tunis, Tunisia</p>
        </div>
        <div style={{gap:'20px', alignItems:'center'}} className="about-me flex">
          <h3>Email :</h3>
          <p>amirmejri1996@gmail.com</p>
        </div>
        <div style={{gap:'20px', alignItems:'center'}} className="about-me flex">
          <h3>Phone number :</h3>
          <p>+216 20 079 258</p>
        </div>
      </div>

      <div className="info-box-right">
        <div><button
          className="download" onClick={() => {
          const link = document.createElement("a");
          link.href = "/Amir mejri.pdf";
          link.download = "Amir mejri.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}>Download CV</button></div> 
      </div>

    </main>
    </>
  )
}

export default About