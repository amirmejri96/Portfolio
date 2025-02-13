import './Projects.css'

const Projects = () => {
  return (
    <section id='project' className="projects">
      <h1 id='projet'>Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <img src="../../../shoesvap.png" alt="Projet 1"/>
            <h3>ShoesVap</h3>
            <p>A website for a professional steam cleaning service.</p>
            <a href="https://shoesvap.tn">Visit the website</a>
        </div>

        <div className="project-card">
          <img style={{width:'77%'}} src="../../../loconada.png" alt="Projet 2"/>
            <h3>Loconada</h3>
            <p>A website for the party event Loconada.</p>
            <a href="#">Visit the website</a>
        </div>

        <div className="project-card">
          <img src="projet3.jpg" alt="Projet 3"/>
            <h3>La maladie coelique</h3>
            <p>A website to describe the Celiac disease.</p>
            <a href="#">Visit the website</a>
        </div>
      </div>
    </section>
  )
}

export default Projects