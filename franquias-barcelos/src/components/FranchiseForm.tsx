"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export default function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    capitalDisponivel: "",
    experiencia: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você implementaria o envio para API/email
    console.log("Dados do formulário:", formData);
    
    // Simular envio
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-12 pb-12 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Formulário Enviado!</h3>
          <p className="text-gray-600 mb-6">
            Obrigado pelo seu interesse em se tornar um franqueado Barcelos. 
            Nossa equipe entrará em contato em breve.
          </p>
          <Button onClick={() => setSubmitted(false)}>
            Enviar Outro Formulário
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Quero Ser um Franqueado</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo e nossa equipe entrará em contato
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo *</Label>
              <Input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                name="telefone"
                type="tel"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(11) 99999-9999"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cidade">Cidade *</Label>
              <Input
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
                placeholder="Sua cidade"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="estado">Estado *</Label>
              <Select
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              >
                <option value="">Selecione...</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="capitalDisponivel">Capital Disponível *</Label>
              <Select
                id="capitalDisponivel"
                name="capitalDisponivel"
                value={formData.capitalDisponivel}
                onChange={handleChange}
                required
              >
                <option value="">Selecione...</option>
                <option value="100-300k">R$ 100.000 - R$ 300.000</option>
                <option value="300-500k">R$ 300.000 - R$ 500.000</option>
                <option value="500k-1m">R$ 500.000 - R$ 1.000.000</option>
                <option value="1m+">Acima de R$ 1.000.000</option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experiencia">Experiência no Setor *</Label>
            <Select
              id="experiencia"
              name="experiencia"
              value={formData.experiencia}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="nenhuma">Nenhuma experiência</option>
              <option value="restaurante">Experiência em restaurantes</option>
              <option value="franquia">Já tenho franquia(s)</option>
              <option value="alimenticio">Experiência no setor alimentício</option>
              <option value="outro">Outro setor</option>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Conte-nos mais sobre seu interesse..."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Enviar Solicitação
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Ao enviar este formulário, você concorda com nossa política de privacidade
            e autoriza o contato de nossa equipe.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
