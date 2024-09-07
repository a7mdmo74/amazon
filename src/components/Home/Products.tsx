'use client';
import { ProductType } from '@/lib/types';
import React, { useState } from 'react';
import { useAuth } from '@clerk/nextjs';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';
import { useCart } from '@/context/CartContext';
type Props = {
  products: ProductType[];
};

const Products = ({ products }: Props) => {
  const { userId } = useAuth();

  const { addToCartContext } = useCart();

  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);
  const handleAddToCart = async (
    productId: string,
    title: string,
    description: string,
    price: number,
    oldPrice: number,
    isNew: boolean,
    category: string,
    image: string
  ) => {
    setLoadingProductId(productId);

    try {
      addToCartContext({
        id: productId,
        title,
        description,
        price,
        oldPrice,
        isNew,
        category,
        image,
      });
      await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          title,
          description,
          price,
          oldPrice,
          isNew,
          category,
          image,
          userId,
        }),
      });

      toast.success('Product added to cart', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      toast.error('Failed to add product to cart', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } finally {
      setLoadingProductId(null);
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
      {products.map((product: ProductType) => {
        const {
          category,
          description,
          image,
          id,
          isNew,
          oldPrice,
          price,
          title,
        } = product;
        return (
          <Card key={id} className="flex flex-col justify-between h-full group">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2">
                  {title}
                </CardTitle>
                {isNew && (
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    New
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-3">
                {description}
              </p>
              <p className="text-base sm:text-lg font-bold">
                ${price.toFixed(2)}
                {oldPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${oldPrice.toFixed(2)}
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-600">Category: {category}</p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() =>
                  handleAddToCart(
                    id,
                    title,
                    description,
                    price,
                    oldPrice,
                    isNew,
                    category,
                    image
                  )
                }
                disabled={loadingProductId === id}
              >
                {loadingProductId === id ? <Spinner /> : 'Add to cart'}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
