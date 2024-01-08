export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
}