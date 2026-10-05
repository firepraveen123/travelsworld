export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR' | 'JPY' | 'AUD';

export interface CurrencyRate {
  symbol: string;
  rate: number;
}

export interface Activity {
  id: string;
  title: string;
  duration: string;
  cost: number;
  category: 'sightseeing' | 'adventure' | 'dining' | 'relaxation' | 'culture';
  image: string;
  description: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  activities: Activity[];
}

export interface TravelPackage {
  id: string;
  title: string;
  country: string;
  region: string;
  rating: number;
  reviewCount: number;
  priceUSD: number;
  discountPriceUSD?: number;
  durationDays: number;
  category: 'Luxury Escape' | 'Mountain & Lakes' | 'Cultural Heritage' | 'Tropical Paradise' | 'Safari & Wildlife' | 'Honeymoon Special';
  image: string;
  gallery: string[];
  tagline: string;
  highlights: string[];
  includedItems: string[];
  itinerary: ItineraryDay[];
  coordinates: { lat: number; lng: number };
  featured?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  destination: string;
  verified: boolean;
}
