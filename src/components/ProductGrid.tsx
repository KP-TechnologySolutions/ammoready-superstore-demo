'use client'

import { useState } from 'react'
import { StarIcon, HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconFilled } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic'

// Dynamically import 3D components
const Product3D = dynamic(() => import('./Product3D'), { 
  ssr: false,
  loading: () => (
    <div className="h-32 bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-gray-500 text-xs">Loading 3D...</div>
    </div>
  )
})

const Product3DViewer = dynamic(() => import('./Product3DViewer'), { 
  ssr: false 
})

const Product3DConfigurator = dynamic(() => import('./Product3DConfigurator'), { 
  ssr: false 
})

export default function ProductGrid() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [show3D, setShow3D] = useState<{ [key: number]: boolean }>({})
  const [viewerProduct, setViewerProduct] = useState<{ 
    isOpen: boolean, 
    product?: any 
  }>({ isOpen: false })
  
  const [configuratorProduct, setConfiguratorProduct] = useState<{ 
    isOpen: boolean, 
    product?: any 
  }>({ isOpen: false })

  const products = [
    {
      id: 1,
      name: "CZ 75 B 4.7IN 9MM BLACK POLYCOAT",
      seller: "CZ",
      location: "Czech Republic", 
      price: 499.99,
      originalPrice: 549.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6",
      rating: 4.8,
      reviews: 142,
      inStock: true,
      shipping: "Free",
      verified: true,
      deal: "Hot Deal",
      productType: "handgun" as const
    },
    {
      id: 2, 
      name: "ACOG Riflescope 100502",
      seller: "Trijicon",
      location: "Wixom, MI", 
      price: 997.54,
      originalPrice: 1129.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      shipping: "Free",
      verified: true,
      deal: null,
      productType: "optic" as const
    },
    {
      id: 3,
      name: "M&P15 Sport III 5.56 16\" M-LOK",
      seller: "Smith & Wesson",
      location: "Springfield, MA",
      price: 679.00,
      originalPrice: 749.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      shipping: "Free",
      verified: true,
      deal: "Price Drop",
      productType: "rifle" as const
    },
    {
      id: 4,
      name: "HLS EPS-CARRY GD 6MOA RED DOT",
      seller: "Holosun",
      location: "Industry, CA",
      price: 272.54,
      originalPrice: 319.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/By13UZ9T7GPWbjHTo5N4",
      rating: 4.6,
      reviews: 234,
      inStock: true,
      shipping: "Free",
      verified: true,
      deal: null,
      productType: "optic" as const
    },
    {
      id: 5,
      name: "Winchester USA Valor 20GA 2.75\"",
      seller: "Winchester",
      location: "East Alton, IL",
      price: 8.39,
      originalPrice: 12.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/XxV1doYRKmByhOkgnGjA",
      rating: 4.8,
      reviews: 78,
      inStock: true,
      shipping: "$8.99",
      verified: true,
      deal: "Best Price",
      productType: "ammo" as const
    },
    {
      id: 6,
      name: "Auto Ordnance 1911A1 .45ACP 4.25\"",
      seller: "Auto Ordnance",
      location: "Worcester, MA",
      price: 499.99,
      originalPrice: 589.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/CyzdmzoRTjK4pnq0FwpQ",
      rating: 4.9,
      reviews: 167,
      inStock: true,
      shipping: "Free",
      verified: true,
      deal: "Best Seller",
      productType: "handgun" as const
    }
  ]

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const toggle3D = (id: number) => {
    setShow3D(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const openViewer = (product: any) => {
    setViewerProduct({ isOpen: true, product })
  }

  const closeViewer = () => {
    setViewerProduct({ isOpen: false })
  }

  const openConfigurator = (product: any) => {
    setConfiguratorProduct({ isOpen: true, product })
  }

  const closeConfigurator = () => {
    setConfiguratorProduct({ isOpen: false })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Hand-picked deals from our verified dealer network with 
              <span className="text-purple-600 font-semibold"> interactive 3D previews</span>
            </p>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <select className="px-6 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80 backdrop-blur-sm font-medium">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest First</option>
            </select>
            
            <div className="flex bg-gray-100 rounded-2xl p-1">
              <button className="px-6 py-2 bg-white text-gray-900 rounded-xl shadow-sm font-semibold">
                Grid
              </button>
              <button className="px-6 py-2 text-gray-600 hover:bg-white/50 rounded-xl font-semibold transition-all">
                List
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-purple-200 overflow-hidden hover:scale-105 transform"
            >
              <div className="relative p-6 pb-4">
                {/* Deal Badge */}
                {product.deal && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                    product.deal === 'Hot Deal' ? 'bg-red-500 text-white' :
                    product.deal === 'Price Drop' ? 'bg-orange-500 text-white' :
                    product.deal === 'Best Seller' ? 'bg-green-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {product.deal}
                  </div>
                )}

                {/* Favorite Button */}
                <button 
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <HeartIcon 
                    className={`w-5 h-5 ${
                      favorites.includes(product.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </button>

                {/* Product Image/3D */}
                {show3D[product.id] ? (
                  <div className="mb-4">
                    <Product3D productType={product.productType} className="h-48" />
                    <div className="text-center mt-2">
                      <button
                        onClick={() => toggle3D(product.id)}
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        Switch to Image
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4">
                    <div className="relative h-48 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors cursor-pointer overflow-hidden"
                         onClick={() => toggle3D(product.id)}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="flex items-center justify-center h-full text-4xl bg-gray-100 rounded-xl">
                              ${product.productType === 'handgun' ? '🔫' : 
                                product.productType === 'rifle' ? '🏹' :
                                product.productType === 'optic' ? '🔭' :
                                product.productType === 'ammo' ? '📦' : '🎯'}
                            </div>
                          `;
                        }}
                      />
                    </div>
                    <div className="text-center mt-2">
                      <button
                        onClick={() => toggle3D(product.id)}
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        View in 3D
                      </button>
                    </div>
                  </div>
                )}

                {/* Seller Info */}
                <div className="flex items-center space-x-2 mb-3">
                  {product.verified && (
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                  <div className="text-sm text-gray-600">{product.seller}</div>
                  <div className="text-sm text-gray-400">•</div>
                  <div className="text-sm text-gray-500">{product.location}</div>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i}>
                        {i < Math.floor(product.rating) ? (
                          <StarIconFilled className="w-4 h-4 text-yellow-400" />
                        ) : (
                          <StarIcon className="w-4 h-4 text-gray-300" />
                        )}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.shipping === 'Free' ? 'Free Shipping' : `+${product.shipping} shipping`}
                    </div>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-2 ${
                    product.inStock ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      product.inStock ? 'bg-green-500' : 'bg-orange-500'
                    }`}></div>
                    <span className="text-sm font-medium">
                      {product.inStock ? 'In Stock' : 'Back Soon'}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <button 
                      disabled={!product.inStock}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-colors ${
                        product.inStock 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'Add to Cart' : 'Notify Me'}
                    </button>
                    <button 
                      onClick={() => openViewer(product)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Full 3D
                    </button>
                  </div>
                  
                  {(product.productType === 'handgun' || product.productType === 'rifle') && (
                    <button 
                      onClick={() => openConfigurator(product)}
                      className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      🛠️ Configure
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <span className="flex items-center justify-center">
              View All Products
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Full 3D Viewer Modal */}
      {viewerProduct.isOpen && viewerProduct.product && (
        <Product3DViewer
          isOpen={viewerProduct.isOpen}
          onClose={closeViewer}
          productType={viewerProduct.product.productType}
          productName={viewerProduct.product.name}
        />
      )}

      {/* 3D Configurator Modal */}
      {configuratorProduct.isOpen && configuratorProduct.product && (
        <Product3DConfigurator
          isOpen={configuratorProduct.isOpen}
          onClose={closeConfigurator}
          productType={configuratorProduct.product.productType}
          productName={configuratorProduct.product.name}
        />
      )}
    </section>
  )
}