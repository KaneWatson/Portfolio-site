import { Helmet } from "react-helmet-async"
import ContactForm from "../components/ContactForm"
import ContactText from "../components/ContactText"
import Socials from "../components/Socials"

function Contact() {
  return (
    <div className="flex flex-col flex-grow sm:mx-32 md:mx-44 lg:mx-60 xl:mx-96 sm:min-h-[61.5dvh] lg:min-h-[61.5dvh] 2xl:min-h-[71.2dvh]">
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>alouiayoub.com | Contact</title>
        <meta name="description" content="Wanna get in touch? You can do so via the contact form below" />
        <link rel="canonical" href="https://alouiayoub.com/contact" />
      </Helmet>
      <ContactText />
      <Socials />
      <ContactForm />
    </div>
  )
}

export default Contact
