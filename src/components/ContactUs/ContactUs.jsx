import ContactForm from "./ContactForm";
import Heading from "../Heading/Heading";

function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col items-center">
          <Heading
            title="Contact Us"
            withCircle={true}
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            subtitleClassName="text-center md:text-xl text-[16px] font-medium text-[#220D04CC] mb-4 md:w-2/3 w-full mx-auto"
          />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
