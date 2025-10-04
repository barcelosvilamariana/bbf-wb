# Franquias Barcelos - Site de Vendas

Site dedicado à venda de franquias Barcelos pela BBF.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento (porta 3001)
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## 🌐 Acesso

Após executar `npm run dev`, acesse: http://localhost:3001

## 🎨 Funcionalidades

- ✅ Apresentação completa da franquia Barcelos
- ✅ Informações de investimento (2 modelos)
- ✅ Formulário de interesse com validação
- ✅ Processo passo a passo
- ✅ Vantagens e benefícios
- ✅ Design responsivo
- ✅ SEO otimizado

## 📋 Formulário de Interesse

O formulário coleta:
- Dados pessoais (nome, email, telefone)
- Localização (cidade, estado)
- Capital disponível
- Experiência no setor
- Mensagem adicional

**Nota**: Atualmente o formulário simula o envio. Para produção, integre com:
- API backend para salvar no banco de dados
- Serviço de email (SendGrid, AWS SES, etc.)
- CRM (HubSpot, Salesforce, etc.)

## 🔧 Customização

### Cores
Edite `src/app/globals.css` para alterar o tema (vermelho Barcelos).

### Valores de Investimento
Edite `src/app/page.tsx` na seção "Investment Details".

### Formulário
Edite `src/components/FranchiseForm.tsx` para adicionar campos ou integrar com API.

## 🚢 Deploy

Recomendado: **Vercel**

```bash
npm run build
npm start
```

## 📧 Integração de Email

Para produção, adicione em `src/components/FranchiseForm.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/franchise-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response
};
```
