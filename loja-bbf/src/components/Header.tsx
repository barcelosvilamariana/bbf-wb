"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { useSession, signOut } from "next-auth/react";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  LogOut,
  Package,
  Building2,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <Link href="https://bbf.com.br" target="_blank" className="text-gray-600 hover:text-primary">
                BBF Institucional
              </Link>
              <Link href="https://franquias.bbf.com.br" target="_blank" className="text-gray-600 hover:text-primary">
                Franquias Barcelos
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {session?.user && (
                <span className="text-gray-600">
                  Olá, {session.user.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Package className="w-8 h-8 text-primary" />
            <div>
              <div className="text-2xl font-bold text-primary">Loja BBF</div>
              <div className="text-xs text-gray-600">Atacado & Varejo</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center flex-1 mx-8">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/produtos">
              <Button variant="ghost">Produtos</Button>
            </Link>
            <Link href="/categorias">
              <Button variant="ghost">Categorias</Button>
            </Link>

            {session ? (
              <>
                <Link href="/minha-conta">
                  <Button variant="ghost">
                    <User className="w-4 h-4 mr-2" />
                    Minha Conta
                  </Button>
                </Link>
                <Button variant="ghost" onClick={() => signOut()}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Entrar</Button>
                </Link>
                <Link href="/cadastro">
                  <Button variant="outline">Cadastrar</Button>
                </Link>
              </>
            )}

            <Link href="/carrinho">
              <Button variant="outline" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Link href="/produtos" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Produtos
              </Button>
            </Link>
            <Link href="/categorias" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Categorias
              </Button>
            </Link>

            {session ? (
              <>
                <Link href="/minha-conta" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Minha Conta
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link href="/cadastro" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Cadastrar
                  </Button>
                </Link>
              </>
            )}

            <Link href="/carrinho" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full relative">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Carrinho
                {totalItems > 0 && (
                  <Badge className="ml-2">{totalItems}</Badge>
                )}
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* User Type Badge */}
      {session && (
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-gray-600">
                Você está comprando como:{" "}
                <strong className="text-primary">
                  {(session.user as any).userType === "B2B" ? "Atacado (B2B)" : "Varejo (B2C)"}
                </strong>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
