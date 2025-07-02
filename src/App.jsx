import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import IntroCompany from './components/IntroCompany';
import OfficeHours from './components/OfficeHours';
import CancelationPolicy from './components/CancelationPolicy';
import AvailableTimes from './components/AvailableTimes';
import BookingDetails from './components/BookingDetails';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <Header />
      <main className="container ">
        <Routes>
          <Route path="/" element={
            <>
              <IntroCompany />
              <OfficeHours />
              <CancelationPolicy />
            </>
          } />
          <Route path="/available" element={<AvailableTimes />} />
          <Route path="/booking" element={<BookingDetails />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
