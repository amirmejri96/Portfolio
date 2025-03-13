import './Projects.css';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { useSwipeable } from 'react-swipeable';

ReactModal.setAppElement('#root'); // Important pour l'accessibilité

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const loconadaImages = [
    '../../../captures loconada/Capture d’écran accueil.png',
    '../../../captures loconada/Capture d’écran register.png',
    '../../../captures loconada/Capture d’écran login.png',
    '../../../captures loconada/Capture d’écran admin dashboard.png',
    '../../../captures loconada/Capture d’écran editions.png',
    '../../../captures loconada/Capture d’écran user dashboard.png',
    '../../../captures loconada/Capture d’écran reservations.png',
    '../../../captures loconada/Capture d’écran about us.png',
    '../../../captures loconada/Capture d’écran base de données.png',
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentImage((prev) => (prev + 1) % loconadaImages.length),
    onSwipedRight: () => setCurrentImage((prev) => (prev - 1 + loconadaImages.length) % loconadaImages.length),
  });

  return (
    <section id='project' className="projects">
      <h1 id='projet'>Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <img src="../../../shoesvap.png" alt="Projet 1"/>
          <h3>ShoesVap</h3>
          <p>A website of a professional steam cleaning service.</p>
          <a href="https://shoesvap.tn">Visit the website</a>
        </div>

        <div className="project-card">
          <img style={{ width: '77%' }} src="../../../loconada.png" alt="Projet 2"/>
          <h3>Loconada</h3>
          <p>A website of the party event Loconada.</p>
          <button onClick={() => setModalIsOpen(true)}>Visit the website</button>
        </div>

        {/* <div className="project-card">
          <img style={{ width: '80%' }} src="../../../maladie-coeliaque.png" alt="Projet 3"/>
          <h3>La maladie coelique</h3>
          <p>A website to describe the Celiac disease.</p>
          <a href="#">Visit the website</a>
        </div> */}

        <div className="project-card">
          <img style={{ width: '87%' }} src="../../../cj studio.png" alt="Projet 3"/>
          <h3>CJ Studio</h3>
          <p>A website of an agency of photography and videography.</p>
          <a href="https://cj-studio.netlify.app/">Visit the website</a>
        </div>
      </div>

      {/* Modal for Loconada */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={() => setModalIsOpen(false)}>✖</button>
        <div {...handlers} className="modal-content">
          <img src={loconadaImages[currentImage]} alt="Loconada Screenshot" className="modal-image"/>
        </div>
        <button onClick={() => setCurrentImage((prev) => (prev - 1 + loconadaImages.length) % loconadaImages.length)}>◀</button>
        <button onClick={() => setCurrentImage((prev) => (prev + 1) % loconadaImages.length)}>▶</button>
      </ReactModal>
    </section>
  );
};

export default Projects;
