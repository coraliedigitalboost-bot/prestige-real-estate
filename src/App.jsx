import React, { useState } from 'react';
import { Search, Heart, MapPin, Bed, Bath, Maximize, Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react';

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
                Votre connexion aux plus belles maisons et expériences, quelle que soit la destination ou le style de vie.
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
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Luxury Interior" className="w-full h-80 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-500">© 1990 – 2025 Prestige Real Estate. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

// Home Page
function HomePage() {
  const properties = [
    { id: 1, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', price: '12,500,000', title: 'Villa Contemporaine Vue Mer', location: 'Côte d\'Azur, France', beds: 6, baths: 5, area: '450 m²' },
    { id: 2, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', price: '8,900,000', title: 'Penthouse Moderne', location: 'Paris 16ème, France', beds: 4, baths: 3, area: '320 m²' },
    { id: 3, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80', price: '15,200,000', title: 'Château Historique', location: 'Bordeaux, France', beds: 8, baths: 6, area: '680 m²' }
  ];

  return (
    <div>
      <section className="relative h-screen mt-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Luxury Property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide">L'Excellence Immobilière</h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl font-light">Découvrez des propriétés d'exception dans les plus beaux emplacements</p>
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wide">Localisation</label>
                <div className="flex items-center">
                  <MapPin size={18} className="text-gray-400 mr-2" />
                  <input type="text" placeholder="Ville, région, pays..." className="w-full outline-none text-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wide">Type</label>
                <select className="w-full outline-none text-gray-900">
                  <option>Tous types</option>
                  <option>Villa</option>
                  <option>Appartement</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wide">Budget</label>
                <select className="w-full outline-none text-gray-900">
                  <option>Tous budgets</option>
                  <option>1M - 5M €</option>
                  <option>5M - 10M €</option>
                </select>
              </div>
            </div>
            <button className="mt-6 w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition flex items-center justify-center">
              <Search size={20} className="mr-2" />Rechercher
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Propriétés en Vedette</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Une sélection exclusive de nos biens immobiliers les plus prestigieux</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-900">{property.price} €</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif text-gray-900">{property.title}</h3>
                <p className="text-gray-600 flex items-center"><MapPin size={16} className="mr-1" />{property.location}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 pt-2">
                  <div className="flex items-center"><Bed size={16} className="mr-1" />{property.beds}</div>
                  <div className="flex items-center"><Bath size={16} className="mr-1" />{property.baths}</div>
                  <div className="flex items-center"><Maximize size={16} className="mr-1" />{property.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Buy Page
function BuyPage() {
  return (
    <div className="mt-20">
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="hover:text-gray-900 cursor-pointer">Maison</span>
            <span className="mx-2">›</span>
            <span className="hover:text-gray-900 cursor-pointer">Maisons À Vendre</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900">France</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Maisons De Luxe À Vendre En France</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 p-12 rounded-lg text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">Page Acheter</h2>
          <p className="text-gray-600">Catalogue complet des propriétés disponibles</p>
        </div>
      </div>
    </div>
  );
}

// Sell Page
function SellPage() {
  return (
    <div className="mt-20">
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80" alt="Vendre" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide">Vendez au Meilleur Prix</h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl font-light">Confiez la vente de votre propriété d'exception à nos experts</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-medium">Estimation Gratuite</a>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition font-medium">Nous Contacter</a>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2">95%</div>
              <div className="text-gray-400 text-sm">Taux de Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2">45j</div>
              <div className="text-gray-400 text-sm">Délai Moyen de Vente</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2">850+</div>
              <div className="text-gray-400 text-sm">Propriétés Vendues</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2">30</div>
              <div className="text-gray-400 text-sm">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Explore Page
function ExplorePage() {
  const destinations = [
    { id: 1, name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', properties: 245 },
    { id: 2, name: 'Côte d\'Azur', country: 'France', image: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&q=80', properties: 189 },
    { id: 3, name: 'Bordeaux', country: 'France', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&q=80', properties: 156 }
  ];

  return (
    <div className="mt-20">
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80" alt="Explorer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide">Explorez le Monde</h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl font-light">Découvrez les destinations les plus prestigieuses</p>
          <div className="bg-white rounded-lg shadow-2xl p-4 w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Rechercher une destination..." className="w-full pl-12 pr-4 py-4 outline-none text-gray-900 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Destinations Phares</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Les lieux les plus recherchés pour votre investissement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div key={dest.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif mb-2">{dest.name}</h3>
                    <p className="text-sm">{dest.properties} propriétés</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// About Page
function AboutPage() {
  return (
    <div className="mt-20">
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="À propos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide">À Propos de Nous</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl font-light">Depuis 1990, nous redéfinissons l'excellence dans l'immobilier de prestige</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Notre Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Prestige Real Estate s'est imposé comme le leader mondial de l'immobilier de luxe en offrant un service exceptionnel et des propriétés d'exception.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2">30+</div>
              <div className="text-gray-400 text-sm">Années d'Expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2">50,000+</div>
              <div className="text-gray-400 text-sm">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2">127</div>
              <div className="text-gray-400 text-sm">Pays Couverts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif mb-2">15B€</div>
              <div className="text-gray-400 text-sm">Volume de Transactions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Contact Page
function ContactPage() {
  return (
    <div className="mt-20 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Contactez-Nous</h1>
          <p className="text-gray-600 text-lg">Notre équipe est à votre écoute</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Nom" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900" />
            <input type="email" placeholder="Email" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900" />
          </div>
          <input type="tel" placeholder="Téléphone" className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900" />
          <textarea placeholder="Message" rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"></textarea>
          <button className="mt-6 w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition font-medium">Envoyer</button>
        </div>
      </div>
    </div>
  );
}

// Main App
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
