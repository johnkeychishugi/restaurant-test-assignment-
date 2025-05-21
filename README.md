# Restaurant Listing Application

A modern restaurant listing application built with Next.js, TypeScript, tRPC, and Prisma, featuring a beautiful UI and powerful search functionality.

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **API Layer**: tRPC
- **Database**: PostgreSQL with Prisma ORM
- **Image Handling**: Next.js Image Component

## Features

- 🔍 Real-time search functionality
- 📑 Category-based filtering
- ⭐ Restaurant ratings and reviews
- 💟 Favorite restaurant functionality
- 📱 Responsive grid layout
- 🖼️ High-quality restaurant images
- 🏷️ Price range indicators
- 📍 City-based filtering

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- PNPM (recommended) or NPM

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd restaurant-test
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```
Update the `.env` file with your PostgreSQL connection string.

4. Initialize the database:
```bash
pnpm prisma db push
pnpm prisma generate
```

5. Seed the database:
```bash
pnpm prisma db seed
```

6. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Database Schema

The application uses a PostgreSQL database with the following main entities:
- Restaurants (with details like name, rating, category, images)
- Featured Items (special promotions or highlights)
- Categories (types of restaurants)