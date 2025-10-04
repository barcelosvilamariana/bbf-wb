"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { useSession } from "next-auth/react";
import { formatCurrency } from "@/lib/utils";
import { ShoppingCart, Package } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    shortDescription?: string;
    image?: string;
    priceB2C: number;
    priceB2B: number;
    stock: number;
    unit: string;
    minQuantityB2B: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { data: session } = useSession();
  const addItem = useCartStore((state) => state.addItem);
  
  const userType = (session?.user as any)?.userType || "B2C";
  const price = userType === "B2B" ? product.priceB2B : product.priceB2C;
  const minQuantity = userType === "B2B" ? product.minQuantityB2B : 1;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price,
      image: product.image,
      unit: product.unit,
      quantity: minQuantity,
    });
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link href={`/produto/${product.slug}`}>
        <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/produto/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary transition line-clamp-2">
            {product.name}
          </h3>
        </Link>
        {product.shortDescription && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-2xl font-bold text-primary">
            {formatCurrency(price)}
          </span>
          <span className="text-sm text-gray-500">/{product.unit}</span>
        </div>

        {userType === "B2B" && product.priceB2C !== product.priceB2B && (
          <div className="text-xs text-gray-500 mb-2">
            Varejo: {formatCurrency(product.priceB2C)}
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
            {product.stock > 0 ? `${product.stock} em estoque` : "Sem estoque"}
          </span>
          {userType === "B2B" && minQuantity > 1 && (
            <Badge variant="secondary">Mín: {minQuantity}</Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
