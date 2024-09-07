import { prisma } from './prisma';

export async function getProducts() {
  try {
    const products = await prisma.products.findMany({});

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    });

    return product;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}

export const addToCart = async (
  title: string,
  isNew: boolean,
  price: number,
  oldPrice: number,
  description: string,
  category: string,
  image: string,
  userId: string
) => {
  try {
    const cart = await prisma.cart.create({
      data: {
        title,
        isNew,
        oldPrice,
        price,
        description,
        category,
        image,
        userId,
      },
    });

    return cart;
  } catch (error) {
    throw new Error('Failed to add to cart');
  }
};

// export const removeFromCart = async (id: string) => {
//   try {
//     const cart = await prisma.cart.delete({
//       where: {
//         id,
//       },
//     });

//     return cart;
//   } catch (error) {
//     throw new Error('Failed to remove from cart');
//   }
// };

// export const getItemsInCart = async (userId: string) => {
//   try {
//     const cart = await prisma.cart.findMany({
//       where: {
//         userId,
//       },
//     });

//     return cart;
//   } catch (error) {
//     throw new Error('Failed to fetch cart');
//   }
// };
