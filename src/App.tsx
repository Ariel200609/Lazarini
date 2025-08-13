import React from 'react';
import { PharmacyProvider } from './context/PharmacyContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import PharmacyInfo from './components/PharmacyInfo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <PharmacyProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <div id="productos">
            <ProductList />
          </div>
          <div id="sucursales">
            <PharmacyInfo />
          </div>
        </main>
        <Footer />
      </div>
    </PharmacyProvider>
  );
};

export default App;
