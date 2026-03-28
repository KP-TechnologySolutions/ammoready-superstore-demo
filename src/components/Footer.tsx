export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              AmmoReady Superstore
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              America's most advanced firearms marketplace, 
              connecting you with 1,800+ verified dealers nationwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                📘
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                🐦
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                📸
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                📺
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Shop Categories</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Handguns</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Rifles</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Shotguns</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Ammunition</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Optics</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Accessories</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Support</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Order Tracking</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Returns & Exchanges</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">FFL Dealer Locator</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Shipping Info</a>
            </div>
          </div>

          {/* Account & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Account & Legal</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">My Account</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Dealer Portal</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Compliance</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Age Verification</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  🔒
                </div>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  🛡️
                </div>
                <span>PCI Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>FFL Verified</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2026 AmmoReady Superstore. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by AmmoReady Platform
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Important:</strong> All firearms must be shipped to a licensed FFL dealer. 
            You must be 18+ to purchase ammunition and 21+ to purchase handguns. 
            By using this site, you certify that you are legally eligible to purchase firearms and ammunition 
            in your state of residence and that you will comply with all federal, state, and local laws.
          </p>
        </div>
      </div>
    </footer>
  )
}