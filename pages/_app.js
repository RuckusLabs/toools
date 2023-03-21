import Nav from "./components/Nav"
import Footer from "./components/Footer"
import '../styles/globals.css'
import '../styles/form.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Nav />
      <Component className="main-wrapper" {...pageProps} />
      <Footer />
    </div>
  )
}
