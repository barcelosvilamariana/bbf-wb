import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  Shield,
  CreditCard,
  Headphones,
  TrendingUp,
  Users,
  Package,
} from "lucide-react";
import Link from "next/link";

// Mock data - Em produção, buscar do banco de dados
const featuredProducts = [
  {
    id: "1",
    name: "Arroz Tipo 1 - Saco 5kg",
    slug: "arroz-tipo-1-5kg",
    shortDescription: "Arroz branco tipo 1, grãos longos e soltos",
    image: undefined,
    priceB2C: 25.90,
    priceB2B: 22.50,
    stock: 150,
    unit: "UN",
    minQuantityB2B: 10,
  },
  {
    id: "2",
    name: "Feijão Preto - Pacote 1kg",
    slug: "feijao-preto-1kg",
    shortDescription: "Feijão preto selecionado, alta qualidade",
    image: undefined,
    priceB2C: 8.90,
    priceB2B: 7.50,
    stock: 200,
    unit: "UN",
    minQuantityB2B: 20,
  },
  {
    id: "3",
    name: "Óleo de Soja - 900ml",
    slug: "oleo-soja-900ml",
    shortDescription: "Óleo de soja refinado, ideal para cozinhar",
    image: undefined,
    priceB2C: 6.90,
    priceB2B: 5.80,
    stock: 300,
    unit: "UN",
    minQuantityB2B: 12,
  },
  {
    id: "4",
    name: "Açúcar Cristal - 1kg",
    slug: "acucar-cristal-1kg",
    shortDescription: "Açúcar cristal de primeira qualidade",
    image: undefined,
    priceB2C: 4.50,
    priceB2B: 3.80,
    stock: 250,
    unit: "UN",
    minQuantityB2B: 30,
  },
  {
    id: "5",
    name: "Macarrão Espaguete - 500g",
    slug: "macarrao-espaguete-500g",
    shortDescription: "Massa de sêmola de trigo, cozimento perfeito",
    image: undefined,
    priceB2C: 3.90,
    priceB2B: 3.20,
    stock: 180,
    unit: "UN",
    minQuantityB2B: 24,
  },
  {
    id: "6",
    name: "Café Torrado e Moído - 500g",
    slug: "cafe-torrado-moido-500g",
    shortDescription: "Café premium, torrado e moído na hora",
    image: undefined,
    priceB2C: 18.90,
    priceB2B: 16.50,
    stock: 120,
    unit: "UN",
    minQuantityB2B: 12,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Distribuição de Alimentos
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Atacado e Varejo com os melhores preços e qualidade garantida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cadastro">
                <Button size="lg" className="w-full sm:w-auto">
                  Cadastre-se Grátis
                </Button>
              </Link>
              <Link href="/produtos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Todos os Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-sm text-gray-600">
                Entregamos em todo Brasil
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-sm text-gray-600">
                Produtos certificados
              </p>
            </div>
            <div className="text-center">
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Pagamento Flexível</h3>
              <p className="text-sm text-gray-600">
                Várias formas de pagamento
              </p>
            </div>
            <div className="text-center">
              <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Suporte Dedicado</h3>
              <p className="text-sm text-gray-600">
                Atendimento especializado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-lg text-gray-600">
              Confira nossa seleção de produtos mais vendidos
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/produtos">
              <Button size="lg">Ver Todos os Produtos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Compre no Atacado
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Preços especiais para empresas, restaurantes e revendedores.
                  Cadastre-se como cliente B2B e aproveite condições exclusivas.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Preços diferenciados para grandes volumes</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Atendimento personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <Package className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Logística eficiente e pontual</span>
                  </li>
                </ul>
                <Link href="/cadastro">
                  <Button size="lg">Cadastrar Empresa</Button>
                </Link>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Vantagens B2B</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold">Desconto Médio:</span>
                    <span className="text-2xl font-bold text-primary">15-25%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold">Prazo de Pagamento:</span>
                    <span className="text-2xl font-bold text-primary">Até 30 dias</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold">Frete Grátis:</span>
                    <span className="text-2xl font-bold text-primary">Acima R$ 500</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Loja BBF</h3>
              <p className="text-gray-400">
                Distribuição de alimentos de qualidade para todo o Brasil.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/produtos" className="text-gray-400 hover:text-primary transition">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href="/categorias" className="text-gray-400 hover:text-primary transition">
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="text-gray-400 hover:text-primary transition">
                    Sobre Nós
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Grupo BBF</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://bbf.com.br" target="_blank" className="text-gray-400 hover:text-primary transition">
                    BBF Institucional
                  </Link>
                </li>
                <li>
                  <Link href="https://franquias.bbf.com.br" target="_blank" className="text-gray-400 hover:text-primary transition">
                    Franquias Barcelos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-gray-400">Email: vendas@bbf.com.br</p>
              <p className="text-gray-400">Tel: +55 (11) 0000-0000</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BBF - Bracelos Brazil Foods S/A. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
