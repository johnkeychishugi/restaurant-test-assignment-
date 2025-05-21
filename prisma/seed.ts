import { PrismaClient, StoreCategory } from '../src/generated/prisma';

const prisma = new PrismaClient();

const mockData = [
  {
    rating: 4.2,
    ratingCount: 139,
    category: StoreCategory.YAKITORI,
    city: 'osaka',
    description: 'Enjoy the highest quality Omakase with unlimited sake at a reasonable price.',
    images: [
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2940&auto=format&fit=crop'
    ],
    name: 'Kagurazaka Ishikawa Sushi Haru Nakanoshima Sushi',
    priceRange: '3~5',
    isFavorite: true,
    featured: {
      text: 'Top Yakitori Restaurant in Nakanoshima',
      icon: 'stars-02'
    }
  },
  {
    rating: 4.5,
    ratingCount: 200,
    category: StoreCategory.SUSHI,
    city: 'tokyo',
    description: 'Provides fresh seafood and authentic sushi.',
    images: [
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2940&auto=format&fit=crop'
    ],
    name: 'Sushi Ginza Ishikawa',
    priceRange: '4~6',
    isFavorite: false,
    featured: {
      text: 'Top Sushi Restaurant in Tokyo',
      icon: 'stars-02'
    }
  },
  {
    rating: 4.7,
    ratingCount: 180,
    category: StoreCategory.RAMEN,
    city: 'kyoto',
    description: 'Rich broth with a variety of toppings.',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2940&auto=format&fit=crop'
    ],
    name: 'Ichiran Ramen',
    priceRange: '2~4',
    isFavorite: true,
    featured: {
      text: "Kyoto's Famous Ramen Spot",
      icon: 'stars-02'
    }
  },
  {
    rating: 4.3,
    ratingCount: 220,
    category: StoreCategory.TEMPURA,
    city: 'nagoya',
    description: 'Crispy and delicious tempura.',
    images: [
      'https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=2940&auto=format&fit=crop'
    ],
    name: 'Tempura Matsuya',
    priceRange: '3~5',
    isFavorite: false,
    featured: {
      text: 'Best Tempura in Nagoya',
      icon: 'stars-02'
    }
  },
  {
    rating: 4.6,
    ratingCount: 190,
    category: StoreCategory.SOBA,
    city: 'fukuoka',
    description: 'Chewy noodles with rich broth.',
    images: [
      'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=2940&auto=format&fit=crop'
    ],
    name: 'Udon Taro',
    priceRange: '2~4',
    isFavorite: true,
    featured: {
      text: "Fukuoka's Best Udon Restaurant",
      icon: 'stars-02'
    }
  }
];

async function main() {
  console.log('Start seeding...');

  // Clear existing data
  await prisma.featured.deleteMany();
  await prisma.restaurant.deleteMany();

  for (const restaurantData of mockData) {
    const { featured, ...restaurant } = restaurantData;
    const createdRestaurant = await prisma.restaurant.create({
      data: {
        ...restaurant,
        featured: {
          create: featured
        }
      }
    });
    console.log(`Created restaurant with id: ${createdRestaurant.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 