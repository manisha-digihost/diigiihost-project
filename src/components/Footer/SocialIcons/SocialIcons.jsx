import { Instagram } from "../../../icons/Instagram"
import { LinkedIn } from "../../../icons/LinkedIn"
import { Xlogo } from "../../../icons/Xlogo"
import { Facebook } from "../../../icons/Facebook"

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="#" className="social-icon">
        <Instagram className='w-5' />
      </a>
      <a href="#" className="social-icon">
        <LinkedIn className='w-5'/>
      </a>
      <a href="#" className="social-icon">
        <Xlogo className="w-5" />
      </a>
      <a href="#" className="social-icon">
        <Facebook className="w-5" />
      </a>
    </div>
  )
}

export default SocialIcons
