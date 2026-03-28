'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function StoresPage() {
  const dealers = [
    {
      id: 1,
      name: "Alpha Defense Solutions",
      location: "Phoenix, AZ",
      phone: "(602) 555-0123",
      rating: 4.8,
      specialties: ["Handguns", "Tactical Gear"],
      verified: true,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:100,height:100/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6"
    },
    {
      id: 2,
      name: "Bravo Firearms & Ammo",
      location: "Dallas, TX",
      phone: "(214) 555-0456",
      rating: 4.9,
      specialties: ["Rifles", "Ammunition"],
      verified: true,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:100,height:100/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi"
    },
    {
      id: 3,
      name: "Charlie's Gun Emporium",
      location: "Atlanta, GA",
      phone: "(404) 555-0789",
      rating: 4.7,
      specialties: ["Shotguns", "Hunting Gear"],
      verified: true,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:100,height:100/https://www.filepicker.io/api/file/XxV1doYRKmByhOkgnGjA"
    },
    {
      id: 4,
      name: "Delta Tactical Solutions",
      location: "Denver, CO",
      phone: "(303) 555-0234",
      rating: 4.6,
      specialties: ["Optics", "Accessories"],
      verified: true,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:100,height:100/https://www.filepicker.io/api/file/By13UZ9T7GPWbjHTo5N4"
    }
  ]

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Verified Dealers</h1>
          <p className="text-gray-600 text-lg">Find licensed firearm dealers in your area</p>
        </div>

        {/* Alphabet Filter */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Letter</h2>
          <div className="flex flex-wrap gap-2">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors font-semibold text-gray-700"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">1,800+</div>
            <div className="text-gray-600">Verified Dealers</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">50,000+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">All 50</div>
            <div className="text-gray-600">States Covered</div>
          </div>
        </div>

        {/* Dealers Grid */}
        <div className="space-y-4">
          {dealers.map((dealer) => (
            <div key={dealer.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img 
                    src={dealer.image}
                    alt={dealer.name}
                    className="w-16 h-16 rounded-xl object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center text-2xl">🏪</div>
                      `;
                    }}
                  />
                  {dealer.verified && (
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      ✓
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{dealer.name}</h3>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-4 h-4 ${star <= Math.floor(dealer.rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({dealer.rating})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      📍 {dealer.location}
                    </div>
                    <div className="flex items-center">
                      📞 {dealer.phone}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    {dealer.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                      View Products
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                      Contact Dealer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
            Load More Dealers
          </button>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}