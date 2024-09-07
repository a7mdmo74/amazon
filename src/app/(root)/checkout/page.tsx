'use client';
import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useCart } from '@/context/CartContext';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import CheckoutPage from '@/components/Checkout';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const { getTotalPrice } = useCart();
  //eslint-disable-next-line
  const [amount, setAmount] = useState(getTotalPrice());

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Checkout
          </h2>
          <Elements
            stripe={stripePromise}
            options={{
              mode: 'payment',
              amount: convertToSubcurrency(amount),
              currency: 'usd',
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
