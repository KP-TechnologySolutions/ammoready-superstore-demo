'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DailyDealsPage() {
  const deals = [
    {
      id: 1,
      name: "CZ 75 B 4.7IN 9MM BLACK POLYCOAT",
      brand: "CZ",
      price: 499.99,
      originalPrice: 599.99,
      savings: 100.00,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:400,height:400/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6",
      timeLeft: "6 hours",
      soldCount: 23,
      totalAvailable: 50,
      rating: 4.8,
      reviews: 142
    },
    {
      id: 2,
      name: "M9A3 Magazine JMM9A310",
      brand: "Beretta",
      price: 27.87,
      originalPrice: 34.99,
      savings: 7.12,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:400,height:400/https://www.filepicker.io/api/file/CyzdmzoRTjK4pnq0FwpQ",
      timeLeft: "4 hours",
      soldCount: 67,
      totalAvailable: 100,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Winchester USA Valor 20GA 2.75\"",
      brand: "Winchester",
      price: 8.39,
      originalPrice: 12.99,
      savings: 4.60,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:400,height:400/https://www.filepicker.io/api/file/TBIkru1Q2Cw2Zq7z7RB1",
      timeLeft: "2 hours",
      soldCount: 156,
      totalAvailable: 200,
      rating: 4.7,
      reviews: 234
    },
    {
      id: 4,
      name: "Remington Golden Bullet High Velocity",
      brand: "Remington",
      price: 4.16,
      originalPrice: 6.99,
      savings: 2.83,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:400,height:400/https://www.filepicker.io/api/file/cmqnO16QsdKfjDnJHOEg",
      timeLeft: "8 hours",
      soldCount: 89,
      totalAvailable: 150,
      rating: 4.6,
      reviews: 178
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Daily Deals</h1>
            <p className="text-xl mb-8 opacity-90">Limited-time offers on premium firearms and accessories</p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-lg font-semibold">⏰ Deals refresh at midnight EST</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-1">24</div>
            <div className="text-gray-600">Active Deals</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">35%</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">2,847</div>
            <div className="text-gray-600">Items Sold Today</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">6hrs</div>
            <div className="text-gray-600">Avg. Time Left</div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow">
              {/* Deal Badge */}
              <div className="bg-red-500 text-white text-center py-2 font-bold text-sm">
                🔥 SAVE ${deal.savings.toFixed(2)} - Limited Time!
              </div>
              
              <div className="p-8">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-48 h-48 bg-gray-50 rounded-xl flex-shrink-0 overflow-hidden">
                    <img 
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">🔫</div>
                        `;
                      }}
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{deal.name}</h3>
                      <p className="text-gray-600 font-medium">{deal.brand}</p>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-5 h-5 ${star <= Math.floor(deal.rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({deal.reviews} reviews)</span>
                    </div>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline space-x-3">
                        <span className="text-3xl font-bold text-gray-900">${deal.price}</span>
                        <span className="text-xl text-gray-400 line-through">${deal.originalPrice}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm font-bold">
                          {Math.round((deal.savings / deal.originalPrice) * 100)}% OFF
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{deal.soldCount} sold</span>
                        <span>{deal.totalAvailable - deal.soldCount} remaining</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-red-500 h-3 rounded-full transition-all duration-300"
                          style={{width: `${(deal.soldCount / deal.totalAvailable) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Time Left */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-red-600">
                        <span className="text-sm font-medium">⏰ {deal.timeLeft} left</span>
                      </div>
                      
                      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                        BUY NOW - Limited Time!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
            View All Daily Deals
          </button>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}