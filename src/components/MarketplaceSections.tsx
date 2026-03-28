'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function MarketplaceSections() {
  const [activeSection, setActiveSection] = useState('new-today')

  const newTodayProducts = [
    {
      id: 1,
      name: "ACOG Riflescope 100502",
      brand: "Trijicon",
      price: 997.54,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi",
      fallbackEmoji: "🔭"
    },
    {
      id: 2,
      name: "HLS EPS-CARRY GD 6MOA",
      brand: "Holosun", 
      price: 272.54,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/By13UZ9T7GPWbjHTo5N4",
      fallbackEmoji: "🎯"
    },
    {
      id: 3,
      name: "Tango SPR 6-24X52 30MM",
      brand: "Sig Sauer",
      price: 170.54,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/XxV1doYRKmByhOkgnGjA",
      fallbackEmoji: "🔭"
    },
    {
      id: 4,
      name: "EOTECH VUDU 3-9X32 SFP",
      brand: "EOTech",
      price: 726.45,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6",
      fallbackEmoji: "🔬"
    }
  ]

  const dailyDealsProducts = [
    {
      id: 1,
      name: "CZ 75 B 4.7IN 9MM BLACK",
      brand: "CZ",
      price: 499.99,
      originalPrice: 599.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6",
      fallbackEmoji: "🔫"
    },
    {
      id: 2,
      name: "M9A3 Magazine",
      brand: "Beretta",
      price: 27.87,
      originalPrice: 34.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/CyzdmzoRTjK4pnq0FwpQ",
      fallbackEmoji: "📦"
    },
    {
      id: 3,
      name: "USA Valor 20GA 2.75\"",
      brand: "Winchester",
      price: 8.39,
      originalPrice: 12.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/TBIkru1Q2Cw2Zq7z7RB1",
      fallbackEmoji: "🎯"
    },
    {
      id: 4,
      name: "Golden Bullet High Velocity",
      brand: "Remington",
      price: 4.16,
      originalPrice: 6.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/cmqnO16QsdKfjDnJHOEg",
      fallbackEmoji: "📦"
    }
  ]

  const featuredListings = [
    {
      id: 1,
      name: "M&P10 Sport 308Win 16\"",
      brand: "Smith & Wesson",
      price: 1030.00,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi",
      fallbackEmoji: "🏹"
    },
    {
      id: 2,
      name: "RUG MINI 30BCPC 7.62X39",
      brand: "Ruger",
      price: 914.00,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/8GYMIV1TZqfWPjFXAEmA",
      fallbackEmoji: "🏹"
    },
    {
      id: 3,
      name: "MOSS 715T 22 16.25ADJ",
      brand: "Mossberg",
      price: 313.50,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/XxV1doYRKmByhOkgnGjA",
      fallbackEmoji: "🏹"
    },
    {
      id: 4,
      name: "CLT M4 CARBINE 7.62X39",
      brand: "Colt",
      price: 999.99,
      image: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/By13UZ9T7GPWbjHTo5N4",
      fallbackEmoji: "🏹"
    }
  ]

  const ProductCard = ({ product, showOriginalPrice = false }: { product: any, showOriginalPrice?: boolean }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="relative p-4">
        {showOriginalPrice && product.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            SAVE ${(product.originalPrice - product.price).toFixed(0)}
          </div>
        )}
        
        <div className="h-32 bg-gray-50 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-xl transition-transform group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `
                <div class="text-3xl">${product.fallbackEmoji}</div>
              `;
            }}
          />
        </div>
        
        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-xs text-blue-600 font-medium mb-2">{product.brand}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {showOriginalPrice && product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-1">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <button className="w-full mt-3 bg-blue-600 text-white py-2 px-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
          BUY NOW
        </button>
      </div>
    </div>
  )

  const SectionHeader = ({ title, link, icon }: { title: string, link?: string, icon?: string }) => (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {link && (
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          View All →
        </button>
      )}
    </div>
  )

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NEW TODAY Section */}
        <section className="mb-16">
          <SectionHeader title="NEW TODAY" icon="✨" link="/new-today" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {newTodayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">HANDGUN</h3>
              <h4 className="text-xl font-semibold text-yellow-400">SALE</h4>
              <p className="text-sm mt-2 opacity-90">Up to 30% Off Select Models</p>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">AMMO</h3>
              <h4 className="text-xl font-semibold text-yellow-300">SALE</h4>
              <p className="text-sm mt-2 opacity-90">Bulk Pricing Available</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">DAILY</h3>
              <h4 className="text-xl font-semibold text-yellow-300">DEALS</h4>
              <p className="text-sm mt-2 opacity-90">New Specials Every Day</p>
            </div>
          </div>
        </section>

        {/* DAILY DEALS Section */}
        <section className="mb-16">
          <SectionHeader title="DAILY DEALS" icon="🔥" link="/daily-deals" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {dailyDealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} showOriginalPrice={true} />
            ))}
          </div>
        </section>

        {/* FEATURED LISTINGS Section */}
        <section className="mb-16">
          <SectionHeader title="FEATURED LISTINGS" icon="⭐" link="/featured" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredListings.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* TOP SELLING FIREARMS Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-4">TOP SELLING</h2>
              <h3 className="text-5xl font-black text-yellow-300">FIREARMS</h3>
              <p className="text-xl mt-4 opacity-90">Most Popular Models from Verified Dealers</p>
              <button className="mt-6 bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}