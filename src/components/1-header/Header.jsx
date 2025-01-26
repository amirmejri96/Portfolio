import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <header className='flex'>
      <button className='menu icon-menu' onClick={()=>setShowModal(true)} />
      
      <div />

      <nav>
        <ul className='flex'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>

      <button>
        <span className='icon-moon-o'></span>
      </button>


      { showModal && (
        <div className="fixed">
        <ul className="modal">
          <li><button onClick={()=> setShowModal(false)} className='icon-close'/></li>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>

    </div>
      )}
    </header>
  )
}

export default Header