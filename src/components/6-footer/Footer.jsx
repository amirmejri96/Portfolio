import './Footer.css'

const Footer = () => {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <p className='copyright'>© 2025 Amir Mejri, All rights reserved.</p>
    </footer>
  )
}

export default Footer