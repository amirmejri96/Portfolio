import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import contactAnimation from '../../animations/contact.json'

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzddblz");
  if (state.succeeded) {
    return <p>Your message has been sent successfully 👌</p>;
  }
  return (
    <section id='Contact' className='contact-us'>
      <div className="flex">
        <h1 className='title'>
          <span className='icon-envelope' /> Contact Us
        </h1>
      </div>
      <p className='sub-title'>Contact us for more information and get notified when i publish something new.</p>

      <div style={{justifyContent:'space-between'}} className="flex">
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Email Adress:</label>
            <input autoComplete='off' required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{ marginTop: '24px' }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>


          <button type="submit" disabled={state.submitting} className='submit'>Submit</button>
        </form>
        <div className="animation">
          <Lottie className='contact-animation' style={{height:350}} animationData={contactAnimation}/>
        </div>
      </div>


    </section>
  )
}

export default Contact