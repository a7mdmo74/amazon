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
