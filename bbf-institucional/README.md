# BBF - Site Institucional

Site institucional da BBF - Bracelos Brazil Foods S/A.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização moderna
- **Lucide React** - Ícones
- **Framer Motion** - Animações

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## 🌐 Acesso

Após executar `npm run dev`, acesse: http://localhost:3000

## 📁 Estrutura

```
src/
├── app/              # Páginas e rotas
├── components/       # Componentes React
│   ├── ui/          # Componentes UI reutilizáveis
│   ├── Header.tsx   # Cabeçalho
│   └── Footer.tsx   # Rodapé
└── lib/             # Utilitários
```

## 🎨 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação suave entre seções
- ✅ Links para franquias e e-commerce
- ✅ Seções: Sobre, Negócios, Sustentabilidade, Contato
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🔗 Links Externos

- **Franquias Barcelos**: https://franquias.bbf.com.br
- **E-commerce B2B/B2C**: https://loja.bbf.com.br

## 📝 Customização

Para personalizar cores, edite `src/app/globals.css` nas variáveis CSS.

## 🚢 Deploy

Recomendado: **Vercel** (deploy automático com Git)

```bash
# Ou qualquer plataforma que suporte Next.js
npm run build
npm start
```
