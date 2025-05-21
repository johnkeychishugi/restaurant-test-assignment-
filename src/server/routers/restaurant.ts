import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const restaurantRouter = router({
  getRestaurants: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.restaurant.findMany({
      include: {
        featured: true,
      },
    });
  }),

  addFavorite: publicProcedure
    .input(z.object({
      restaurantId: z.string(),
      isFavorite: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.restaurant.update({
        where: {
          id: input.restaurantId,
        },
        data: {
          isFavorite: input.isFavorite,
        },
      });
    }),
}); 