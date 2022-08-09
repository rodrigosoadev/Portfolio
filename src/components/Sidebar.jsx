import Avatar from '../img/me1.jpg'

import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Siderbar = () => {
  return <aside id='sidebar'>
    <img src={Avatar} alt="Rodrigo soares" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks/>
    <InformationContainer/>
    <a href="" className='btn'>
      Download currículo
    </a>
  </aside>
}

export default Siderbar
