import React, { useState, useEffect } from 'react';
import { Search, Heart, Share2, Bed, Bath, Maximize, MapPin, SlidersHorizontal, Grid, Menu, X, ChevronDown, Filter, ArrowLeft, List, Instagram, Facebook, Linkedin } from 'lucide-react';

// Header Component
function Header({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <span className="text-2xl font-serif tracking-wide text-gray-900">PRESTIGE</span>
            <span className="ml-2 text-sm text-gray-500">Real Estate</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => setActivePage('buy')} className={`text-sm ${activePage === 'buy' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'} transition`}>Acheter</button>
            <button onClick={() => setActivePage('sell')} className={`text-sm ${activePage === 'sell' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'} transition`}>Vendre</button>
            <button onClick={() => setActivePage('explore')} className={`text-sm ${activePage === 'explore' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'} transition`}>Explorer</button>
            <button onClick={() => setActivePage('about')} className={`text-sm ${activePage === 'about' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'} transition`}>À Propos</button>
            <button onClick={() => setActivePage('contact')} className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition text-sm font-medium">Contact</button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => { setActivePage('buy'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900">Acheter</button>
            <button onClick={() => { setActivePage('sell'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900">Vendre</button>
            <button onClick={() => { setActivePage('explore'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900">Explorer</button>
            <button onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900">À Propos</button>
            <button onClick={() => { setActivePage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}

// Footer Component  
function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-serif tracking-wide mb-2">PRESTIGE</h2>
                <div className="text-sm tracking-widest text-gray-400">REAL ESTATE</div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Votre connexion aux plus belles maisons et expériences.
              </p>
              <p className="text-amber-500 text-sm mb-8 tracking-wide">
                NE MANQUEZ JAMAIS UN MOMENT DE LUXE
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Luxury" className="w-full h-80 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">© 1990 – 2025 Prestige Real Estate</p>
        </div>
      </div>
    </footer>
  );
}

// HomePage
function HomePage() {
  const properties = [
    { id: 1, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', price: '12,500,000', title: 'Villa Contemporaine', location: 'Côte d\'Azur', beds: 6, baths: 5, area: '450 m²' },
    { id: 2, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', price: '8,900,000', title: 'Penthouse Moderne', location: 'Paris 16ème', beds: 4, baths: 3, area: '320 m²' },
    { id: 3, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80', price: '15,200,000', title: 'Château Historique', location: 'Bordeaux', beds: 8, baths: 6, area: '680 m²' }
  ];

  return (
    <div>
      <section className="relative h-screen mt-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Luxury" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">L'Excellence Immobilière</h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl">Découvrez des propriétés d'exception</p>
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl">
            <button className="mt-6 w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition flex items-center justify-center">
              <Search size={20} className="mr-2" />Rechercher
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Propriétés en Vedette</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">{p.price} €</span>
                </div>
              </div>
              <h3 className="text-xl font-serif">{p.title}</h3>
              <p className="text-gray-600 flex items-center"><MapPin size={16} className="mr-1" />{p.location}</p>
              <div className="flex space-x-4 text-sm text-gray-600 pt-2">
                <div className="flex items-center"><Bed size={16} className="mr-1" />{p.beds}</div>
                <div className="flex items-center"><Bath size={16} className="mr-1" />{p.baths}</div>
                <div className="flex items-center"><Maximize size={16} className="mr-1" />{p.area}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// BuyPage - Version simplifiée
function BuyPage() {
  return (
    <div className="mt-20 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif">Acheter - En développement</h1>
      </div>
    </div>
  );
}

// Autres pages simples
function SellPage() {
  return <div className="mt-20 py-24"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-serif">Vendre</h1></div></div>;
}

function ExplorePage() {
  return <div className="mt-20 py-24"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-serif">Explorer</h1></div></div>;
}

function AboutPage() {
  return <div className="mt-20 py-24"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-serif">À Propos</h1></div></div>;
}

function ContactPage() {
  return <div className="mt-20 py-24"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-serif">Contact</h1></div></div>;
}

// App principal
export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      {activePage === 'home' && <HomePage />}
      {activePage === 'buy' && <BuyPage />}
      {activePage === 'sell' && <SellPage />}
      {activePage === 'explore' && <ExplorePage />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'contact' && <ContactPage />}
      
      <Footer />
    </div>
  );
}
