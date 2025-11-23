import { Salon } from './types';

export const MOCK_SALONS: Salon[] = [
  {
    id: '1',
    name: 'Raju Haircut Salon',
    ownerName: 'Raju',
    photoUrl: 'https://picsum.photos/400/300',
    address: 'Gali No. 3, Market Road',
    rating: 4.5,
    reviewCount: 230,
    distance: '350m away',
    isOpen: true,
    queueCount: 3,
    estimatedWaitMinutes: 12,
    services: [
      { id: 's1', name: 'Haircut', price: 30 },
      { id: 's2', name: 'Shaving', price: 20 },
      { id: 's3', name: 'Head Massage', price: 50 },
    ],
    facilities: ['AC', 'WiFi', 'TV', 'Water']
  },
  {
    id: '2',
    name: 'Lucky Men\'s Parlour',
    ownerName: 'Lucky',
    photoUrl: 'https://picsum.photos/401/300',
    address: 'Main Chowk, Sector 4',
    rating: 4.2,
    reviewCount: 120,
    distance: '800m away',
    isOpen: false,
    queueCount: 0,
    estimatedWaitMinutes: 0,
    services: [
        { id: 's1', name: 'Haircut', price: 40 },
        { id: 's2', name: 'Beard Trim', price: 30 },
      ],
      facilities: ['AC', 'Music']
  },
  {
    id: '3',
    name: 'Style Studio',
    ownerName: 'Aman',
    photoUrl: 'https://picsum.photos/402/300',
    address: 'High Street Mall',
    rating: 4.8,
    reviewCount: 500,
    distance: '1.2km away',
    isOpen: true,
    queueCount: 8,
    estimatedWaitMinutes: 45,
    services: [
        { id: 's1', name: 'Haircut', price: 100 },
        { id: 's2', name: 'Facial', price: 200 },
      ],
      facilities: ['AC', 'WiFi', 'Coffee']
  }
];
