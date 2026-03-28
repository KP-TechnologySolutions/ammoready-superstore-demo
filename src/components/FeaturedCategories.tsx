'use client'

export default function FeaturedCategories() {
  const categories = [
    {
      name: 'Rifles',
      image: 'https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:400,height:400/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi',
      fallbackEmoji: '🏹',
      subcategories: ['AR-15', 'Bolt Action', 'Semi-Auto', 'Hunting'],
      count: '1,923'
    },
    {
      name: 'Handguns',
      image: 'https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:400,height:400/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6', 
      fallbackEmoji: '🔫',
      subcategories: ['Pistols', 'Revolvers', 'Compact', 'Full Size'],
      count: '2,847'
    },
    {
      name: 'Shotguns',
      image: 'https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:400,height:400/https://www.filepicker.io/api/file/8GYMIV1TZqfWPjFXAEmA',
      fallbackEmoji: '🎯',
      subcategories: ['Tactical', 'Hunting', 'Sport', 'Home Defense'],
      count: '856'
    },
    {
      name: 'Ammo',
      image: 'https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:400,height:400/https://www.filepicker.io/api/file/XxV1doYRKmByhOkgnGjA',
      fallbackEmoji: '📦',
      subcategories: ['Pistol', 'Rifle', 'Shotgun', 'Specialty'],
      count: '15,642'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">SHOP BY CATEGORY</h2>
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            MORE CATEGORIES
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl text-white">
                          ${category.fallbackEmoji}
                        </div>
                      `;
                    }}
                  />
                </div>
                <div className="p-4 text-center bg-white">
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{category.count} Products</p>
                  <div className="text-xs text-gray-500">
                    {category.subcategories.slice(0, 2).join(' • ')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  )
}