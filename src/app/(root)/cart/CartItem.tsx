'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/Shared/Spinner';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: {
    id: string;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);
  const { removeFromCartContext } = useCart();

  const handleDeleteItem = async (id: string) => {
    setLoadingProductId(id);
    try {
      setLoadingProductId(null);
      removeFromCartContext(id);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
    console.log('Delete item', id);
  };

  return (
    <div className="flex flex-col space-y-4 border-b border-gray-200 py-4">
      <div className="flex items-center space-x-4">
        <Image
          src={item.image}
          alt={item.title}
          width={80}
          height={80}
          className="rounded-md"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <div className="flex space-x-2">
            <p className="text-gray-500 text-sm line-through">
              ${item.oldPrice.toFixed(2)}
            </p>
            <p className="text-lg font-semibold text-green-600">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <p className="text-gray-600">Category: {item.category}</p>
          <p className="text-gray-600">Quantity: {item.quantity}</p>
        </div>
        <Button
          variant="ghost"
          className="text-red-500"
          onClick={() => handleDeleteItem(item.id)}
        >
          {loadingProductId === item.id ? <Spinner /> : 'Remove'}
        </Button>
      </div>
    </div>
  );
}
