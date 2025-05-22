import React, { useState } from 'react';
import { Solution } from '../types';
import { solutions } from '../data/solutionsData';
import { Filter } from 'lucide-react';

function Solutions() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'gated' | 'public'>('all');

  const filteredSolutions = solutions.filter(solution => 
    activeCategory === 'all' ? true : solution.category === activeCategory
  );

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value as 'all' | 'gated' | 'public')}
              className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="gated">Gated Communities</option>
              <option value="public">Public Areas</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => (
            <div 
              key={solution.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={solution.imageUrl} 
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    solution.category === 'gated' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {solution.category === 'gated' ? 'Gated' : 'Public'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions