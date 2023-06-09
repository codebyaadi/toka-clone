import './App.css'
import Divider from './components/Divider'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Layouts from './components/Layouts/Layouts'
import PageBuilder from './components/PageBuilder/PagebBuilder'
import Ratings from './components/Ratings/Ratings'
import Support from './components/Support/Support'

function App() {

  return (
    <>
      <Hero />
      <Divider display='hidden' />
      <Layouts />
      <Divider />
      <PageBuilder />
      <Ratings />
      <Support />
      <Divider display='hidden' />
      <Footer />
    </>
  )
}

export default App
