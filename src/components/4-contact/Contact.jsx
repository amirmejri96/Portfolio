import './Contact.css'

const Contact = () => {
  return (
    <section className='contact-us'>
      <div className="flex">
        <h1 className='title'>
          <span className='icon-envelope' /> Contact Us
        </h1>
      </div>
      <p className='sub-title'>Contact us for more information and get notified when i publish something new.</p>

      <div className="flex">
        <form>
          <div className='flex'>
          <label htmlFor="email">Email Adress:</label>
          <input required type="email" name="" id="email" />
          </div>

          <div className='flex' style={{marginTop:'24px'}}>
          <label htmlFor="message">Your message:</label>
          <textarea required name="" id="message"></textarea>
          </div>


          <button className='submit'>Submit</button>
        </form>
        <div className="animation">animation</div>
      </div>


    </section>
  )
}

export default Contact