import React from 'react'
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from 'react-icons/fa'

const Footer = () => {
  const clickHandle = (url) => {
    window.open(url)
  }

  return (
    <div className='footer'>
      <footer>
        <FaTwitterSquare
          onClick={() => {
            clickHandle('https://twitter.com/AsfandYarHassan')
          }}
          className='twitter'
          size={48}
        />
        <FaGithubSquare
          onClick={() => {
            clickHandle('https://github.com/Asfand-Yar-Hassan')
          }}
          className='github'
          size={48}
        />
        <FaFacebookSquare
          onClick={() => {
            clickHandle('https://www.facebook.com/asfand.y.hassan/')
          }}
          className='facebook'
          size={48}
        />
      </footer>
    </div>
  )
}
export default Footer
