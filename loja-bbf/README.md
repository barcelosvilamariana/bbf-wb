# Loja BBF - E-commerce B2B/B2C

Plataforma completa de e-commerce para distribuição de alimentos no atacado (B2B) e varejo (B2C).

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados
- **NextAuth.js** - Autenticação
- **Zustand** - Gerenciamento de estado (carrinho)
- **TailwindCSS** - Estilização
- **Bcrypt** - Hash de senhas

## 📦 Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar banco de dados

Crie um arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

Edite o `.env` com suas configurações:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/loja_bbf"
NEXTAUTH_URL="http://localhost:3002"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 3. Executar migrações do Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4. (Opcional) Popular banco com dados de exemplo

```bash
npx prisma db seed
```

### 5. Executar em desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3002

## 🗄️ Estrutura do Banco de Dados

### Modelos Principais

- **User** - Usuários (B2C e B2B)
- **Product** - Produtos
- **Category** - Categorias
- **Order** - Pedidos
- **OrderItem** - Itens do pedido
- **CartItem** - Itens no carrinho

### Tipos de Usuário

- **B2C** - Pessoa física (varejo)
- **B2B** - Pessoa jurídica (atacado)
- **ADMIN** - Administrador

## 🎨 Funcionalidades

### Autenticação
- ✅ Cadastro de usuários B2C e B2B
- ✅ Login com email e senha
- ✅ Sessões com NextAuth
- ✅ Proteção de rotas

### Catálogo
- ✅ Listagem de produtos
- ✅ Filtro por categorias
- ✅ Busca de produtos
- ✅ Preços diferenciados B2B/B2C
- ✅ Quantidade mínima para B2B

### Carrinho
- ✅ Adicionar/remover produtos
- ✅ Atualizar quantidades
- ✅ Persistência local (Zustand)
- ✅ Cálculo de totais

### Checkout
- ✅ Resumo do pedido
- ✅ Endereço de entrega
- ✅ Métodos de pagamento
- ✅ Finalização de pedido

### Área do Cliente
- ✅ Histórico de pedidos
- ✅ Dados cadastrais
- ✅ Endereços salvos

## 📁 Estrutura de Pastas

```
src/
├── app/                    # Páginas Next.js
│   ├── api/               # API Routes
│   │   └── auth/         # Autenticação
│   ├── cadastro/         # Página de cadastro
│   ├── carrinho/         # Página do carrinho
│   ├── login/            # Página de login
│   └── page.tsx          # Home
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base
│   ├── Header.tsx        # Cabeçalho
│   └── ProductCard.tsx   # Card de produto
├── lib/                  # Utilitários
│   ├── prisma.ts        # Cliente Prisma
│   └── utils.ts         # Funções auxiliares
└── store/               # Stores Zustand
    └── cartStore.ts     # Store do carrinho
```

## 🔐 Autenticação

O sistema usa NextAuth.js com provider de credenciais:

```typescript
// Login
const result = await signIn("credentials", {
  email: "user@example.com",
  password: "password",
});

// Logout
await signOut();

// Verificar sessão
const { data: session } = useSession();
```

## 🛒 Carrinho de Compras

O carrinho usa Zustand com persistência local:

```typescript
import { useCartStore } from "@/store/cartStore";

const addItem = useCartStore((state) => state.addItem);
const items = useCartStore((state) => state.items);
const totalPrice = useCartStore((state) => state.getTotalPrice());
```

## 💰 Preços B2B vs B2C

Cada produto tem dois preços:
- `priceB2C` - Preço para pessoa física (varejo)
- `priceB2B` - Preço para pessoa jurídica (atacado)

O preço exibido depende do tipo de usuário logado.

## 📊 Administração

Para criar um usuário admin, use o Prisma Studio:

```bash
npx prisma studio
```

Ou diretamente no banco:

```sql
UPDATE "User" SET "userType" = 'ADMIN' WHERE email = 'admin@bbf.com.br';
```

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras Plataformas

```bash
npm run build
npm start
```

## 🔧 Variáveis de Ambiente

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="https://seu-dominio.com"
NEXTAUTH_SECRET="chave-secreta-aleatoria"

# Email (opcional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="seu-email@gmail.com"
SMTP_PASSWORD="senha-app"
```

## 📝 Scripts Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start

# Prisma Studio (GUI do banco)
npx prisma studio

# Resetar banco de dados
npx prisma migrate reset

# Criar nova migration
npx prisma migrate dev --name nome_da_migration
```

## 🎯 Próximos Passos

Para produção, implemente:

1. **Pagamento** - Integrar com Stripe, PagSeguro, etc.
2. **Frete** - Integrar com Correios, transportadoras
3. **Email** - Confirmação de pedidos, recuperação de senha
4. **Admin Panel** - Gerenciar produtos, pedidos, usuários
5. **Relatórios** - Dashboard com métricas de vendas
6. **Imagens** - Upload de imagens de produtos
7. **Busca Avançada** - Elasticsearch ou Algolia
8. **Reviews** - Sistema de avaliações de produtos

## 📞 Suporte

Email: suporte@bbf.com.br
Tel: +55 (11) 0000-0000

## 📄 Licença

© 2025 BBF - Bracelos Brazil Foods S/A
