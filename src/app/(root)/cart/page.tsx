'use client';
import { Button } from '@/components/ui/button';
import CartItem from './CartItem';
import { useCart } from '@/context/CartContext';

import Link from 'next/link';

export default function CartPage() {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="container mx-auto px-4 py-8 min-h-72">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 max-w-7xl mx-auto">
            {cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
            <Link href="/checkout">
              <Button>Proceed to Checkout</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
