import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import EmergencyRepairs from "./components/EmergencyRepairs"
import ShareStory from "./components/ShareStory"
import Testimonials from "./components/Testimonials"
import OurTeam from "./components/OurTeam"
import LatestNews from "./components/LatestNews"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Partners from "./components/PartnerLogos"
import FinanceSection from "./components/FinanceSection"
// import WhyChooseUs from "./components/WhyChooseUs"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero  />
      <AboutUs />
      <Services />
      <ShareStory />
      <Testimonials /> 
      {/* <WhyChooseUs /> */}
      <OurTeam />
      <EmergencyRepairs />
      <FinanceSection/>
      <ContactUs />
      <Partners />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default App

