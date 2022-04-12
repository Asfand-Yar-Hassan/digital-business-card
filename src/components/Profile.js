import React from 'react'
import picture from '../images/profile.jpg'
import { MdOutlineEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'

const Profile = () => {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/asfand-yar-hassan/')
  }
  return (
    <div className='profile'>
      <img src={picture} alt='Profile' className='profile-pic' />
      <h2>Asfand Yar Hassan</h2>
      <h3>Software Developer</h3>

      <button
        className='email'
        onClick={() =>
          (window.location = 'mailto:hassaasf@sheridancollege.ca')
        }>
        <MdOutlineEmail />
        Email
      </button>

      <button className='linkedin' onClick={handleClick}>
        <AiFillLinkedin />
        LinkedIn
      </button>
    </div>
  )
}
export default Profile
