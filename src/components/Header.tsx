'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32 py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/images/finallogo.png" 
              alt="AmmoReady Superstore" 
              className="h-40 w-auto max-w-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="text-2xl font-black text-gray-800">AmmoReady</div>
                  <div class="text-xs text-gray-600 ml-2 hidden sm:block font-semibold tracking-wider uppercase">Superstore</div>
                `;
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <a href="/categories" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-semibold rounded-xl transition-all">
              Categories
            </a>
            <a href="/stores" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-semibold rounded-xl transition-all">
              Dealers
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-semibold rounded-xl transition-all">
              Ammunition
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-semibold rounded-xl transition-all">
              Optics
            </a>
            <a href="/features/daily-deals" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-semibold rounded-xl transition-all relative">
              Deals
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden lg:block">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search firearms, ammo, accessories..."
                className="w-full px-6 py-3 pl-12 pr-6 text-gray-700 bg-gray-50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all font-medium placeholder:text-gray-400"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle */}
            <button className="lg:hidden p-2 text-gray-400 hover:text-gray-500">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            
            {/* Account */}
            <button className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl transition-all">
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Account</span>
            </button>

            {/* Cart */}
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl transition-all relative">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="hidden sm:block text-sm font-medium">Cart</span>
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search firearms, ammo, accessories..."
              className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/categories" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              Categories
            </a>
            <a href="/stores" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              Dealers
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              Ammunition
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              Optics
            </a>
            <a href="/features/daily-deals" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              Deals
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 sm:hidden">
              Account
            </a>
          </div>
        </div>
      )}
    </header>
  )
}