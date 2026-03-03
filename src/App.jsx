import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Problems from './components/Problems'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Industries from './components/Industries'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Problems />
        <Services />
        <WhyUs />
        <Industries />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
