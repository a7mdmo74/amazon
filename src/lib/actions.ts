// https://fakestoreapiserver.reactbd.com/tech
export async function getProducts() {
  try {
    const products = await fetch(
      'https://fakestoreapiserver.reactbd.com/tech'
    ).then((res) => res.json());
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}
