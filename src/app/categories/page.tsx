'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products', count: '50,247' },
    { id: 'handguns', name: 'Handguns', count: '12,847' },
    { id: 'rifles', name: 'Rifles', count: '8,923' },
    { id: 'shotguns', name: 'Shotguns', count: '3,456' },
    { id: 'ammo', name: 'Ammunition', count: '15,642' },
    { id: 'optics', name: 'Optics', count: '4,291' },
    { id: 'accessories', name: 'Accessories', count: '5,088' }
  ]

  const products = [
    {
      id: 1,
      name: "CZ 75 B 4.7IN 9MM BLACK POLYCOAT",
      brand: "CZ",
      price: 499.99,
      originalPrice: 599.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6",
      category: "handguns",
      inStock: true,
      rating: 4.8,
      reviews: 142
    },
    {
      id: 2,
      name: "ACOG Riflescope 100502",
      brand: "Trijicon",
      price: 997.54,
      originalPrice: 1129.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi",
      category: "optics",
      inStock: true,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "M&P15 Sport III 5.56 16\" M-LOK",
      brand: "Smith & Wesson",
      price: 679.00,
      originalPrice: 749.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi",
      category: "rifles",
      inStock: true,
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Winchester USA Valor 20GA 2.75\"",
      brand: "Winchester",
      price: 8.39,
      originalPrice: 12.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/XxV1doYRKmByhOkgnGjA",
      category: "ammo",
      inStock: true,
      rating: 4.8,
      reviews: 78
    },
    {
      id: 5,
      name: "Mossberg 500 Field 12GA",
      brand: "Mossberg", 
      price: 399.99,
      originalPrice: 449.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/8GYMIV1TZqfWPjFXAEmA",
      category: "shotguns",
      inStock: false,
      rating: 4.6,
      reviews: 234
    },
    {
      id: 6,
      name: "Kydex IWB Holster",
      brand: "Holster Pro",
      price: 69.99,
      originalPrice: 89.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/cmqnO16QsdKfjDnJHOEg",
      category: "accessories",
      inStock: true,
      rating: 4.9,
      reviews: 167
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.id ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  {['all', 'under-100', '100-500', '500-1000', 'over-1000'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        priceRange === range
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {range === 'all' && 'All Prices'}
                      {range === 'under-100' && 'Under $100'}
                      {range === '100-500' && '$100 - $500'}
                      {range === '500-1000' && '$500 - $1,000'}
                      {range === 'over-1000' && 'Over $1,000'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" defaultChecked />
                    <span className="ml-2 text-gray-700">In Stock</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                    <span className="ml-2 text-gray-700">Pre-Order</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                    <span className="ml-2 text-gray-700">Special Order</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
                </h1>
                <p className="text-gray-600 mt-1">
                  {filteredProducts.length} products available
                </p>
              </div>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
                <option>Newest First</option>
                <option>Customer Rating</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-50 relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">🔫</div>
                        `;
                      }}
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3">{product.brand}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.inStock && (
                        <span className="text-sm text-green-600 font-medium">In Stock</span>
                      )}
                    </div>
                    
                    <button 
                      disabled={!product.inStock}
                      className={`w-full py-2 px-4 rounded-xl font-semibold transition-colors ${
                        product.inStock
                          ? 'bg-gray-900 text-white hover:bg-gray-800'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'BUY NOW' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-12">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    page === 1 
                      ? 'bg-gray-900 text-white' 
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}