import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import IntroCompany from './components/IntroCompany';
import OfficeHours from './components/OfficeHours';
import CancelationPolicy from './components/CancelationPolicy';
import AvailableTimes from './components/AvailableTimes';
import BookingDetails from './components/BookingDetails';
import BookingConfirmation from './components/BookingConfirmation';
import { useLoading } from "./context/LoadingContext";

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); // simulate delay
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Zackly-rite Massage Therapy</title>
        <meta name="keywords" content="massage therapy, move, rejuvinate, heal, restore, feel good, Intentional/Purposeful, Restorative, Healing, Honest, Qualified, Professional, Approachable and Caring, Educated, Aura-Lee Zack " />
        <meta name="description" content="Zackly-Rite massage therapy clinic established in 1997, targets theraputic massage by integrating various modalities, including Swedish massage, Myofascial cupping and other fascial treatments, and Hot Stone Massage." />
      </Helmet>
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
    </>
  )
}

export default App
