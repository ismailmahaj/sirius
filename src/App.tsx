import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { AdsLanding } from './pages/AdsLanding';
import { Apply } from './pages/Apply';
import { Contact } from './pages/Contact';
import { Cookies } from './pages/Cookies';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Quote } from './pages/Quote';
import { ServiceDetail } from './pages/ServiceDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Google Ads landing pages (own layout, no main nav) */}
        <Route path="gardiennage-statique" element={<AdsLanding />} />
        <Route path="inspection-magasin" element={<AdsLanding />} />
        <Route path="securite-evenementielle" element={<AdsLanding />} />

        {/* Main site */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="devis" element={<Quote />} />
          <Route path="postuler" element={<Apply />} />
          <Route path="politique-confidentialite" element={<Privacy />} />
          <Route path="politique-cookies" element={<Cookies />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
