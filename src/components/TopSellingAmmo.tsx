'use client'

export default function TopSellingAmmo() {
  const ammoProducts = [
    {
      id: 1,
      name: 'CCI 3746 45LC #11 SS',
      brand: 'CCI',
      price: 13.00,
      image: 'https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/XxV1doYRKmByhOkgnGjA',
      fallbackEmoji: '📦'
    },
    {
      id: 2,
      name: 'Signature 5.56x45mm 62gr SS109',
      brand: 'AMMO INCORPORATED',
      price: 10.53,
      image: 'https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/TBIkru1Q2Cw2Zq7z7RB1',
      fallbackEmoji: '📦'
    },
    {
      id: 3,
      name: 'FIO 12GA 3 1/2" 1 3/8',
      brand: 'Fiocchi',
      price: 23.21,
      image: 'https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/cmqnO16QsdKfjDnJHOEg',
      fallbackEmoji: '📦'
    },
    {
      id: 4,
      name: 'WIN WM193K 5.56/223 55',
      brand: 'Winchester',
      price: 9.55,
      image: 'https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:200,height:200/https://www.filepicker.io/api/file/8GYMIV1TZqfWPjFXAEmA',
      fallbackEmoji: '📦'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">TOP SELLING AMMO</h2>
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            VIEW ALL →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ammoProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="relative p-4">
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
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}