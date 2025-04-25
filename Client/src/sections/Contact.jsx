import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/Particals';

const Contact = () => {

  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading , setisLoading ] = useState(false);
  const [showAlert, setshowAlert] = useState(false)
  const [alertType, setalertType] = useState("success")
  const [alertMessage, setalertMessage] = useState("")

 const handleChange = (e)=>{
  setformData({...formData, [e.target.name] : e.target.value})
 }
 const showAlertMessage = (type, message) => {
  setalertType(type)
  setalertMessage(message)
  setshowAlert(true)
  setTimeout(()=>{
    setshowAlert(false);
  },5000)
 }
  const submitHandler = async (e)=>{
    e.preventDefault();
    setisLoading(true);
    try {
      await emailjs.send("service_7v4y51u", "template_sndn90r",{
        from_name: formData.name,
        to_name: "Samir",
        from_email: formData.email,
        to_email: "s30621024@gmail.com",
        message: formData.message
      },
      "00iukL_8pwnAK2ygV"
    );
      setisLoading(false);  
      setformData({ name:"", email: "", message: "" })
      showAlertMessage("success", "Your message has been sent successfully")
    } catch (error) {
      setisLoading(false);
      showAlertMessage("danger", "Something went wrong!")
    }
 }
// service_7v4y51u
// template_sndn90r
  return (
    <section id='contact' className='relative flex items-center c-space section-spacing'>
      <Particles 
       className="absolute inset-0 -z-50"
       quantity={100}
       ease={80}
       color={"#ffffff"}
       refresh
       />
    { showAlert && <Alert type={alertType} text={alertMessage} /> }
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
          <h2 className='text-heading'>Let'<span className='text-red-500'>s</span> Talk</h2>
          <p className='font-normal text-neutral-400'>Whether you're looking to build a new website , 
            Improve your existing platform, or bring a unique project to life, 
            I'm Here to help</p>
        </div>
        <form 
        onSubmit={submitHandler}
          className='w-full'>
          <div className='mb-5'>
              <label htmlFor="name" className='field-label'>
                Full Name
              </label>
              <input
              value={formData.name}
               onChange={handleChange}
               type="text"
               id="name"
               name="name"
               className='field-input field-input-focus' 
               autoComplete='name'
               required
               placeholder='Enter your name'
                 />
          </div>
          <div className='mb-5'>
              <label htmlFor="email" className='field-label'>
                Email
              </label>
              <input 
              value={formData.email}
              onChange={handleChange}
               type="email"
               id="email"
               name="email"
               className='field-input field-input-focus' 
               autoComplete='email'
               required
               placeholder='JohnDoe@gmail.com'
                 />
          </div>
          <div className='mb-5'>
              <label htmlFor="message" className='field-label'>
               Message
              </label>
              <textarea
              value={formData.message}
              onChange={handleChange}
               id="message"
               name="message"
               className='field-input field-input-focus' 
               autoComplete='message'
               rows={4}
               required
               placeholder='Share your thoughts...'
                 />
          </div>
          <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
        </div>
    </section>
  )
}

export default Contact