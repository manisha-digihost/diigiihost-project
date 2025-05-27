import { Phone } from "../../../icons/Phone"
import { Mail } from "../../../icons/Mail"

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="flex flex-row mb-3.5 md:gap-3.5 gap-2.5">
        <Phone className="w-8" />
        <a href="tel:+97152141269" className="contact-text">
          +971 52 141 2629
        </a>
      </div>
      <div className="flex flex-row mb-3.5 md:gap-3.5 gap-2.5">
        <Mail className="w-8" />
        <a href="mailto:mukesh.kokare@idealabs.me" className="contact-text">
          mukesh.kokare@idealabs.me
        </a>
      </div>
    </div>
  )
}

export default ContactInfo
