import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>},
    {name: 'github', icon: <FaGithub/>},
    {name: 'instagram', icon: <FaInstagram/>},
]

const SocialNetworks = () => {
  return <section id='social-networks'>
    
      <a href="https://www.linkedin.com/in/rodrigo-soares-097276241/" target='_blank'>
        <FaLinkedinIn  className='social-btn' id='linkedin'/>
      </a>
    
      <a href="https://github.com/rodrigosoadev" target='_blank'>
        <FaGithub className='social-btn' id='github'/>
      </a>
    
      <a href="https://www.instagram.com/_rodrigosoa/" target='_blank'>
        <FaInstagram  className='social-btn' id='instagram'/>
      </a>
    
  </section>
  
}

export default SocialNetworks
