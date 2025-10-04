"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">BBF</div>
            <div className="hidden md:block text-sm text-gray-600">
              Bracelos Brazil Foods S/A
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#sobre" className="text-gray-700 hover:text-primary transition">
              Sobre
            </Link>
            <Link href="#negocios" className="text-gray-700 hover:text-primary transition">
              Negócios
            </Link>
            <Link href="#sustentabilidade" className="text-gray-700 hover:text-primary transition">
              Sustentabilidade
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-primary transition">
              Contato
            </Link>
            <Link href="https://franquias.bbf.com.br" target="_blank">
              <Button variant="outline">Franquias Barcelos</Button>
            </Link>
            <Link href="https://loja.bbf.com.br" target="_blank">
              <Button>Área de Vendas</Button>
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
            <Link
              href="#sobre"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#negocios"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Negócios
            </Link>
            <Link
              href="#sustentabilidade"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sustentabilidade
            </Link>
            <Link
              href="#contato"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="space-y-2">
              <Link href="https://franquias.bbf.com.br" target="_blank" className="block">
                <Button variant="outline" className="w-full">
                  Franquias Barcelos
                </Button>
              </Link>
              <Link href="https://loja.bbf.com.br" target="_blank" className="block">
                <Button className="w-full">Área de Vendas</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
