"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Store, 
  Truck, 
  Users, 
  Award, 
  Leaf,
  TrendingUp,
  Globe,
  ShoppingCart,
  ChefHat
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              BBF - Bracelos Brazil Foods S/A
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Excelência em distribuição de alimentos e franquias Barcelos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://franquias.bbf.com.br" target="_blank">
                <Button size="lg" className="w-full sm:w-auto">
                  <ChefHat className="mr-2" size={20} />
                  Seja um Franqueado Barcelos
                </Button>
              </Link>
              <Link href="https://loja.bbf.com.br" target="_blank">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <ShoppingCart className="mr-2" size={20} />
                  Compre no Atacado/Varejo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Franquias Barcelos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Produtos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-gray-600">Clientes Ativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sobre a BBF</h2>
            <p className="text-lg text-gray-600">
              A BBF - Bracelos Brazil Foods S/A é uma empresa líder no setor alimentício brasileiro, 
              atuando em três frentes estratégicas: franquias Barcelos, distribuição atacadista e 
              vendas no varejo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fornecer alimentos de qualidade superior e expandir a marca Barcelos, 
                  criando valor para franqueados, clientes e parceiros.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser referência nacional em distribuição de alimentos e a maior rede de 
                  franquias Barcelos da América Latina.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Qualidade, inovação, sustentabilidade, ética e compromisso com a 
                  excelência no atendimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Units Section */}
      <section id="negocios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossas Unidades de Negócio</h2>
            <p className="text-lg text-gray-600">
              Três pilares estratégicos para atender todo o mercado alimentício
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Franquias */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ChefHat className="w-16 h-16 text-primary mb-4" />
                <CardTitle>Franquias Barcelos</CardTitle>
                <CardDescription>Rede de restaurantes premium</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Seja parte da maior rede de franquias Barcelos do Brasil. Modelo de 
                  negócio comprovado, suporte completo e marca consolidada.
                </p>
                <Link href="https://franquias.bbf.com.br" target="_blank">
                  <Button className="w-full">Saiba Mais</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Atacado */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-16 h-16 text-primary mb-4" />
                <CardTitle>Distribuição Atacado</CardTitle>
                <CardDescription>Soluções B2B completas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Fornecimento em grande escala para restaurantes, supermercados e 
                  distribuidores. Logística eficiente e preços competitivos.
                </p>
                <Link href="https://loja.bbf.com.br" target="_blank">
                  <Button className="w-full">Comprar no Atacado</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Varejo */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Store className="w-16 h-16 text-primary mb-4" />
                <CardTitle>Vendas Varejo</CardTitle>
                <CardDescription>Produtos para consumidor final</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Loja online com amplo catálogo de produtos alimentícios de qualidade 
                  para entrega em todo o Brasil.
                </p>
                <Link href="https://loja.bbf.com.br" target="_blank">
                  <Button className="w-full">Comprar no Varejo</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustentabilidade" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Leaf className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Sustentabilidade</h2>
              <p className="text-lg text-gray-600">
                Compromisso com o futuro do planeta e das próximas gerações
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Práticas Sustentáveis</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Fornecedores certificados e rastreáveis</li>
                  <li>✓ Redução de desperdício em toda cadeia</li>
                  <li>✓ Embalagens recicláveis e biodegradáveis</li>
                  <li>✓ Logística verde e eficiente</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Responsabilidade Social</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Geração de empregos locais</li>
                  <li>✓ Programas de capacitação profissional</li>
                  <li>✓ Apoio a comunidades locais</li>
                  <li>✓ Doação de alimentos para instituições</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos prontos para atender você. Escolha a melhor forma de contato:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Franquias Barcelos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Interessado em abrir uma franquia?
                  </p>
                  <Link href="https://franquias.bbf.com.br" target="_blank">
                    <Button className="w-full">Fale Conosco</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vendas B2B/B2C</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Dúvidas sobre produtos ou pedidos?
                  </p>
                  <Link href="https://loja.bbf.com.br" target="_blank">
                    <Button className="w-full">Atendimento</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Contato Geral</h3>
              <p className="text-gray-600">Email: contato@bbf.com.br</p>
              <p className="text-gray-600">Telefone: +55 (11) 0000-0000</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
