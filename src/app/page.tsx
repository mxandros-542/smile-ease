'use client'; // This directive allows for client-side interactivity

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <main className="bg-white text-gray-700 font-sans">
        {/* Header Navigation */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Smile Ease Logo" className="h-14 w-auto" />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-[#0a98ff] transition-colors">About Us</a>
              <a href="#why-us" className="text-gray-600 hover:text-[#0a98ff] transition-colors">Why Us</a>
              <a href="#products" className="text-gray-600 hover:text-[#0a98ff] transition-colors">Products</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#0a98ff] transition-colors">Pricing</a>
            </div>
            <a href="#cta" style={{ backgroundColor: '#0a98ff' }} className="text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all hover:opacity-90">
              Get Started
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative" style={{ background: 'linear-gradient(120deg, #ffffff, #e0f7ff)' }}>
          <div className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12 relative z-10">
            {/* Left Column - Image */}
            <div className="order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="A woman with a perfect, confident smile" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Right Column - Text Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ color: '#003d66' }}>Your Smile, Your Way.</h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0" style={{ color: '#0a98ff' }}>
                Get high-quality, affordable dental aligners delivered directly to your door. Straighten your teeth comfortably and confidently, without the hassle of traditional braces.
              </p>
              <a href="#cta" style={{ backgroundColor: '#003d66' }} className="inline-block text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-opacity-90 transition-transform hover:scale-105 shadow-lg">
                LET&apos;S GET STARTED!
              </a>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#003d66' }}>Who we are and What we do?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              At Smile-Ease, we believe everyone deserves a confident smile. Our mission is to provide easy-to-use, invisible aligners that fit seamlessly into your lifestyle. No visits to the clinic, no waiting—just a perfect smile at your convenience.
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl italic max-w-2xl mx-auto" style={{ color: '#0a98ff' }}>
              &ldquo;Confidence starts with a smile - we make it effortless.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="bg-gray-50/70 py-20 md:py-28">
            <div className="container mx-auto px-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#003d66' }}>Why Choose Smile-Ease?</h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center">
                    <h3 className="font-bold text-2xl mb-2" style={{ color: '#003d66' }}>Affordable</h3>
                    <p className="text-gray-600">High-quality dental solutions without breaking the bank.</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-2xl mb-2" style={{ color: '#003d66' }}>Convenient</h3>
                    <p className="text-gray-600">Straighten your teeth from home, at your own pace.</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-2xl mb-2" style={{ color: '#003d66' }}>Trusted</h3>
                    <p className="text-gray-600">Expert-designed aligners made for comfort and results.</p>
                </div>
              </div>
            </div>
        </section>

        {/* Our Products Section */}
        <section id="products" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#003d66' }}>Our Products</h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">We want to give you the best care you actually need.</p>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Product Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/aligners.png" 
                  alt="Clear Dental Aligners" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#003d66' }}>CLEAR ALIGNERS</h3>
                  <p className="text-gray-600">Comfortable, invisible, and designed for gradual teeth alignment.</p>
                </div>
              </div>
              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/retainers.png" 
                  alt="Dental Retainers"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#003d66' }}>RETAINERS</h3>
                  <p className="text-gray-600">Keep your smile perfect after treatment with custom-fit retainers.</p>
                </div>
              </div>
              {/* Product Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/care-products.png" 
                  alt="Dental Care Products" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#003d66' }}>DENTAL CARE PRODUCTS</h3>
                  <p className="text-gray-600">Electric toothbrushes, whitening kits, and other essentials to keep your smile healthy and bright.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-28 bg-gray-50/70">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#003d66' }}>Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">One plan, one price range. Get a doctor-directed treatment plan for a brilliant smile.</p>
            <div className="flex justify-center">
              <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md text-center border-t-4" style={{borderColor: '#0a98ff'}}>
                <h3 className="font-serif text-3xl font-bold mb-2" style={{ color: '#003d66' }}>Complete Aligner Plan</h3>
                <p className="text-5xl font-bold mb-4" style={{ color: '#0a98ff' }}>₹35,000 - ₹50,000</p>
                <p className="text-gray-500 mb-8">Full Treatment Course</p>
                <ul className="text-gray-600 space-y-4 mb-8 text-left">
                  <li className="flex items-center"><span className="text-green-500 mr-3">✔</span> Full set of custom-fit clear aligners</li>
                  <li className="flex items-center"><span className="text-green-500 mr-3">✔</span> Professional orthodontic oversight</li>
                  <li className="flex items-center"><span className="text-green-500 mr-3">✔</span> 3D smile preview</li>
                  <li className="flex items-center"><span className="text-green-500 mr-3">✔</span> Post-treatment retainers included</li>
                </ul>
                <a href="#cta" style={{ backgroundColor: '#003d66' }} className="w-full inline-block text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform hover:scale-105 shadow-lg">
                  Begin Your Journey
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" style={{ background: `linear-gradient(135deg, #0a98ff, #005f99)` }} className="text-white">
          <div className="container mx-auto px-6 py-20 md:py-28 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Smile?</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Explore our products and start your journey to a confident, beautiful smile today.
            </p>
            <a href="#products" className="inline-block bg-white text-blue-950 font-bold py-3 px-10 rounded-full text-lg hover:bg-gray-200 transition-transform hover:scale-105 shadow-lg">
              LET&apos;S GET STARTED!
            </a>
          </div>
        </section>
        
        {/* Footer */}
        <footer style={{ backgroundColor: '#003d66' }} className="text-white py-10">
          <div className="container mx-auto px-6 text-center text-blue-200 font-light">
            <p>&copy; 2025 Smile Ease. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
