import { prisma } from '@/lib/prisma';
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

    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add item to cart' },
      { status: 500 }
    );
  }
}
