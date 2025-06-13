import React from 'react';
import { Phone, Mail } from 'lucide-react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-900 to-green-800 text-white py-24">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/FB_IMG_1741319571925.jpg" 
            alt="HRG Property Management Logo" 
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">HRG Property Management Pvt Ltd</h1>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Leading the way in private and public property management since 2015, specializing in sustainable urban development and green infrastructure solutions across Andhra Pradesh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+919133014738" className="hover:text-green-300 transition-colors">+91 9133014738</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+917337285976" className="hover:text-green-300 transition-colors">+91 7337285976</a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:cbo@nripropertynparentcare.com" className="hover:text-green-300 transition-colors">cbo@nripropertynparentcare.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@nripropertynparentcare.com" className="hover:text-green-300 transition-colors">info@nripropertynparentcare.com</a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Private Properties</h3>
              <p>Premium residential complex management with innovative green solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Public Spaces</h3>
              <p>Urban infrastructure development with sustainable environmental practices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Rural Projects</h3>
              <p>Extending green initiatives to transform rural communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;