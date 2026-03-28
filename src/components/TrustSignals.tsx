import { ShieldCheckIcon, ClockIcon, TruckIcon, StarIcon } from '@heroicons/react/24/outline'

export default function TrustSignals() {
  const signals = [
    {
      icon: ShieldCheckIcon,
      title: "Verified Dealers Only",
      description: "Every seller is licensed, verified, and rated by our community"
    },
    {
      icon: ClockIcon,
      title: "Real-Time Inventory",
      description: "Live stock levels updated every 15 minutes across all dealers"
    },
    {
      icon: TruckIcon,
      title: "Fast Fulfillment",
      description: "Direct shipping from local dealers for faster delivery"
    },
    {
      icon: StarIcon,
      title: "Best Price Guarantee",
      description: "Compare prices across 1,800+ dealers to find the best deals"
    }
  ]

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose AmmoReady Superstore?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most trusted marketplace in firearms commerce, 
            connecting you with America's top dealers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <signal.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {signal.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">1,800+</div>
              <div className="text-sm text-gray-600">Verified Dealers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">50,000+</div>
              <div className="text-sm text-gray-600">Live Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">99.8%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}