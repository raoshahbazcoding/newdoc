import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import EmergencyRepairs from "./components/EmergencyRepairs"
import WhyChooseUs from "./components/WhyChooseUs"
import ShareStory from "./components/ShareStory"
import Testimonials from "./components/Testimonials"
import OurTeam from "./components/OurTeam"
import LatestNews from "./components/LatestNews"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import ServicesSection from "./components/PartnerLogos"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <ShareStory />
      <Testimonials />
      {/* <WhyChooseUs /> */}
      <OurTeam />
      <EmergencyRepairs />
      <ContactUs />
      <ServicesSection />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default App

