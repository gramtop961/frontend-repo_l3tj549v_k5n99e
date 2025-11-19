import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_400px_at_10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(1000px_500px_at_100%_0%,rgba(34,211,238,0.12),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Products />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
