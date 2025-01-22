import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <header className='flex'>
      <button className='menu' onClick={()=>setShowModal(true)} >Show modal</button>
      
      <div />

      <nav>
        <ul className='flex'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button className='icon-moon-o'/>


      { showModal && (
        <div className="fixed">
        <ul className="modal">
          <li><button onClick={()=> setShowModal(false)} className='icon-close'/></li>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>

    </div>
      )}
    </header>
  )
}

export default Header