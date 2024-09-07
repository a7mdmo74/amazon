import { addToCart } from '@/lib/actions';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {
      category,
      description,
      image,
      isNew,
      oldPrice,
      price,
      title,
      userId,
    } = await request.json();
    const result = await addToCart(
      title,
      isNew,
      oldPrice,
      price,
      description,
      category,
      image,
      userId
    );
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add item to cart' },
      { status: 500 }
    );
  }
}

// export async function DELETE(request: Request) {
//   try {
//     const { id } = await request.json();
//     const result = await removeFromCart(id);
//     return NextResponse.json(result, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to remove item from cart' },
//       { status: 500 }
//     );
//   }
// }
