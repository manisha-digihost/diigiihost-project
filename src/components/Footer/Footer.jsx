import "../../assets/styles/Footer.css";
import Logo from "../../icons/Logo";
import ContactInfo from "./ContactInfo/ContactInfo";
import ExploreLinks from "./ExploreLinks/ExploreLinks";
import FindUs from "./FindUs/FindUs";
import LoremLinks from "./LinkList/LinkList";
import SocialIcons from "./SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-content md:gap-20 gap-4">
          <div className="max-w-96">
            <Logo className="md:mb-6 mb-2 md:w-[227px] w-[189px]" />
            <p className="footer-description !mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <SocialIcons />
          </div>

          <div className="max-w-3xl flex md:gap-20 gap-2.5">
            <div className="md:gap-20 flex flex-row gap-10">
              <div className="md:w-36 w-1/2">
                <h3 className="footer-heading">Explore</h3>
                <ExploreLinks />
              </div>

              <div className="md:w-36 w-1/2">
                <h3 className="footer-heading">Lorem Ipsum</h3>
                <LoremLinks />
              </div>
            </div>

            <div className="md:w-2xs w-full">
              <h3 className="footer-heading">Find Us</h3>
              <FindUs />

              <h3 className="footer-heading mt-4">Contact Info</h3>
              <ContactInfo />
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-copyright text-center text-sm font-normal">
          COPYRIGHT @ 2024 IDEALABS. ALL RIGHTS RESERVED. | POWERED BY: DIGIHOST
          TECH SOLUTIONS PVT. LTD.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
