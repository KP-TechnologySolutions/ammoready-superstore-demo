'use client'

export default function Hero() {

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gray-400/10 rounded-full blur-3xl animate-bounce delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-8 hover:bg-white/15 transition-all">
              <div className="flex items-center mr-3">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full absolute animate-pulse"></span>
              </div>
              <span className="text-emerald-200 font-semibold">LIVE</span>
              <span className="mx-2 text-white/60">•</span>
              <span className="text-white/90">1,800+ verified dealers</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 tracking-tight">
              America's Premier
              <br />
              <span className="bg-gradient-to-r from-gray-200 via-white to-yellow-300 bg-clip-text text-transparent">
                Firearms
              </span>
              <br />
              <span className="text-white/95">Superstore</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl">
              Shop from <span className="text-gray-200 font-semibold">1,800+ verified dealers</span> with 
              <span className="text-yellow-300 font-semibold"> live inventory</span>, 
              <span className="text-gray-300 font-semibold">competitive pricing</span>, and 
              <span className="text-yellow-300 font-semibold">trusted transactions</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="flex items-center justify-center">
                  🔫 Shop Firearms
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
              </button>
              <button className="group bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-2xl font-bold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20">
                <span className="flex items-center justify-center">
                  🎯 Browse Ammo & Accessories
                </span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Verified Dealers</div>
                  <div className="text-xs text-white/60">100% Licensed & Certified</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Live Inventory</div>
                  <div className="text-xs text-white/60">Real-time stock updates</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Instant Checkout</div>
                  <div className="text-xs text-white/60">One-click purchasing</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-black/20 via-gray-900/30 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden">
              {/* Premium Firearm Hero Image */}
              <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black mb-6">
                <img 
                  src="https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:600,height:400/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6" 
                  alt="Premium Firearm"
                  className="w-full h-full object-contain p-8 filter drop-shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="flex items-center justify-center h-full bg-gradient-to-br from-gray-800 to-black text-white">
                        <div class="text-center">
                          <div class="text-6xl mb-4">🔫</div>
                          <h3 class="text-2xl font-bold">Premium Firearms</h3>
                          <p class="text-gray-300">Professional Grade Quality</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                {/* Overlay badges */}
                <div className="absolute top-4 left-4 bg-gray-700/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-gray-600/50">
                  ✓ VERIFIED DEALER
                </div>
                <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-yellow-400/50">
                  🚀 FAST SHIPPING
                </div>
                <div className="absolute bottom-4 left-4 bg-gray-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-gray-500/50">
                  🎯 PRECISION GRADE
                </div>
                
                {/* Premium quality indicator */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white text-sm font-semibold">5.0</span>
                  </div>
                  <div className="text-white/70 text-xs mt-1">Professional Grade</div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Collection</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  Professional-grade firearms from America's most trusted manufacturers
                </p>
                
                <div className="flex justify-center space-x-3 mb-6">
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm transition-all backdrop-blur-sm border border-white/20">
                    🎮 View in 3D
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm transition-all font-semibold">
                    View Details
                  </button>
                </div>
                
                <div className="flex justify-center items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2 text-white/80">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>In Stock</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/80">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/80">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Expert Support</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="text-gray-900">
                <div className="text-3xl font-black bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">1,800+</div>
                <div className="text-sm text-gray-600 font-medium">Verified Dealers</div>
                <div className="w-8 h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full mt-2"></div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="text-gray-900">
                <div className="text-3xl font-black bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Live Products</div>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}