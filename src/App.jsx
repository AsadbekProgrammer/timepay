import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Biometric = lazy(() => import('./components/Biometric'));
const Integration = lazy(() => import('./components/Integration'));
const Roadmap = lazy(() => import('./components/Roadmap'));
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
const ModernApps = lazy(() => import('./components/ModernApps'));
const ContactForm = lazy(() => import('./components/ContactForm'));
import Footer from './components/Footer';

const Loading = () => (
  <div className="h-20 w-full flex items-center justify-center text-tp-orange animate-pulse">
    Yuklanmoqda...
  </div>
);

const scrollToContact = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Navbar balandligini hisobga olgan holda scroll qilish
    const offset = 100; // Navbar balandligi
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

function App() {
  return (
    <>
      <Navbar scrollToContact={scrollToContact} />
      <Suspense fallback={<Loading />}>
        <Hero scrollToContact={scrollToContact} />
        <Features />
        <Biometric />
        <Integration />
        <Roadmap />
        <ServiceDetail />
        <ModernApps />
        <ContactForm />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
