export interface Category {
    id: string;
    name: string;
    imageUrl: string;
    slug: string;
    description?: string;
  }
  
  export interface CategorySection {
    title?: string;
    categories: Category[];
  }
  
  // Enum untuk memudahkan pengelompokan kategori
  export enum CategoryGroup {
    ELECTRONICS = 'electronics',
    FASHION = 'fashion',
    HEALTH = 'health',
    HOBBY = 'hobby',
    FOOD = 'food',
    BEAUTY = 'beauty',
    HOME = 'home',
    AUTOMOTIVE = 'automotive',
  }
  
  // Type untuk memastikan slug yang valid
  export type CategorySlug = 
    | 'elektronik'
    | 'komputer-aksesoris'
    | 'handphone-aksesoris'
    | 'pakaian-pria'
    | 'sepatu-pria'
    | 'tas-pria'
    | 'aksesoris-fashion'
    | 'jam-tangan'
    | 'kesehatan'
    | 'hobi-koleksi'
    | 'makanan-minuman'
    | 'perawatan-kecantikan'
    | 'perlengkapan-rumah'
    | 'pakaian-wanita'
    | 'fashion-muslim'
    | 'fashion-bayi-anak'
    | 'ibu-bayi'
    | 'sepatu-wanita'
    | 'tas-wanita'
    | 'otomotif';