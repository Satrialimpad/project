// File: /lib/data/products.ts

export const categories = [
    { id: 'electronics', name: 'Elektronik' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'books', name: 'Buku' },
    { id: 'sports', name: 'Olahraga' },
    { id: 'home', name: 'Rumah Tangga' }
  ];
  
  export const products = [
    {
      id: 'iphone-14-pro',
      name: 'iPhone 14 Pro',
      price: 14999000,
      image: '/products/iphone-14-pro.jpg',
      category: 'Elektronik',
      rating: 4.8,
      stock: 10,
      description: 'iPhone 14 Pro dengan teknologi Dynamic Island, kamera 48MP, dan chip A16 Bionic'
    },
    {
      id: 'macbook-air-m2',
      name: 'MacBook Air M2',
      price: 18999000,
      image: '/products/macbook-air.jpg',
      category: 'Elektronik',
      rating: 4.9,
      stock: 15,
      description: 'MacBook Air dengan chip M2, desain baru, dan layar Liquid Retina'
    },
    {
      id: 'nike-air-zoom',
      name: 'Nike Air Zoom Pegasus',
      price: 1899000,
      image: '/products/nike-air-zoom.jpg',
      category: 'Olahraga',
      rating: 4.7,
      stock: 25,
      description: 'Sepatu lari dengan teknologi Air Zoom untuk kenyamanan maksimal'
    },
    {
      id: 'samsung-tv-4k',
      name: 'Samsung Smart TV 4K',
      price: 8999000,
      image: '/products/samsung-tv.jpg',
      category: 'Elektronik',
      rating: 4.6,
      stock: 8,
      description: 'Smart TV 4K 55 inch dengan teknologi QLED dan sistem Tizen'
    },
    {
      id: 'levis-501',
      name: 'Levi\'s 501 Original',
      price: 999000,
      image: '/products/levis-501.jpg',
      category: 'Fashion',
      rating: 4.5,
      stock: 30,
      description: 'Celana jeans klasik dengan potongan regular fit'
    },
    {
      id: 'atomic-habits',
      name: 'Atomic Habits',
      price: 199000,
      image: '/products/atomic-habits.jpg',
      category: 'Buku',
      rating: 4.9,
      stock: 50,
      description: 'Buku best seller tentang pembentukan kebiasaan baik'
    },
    {
      id: 'philips-air-fryer',
      name: 'Philips Air Fryer HD9252',
      price: 1499000,
      image: '/products/philips-airfryer.jpg',
      category: 'Rumah Tangga',
      rating: 4.7,
      stock: 12,
      description: 'Air fryer dengan teknologi Rapid Air untuk memasak sehat'
    },
    {
      id: 'uniqlo-airism',
      name: 'Uniqlo Airism T-Shirt',
      price: 199000,
      image: '/products/uniqlo-airism.jpg',
      category: 'Fashion',
      rating: 4.6,
      stock: 100,
      description: 'Kaos dengan teknologi Airism yang nyaman dan menyerap keringat'
    }
  ];