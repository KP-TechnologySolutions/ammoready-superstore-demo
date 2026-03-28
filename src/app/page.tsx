'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedCategories from '@/components/FeaturedCategories'
import MarketplaceSections from '@/components/MarketplaceSections'
import TopSellingAmmo from '@/components/TopSellingAmmo'
import ProductGrid from '@/components/ProductGrid'
import TrustSignals from '@/components/TrustSignals'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <TrustSignals />
      <MarketplaceSections />
      <TopSellingAmmo />
      <FeaturedCategories />
      <ProductGrid />
      <Footer />
    </main>
  )
}