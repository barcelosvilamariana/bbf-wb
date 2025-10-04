"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FranchiseForm from "@/components/FranchiseForm";
import {
  ChefHat,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  Clock,
  MapPin,
  CheckCircle,
  Building2,
  Utensils,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-primary" />
              <div>
                <div className="text-xl font-bold text-primary">Franquias Barcelos</div>
                <div className="text-xs text-gray-600">by BBF</div>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="https://bbf.com.br" target="_blank">
                <Button variant="outline">BBF Institucional</Button>
              </Link>
              <a href="#formulario">
                <Button>Quero Ser Franqueado</Button>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Seja um Franqueado Barcelos
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Invista em uma marca consolidada e lucrativa no mercado brasileiro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#formulario">
                <Button size="lg" className="w-full sm:w-auto">
                  Solicitar Informações
                </Button>
              </a>
              <a href="#vantagens">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Conhecer Vantagens
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Franquias Ativas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24-36</div>
              <div className="text-gray-600">Meses ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Barcelos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por Que Barcelos?</h2>
            <p className="text-lg text-gray-600">
              Uma marca consolidada com modelo de negócio comprovado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Marca Consolidada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Marca portuguesa reconhecida mundialmente, com presença em mais de 
                  20 países e forte posicionamento no Brasil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Alta Lucratividade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Modelo de negócio testado e aprovado, com margens atrativas e 
                  retorno sobre investimento entre 24 e 36 meses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HeartHandshake className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Suporte Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acompanhamento desde a implantação até a operação, com treinamento 
                  contínuo e suporte de marketing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section id="investimento" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Investimento</h2>
            <p className="text-lg text-gray-600">
              Informações sobre o investimento necessário
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary">
              <CardHeader>
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Loja Tradicional</CardTitle>
                <CardDescription>Restaurante completo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Investimento Total:</span>
                  <span className="font-bold text-lg">R$ 450.000 - R$ 650.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxa de Franquia:</span>
                  <span className="font-bold">R$ 50.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Royalties:</span>
                  <span className="font-bold">5% faturamento</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Área Mínima:</span>
                  <span className="font-bold">150m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Prazo Implantação:</span>
                  <span className="font-bold">4-6 meses</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Utensils className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Quiosque</CardTitle>
                <CardDescription>Modelo compacto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Investimento Total:</span>
                  <span className="font-bold text-lg">R$ 250.000 - R$ 350.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxa de Franquia:</span>
                  <span className="font-bold">R$ 35.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Royalties:</span>
                  <span className="font-bold">5% faturamento</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Área Mínima:</span>
                  <span className="font-bold">40m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Prazo Implantação:</span>
                  <span className="font-bold">2-3 meses</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vantagens" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Vantagens do Franqueado</h2>
            <p className="text-lg text-gray-600">
              O que você recebe ao se tornar um franqueado Barcelos
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Treinamento Completo</h3>
                <p className="text-gray-600">
                  Capacitação inicial e contínua para você e sua equipe em todas as 
                  áreas operacionais.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Suporte de Marketing</h3>
                <p className="text-gray-600">
                  Campanhas nacionais, materiais promocionais e estratégias de 
                  marketing digital.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Fornecedores Homologados</h3>
                <p className="text-gray-600">
                  Rede de fornecedores certificados com preços negociados e qualidade 
                  garantida.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Consultoria Operacional</h3>
                <p className="text-gray-600">
                  Acompanhamento constante com consultores especializados para 
                  otimizar resultados.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Projeto Arquitetônico</h3>
                <p className="text-gray-600">
                  Layout padronizado e otimizado para maximizar eficiência e 
                  experiência do cliente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Sistema de Gestão</h3>
                <p className="text-gray-600">
                  Software completo para controle de estoque, vendas, finanças e 
                  relatórios gerenciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-gray-600">
              Processo simples e transparente para se tornar um franqueado
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Cadastro Inicial",
                  description: "Preencha o formulário de interesse e nossa equipe entrará em contato.",
                },
                {
                  step: "02",
                  title: "Análise de Perfil",
                  description: "Avaliamos seu perfil e apresentamos informações detalhadas sobre a franquia.",
                },
                {
                  step: "03",
                  title: "Visita e Conhecimento",
                  description: "Conheça unidades em operação e participe de reuniões com nossa equipe.",
                },
                {
                  step: "04",
                  title: "Aprovação e Contrato",
                  description: "Análise financeira, aprovação e assinatura do contrato de franquia.",
                },
                {
                  step: "05",
                  title: "Implantação",
                  description: "Suporte completo na escolha do ponto, projeto e montagem da unidade.",
                },
                {
                  step: "06",
                  title: "Treinamento",
                  description: "Capacitação completa para você e sua equipe antes da inauguração.",
                },
                {
                  step: "07",
                  title: "Inauguração",
                  description: "Abertura da sua franquia com suporte total da equipe BBF.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="formulario" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Solicite Mais Informações</h2>
            <p className="text-lg text-gray-600">
              Preencha o formulário e dê o primeiro passo para ser um franqueado Barcelos
            </p>
          </div>
          <FranchiseForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Franquias Barcelos</h3>
              <p className="text-gray-400">
                Parte do grupo BBF - Bracelos Brazil Foods S/A
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://bbf.com.br" target="_blank" className="text-gray-400 hover:text-primary transition">
                    BBF Institucional
                  </Link>
                </li>
                <li>
                  <Link href="https://loja.bbf.com.br" target="_blank" className="text-gray-400 hover:text-primary transition">
                    Loja BBF
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-gray-400">Email: franquias@bbf.com.br</p>
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
