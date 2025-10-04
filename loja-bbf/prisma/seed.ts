import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar dados existentes
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  console.log('✅ Dados antigos removidos');

  // Criar usuários
  const hashedPassword = await bcrypt.hash('123456', 10);

  const userB2C = await prisma.user.create({
    data: {
      email: 'joao@email.com',
      password: hashedPassword,
      name: 'João Silva',
      userType: 'B2C',
      cpf: '12345678900',
      phone: '11999999999',
      street: 'Rua Exemplo',
      number: '123',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234567',
    },
  });

  const userB2B = await prisma.user.create({
    data: {
      email: 'maria@empresa.com',
      password: hashedPassword,
      name: 'Maria Santos',
      userType: 'B2B',
      cnpj: '12345678000100',
      companyName: 'Empresa Teste LTDA',
      phone: '11988888888',
      street: 'Av. Comercial',
      number: '456',
      neighborhood: 'Empresarial',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234567',
    },
  });

  const admin = await prisma.user.create({
    data: {
      email: 'admin@bbf.com.br',
      password: hashedPassword,
      name: 'Administrador BBF',
      userType: 'ADMIN',
      phone: '11977777777',
    },
  });

  console.log('✅ Usuários criados');

  // Criar categorias
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Grãos e Cereais',
        slug: 'graos-cereais',
        description: 'Arroz, feijão, lentilha e outros grãos',
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Óleos e Azeites',
        slug: 'oleos-azeites',
        description: 'Óleos vegetais e azeites',
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Massas',
        slug: 'massas',
        description: 'Massas secas e frescas',
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Açúcar e Adoçantes',
        slug: 'acucar-adocantes',
        description: 'Açúcar, mel e adoçantes',
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Bebidas',
        slug: 'bebidas',
        description: 'Café, chá, sucos e refrigerantes',
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Conservas',
        slug: 'conservas',
        description: 'Enlatados e conservas',
        active: true,
      },
    }),
  ]);

  console.log('✅ Categorias criadas');

  // Criar produtos
  const products = [
    // Grãos e Cereais
    {
      name: 'Arroz Tipo 1 - Saco 5kg',
      slug: 'arroz-tipo-1-5kg',
      description: 'Arroz branco tipo 1, grãos longos e soltos. Ideal para o dia a dia, com excelente rendimento e qualidade superior.',
      shortDescription: 'Arroz branco tipo 1, grãos longos e soltos',
      priceB2C: 25.90,
      priceB2B: 22.50,
      stock: 150,
      sku: 'ARR-001',
      barcode: '7891234567890',
      weight: 5.0,
      unit: 'UN',
      minQuantityB2B: 10,
      categoryId: categories[0].id,
      featured: true,
    },
    {
      name: 'Feijão Preto - Pacote 1kg',
      slug: 'feijao-preto-1kg',
      description: 'Feijão preto selecionado, tipo 1. Grãos uniformes e de alta qualidade, perfeito para o preparo tradicional.',
      shortDescription: 'Feijão preto selecionado, alta qualidade',
      priceB2C: 8.90,
      priceB2B: 7.50,
      stock: 200,
      sku: 'FEI-001',
      weight: 1.0,
      unit: 'UN',
      minQuantityB2B: 20,
      categoryId: categories[0].id,
      featured: true,
    },
    {
      name: 'Feijão Carioca - Pacote 1kg',
      slug: 'feijao-carioca-1kg',
      description: 'Feijão carioca tipo 1, grãos selecionados. Cozimento rápido e sabor tradicional.',
      shortDescription: 'Feijão carioca tipo 1, grãos selecionados',
      priceB2C: 7.90,
      priceB2B: 6.80,
      stock: 180,
      sku: 'FEI-002',
      weight: 1.0,
      unit: 'UN',
      minQuantityB2B: 20,
      categoryId: categories[0].id,
    },
    // Óleos
    {
      name: 'Óleo de Soja - 900ml',
      slug: 'oleo-soja-900ml',
      description: 'Óleo de soja refinado, ideal para cozinhar e fritar. Produto de primeira qualidade, sem colesterol.',
      shortDescription: 'Óleo de soja refinado, ideal para cozinhar',
      priceB2C: 6.90,
      priceB2B: 5.80,
      stock: 300,
      sku: 'OLE-001',
      weight: 0.9,
      unit: 'UN',
      minQuantityB2B: 12,
      categoryId: categories[1].id,
      featured: true,
    },
    {
      name: 'Azeite Extra Virgem - 500ml',
      slug: 'azeite-extra-virgem-500ml',
      description: 'Azeite de oliva extra virgem premium. Primeira prensagem a frio, sabor suave e aroma marcante.',
      shortDescription: 'Azeite de oliva extra virgem premium',
      priceB2C: 32.90,
      priceB2B: 28.50,
      stock: 80,
      sku: 'AZE-001',
      weight: 0.5,
      unit: 'UN',
      minQuantityB2B: 6,
      categoryId: categories[1].id,
      featured: true,
    },
    // Massas
    {
      name: 'Macarrão Espaguete - 500g',
      slug: 'macarrao-espaguete-500g',
      description: 'Massa de sêmola de trigo, cozimento perfeito. Textura al dente e sabor tradicional.',
      shortDescription: 'Massa de sêmola de trigo, cozimento perfeito',
      priceB2C: 3.90,
      priceB2B: 3.20,
      stock: 180,
      sku: 'MAC-001',
      weight: 0.5,
      unit: 'UN',
      minQuantityB2B: 24,
      categoryId: categories[2].id,
      featured: true,
    },
    {
      name: 'Macarrão Penne - 500g',
      slug: 'macarrao-penne-500g',
      description: 'Massa penne de sêmola de trigo. Formato perfeito para molhos encorpados.',
      shortDescription: 'Massa penne de sêmola de trigo',
      priceB2C: 3.90,
      priceB2B: 3.20,
      stock: 160,
      sku: 'MAC-002',
      weight: 0.5,
      unit: 'UN',
      minQuantityB2B: 24,
      categoryId: categories[2].id,
    },
    // Açúcar
    {
      name: 'Açúcar Cristal - 1kg',
      slug: 'acucar-cristal-1kg',
      description: 'Açúcar cristal de primeira qualidade. Grãos uniformes, ideal para adoçar bebidas e receitas.',
      shortDescription: 'Açúcar cristal de primeira qualidade',
      priceB2C: 4.50,
      priceB2B: 3.80,
      stock: 250,
      sku: 'ACU-001',
      weight: 1.0,
      unit: 'UN',
      minQuantityB2B: 30,
      categoryId: categories[3].id,
      featured: true,
    },
    {
      name: 'Açúcar Refinado - 1kg',
      slug: 'acucar-refinado-1kg',
      description: 'Açúcar refinado extra fino. Dissolução rápida, perfeito para bolos e doces.',
      shortDescription: 'Açúcar refinado extra fino',
      priceB2C: 5.20,
      priceB2B: 4.50,
      stock: 220,
      sku: 'ACU-002',
      weight: 1.0,
      unit: 'UN',
      minQuantityB2B: 30,
      categoryId: categories[3].id,
    },
    // Bebidas
    {
      name: 'Café Torrado e Moído - 500g',
      slug: 'cafe-torrado-moido-500g',
      description: 'Café premium, torrado e moído na hora. Blend especial com notas de chocolate e caramelo.',
      shortDescription: 'Café premium, torrado e moído na hora',
      priceB2C: 18.90,
      priceB2B: 16.50,
      stock: 120,
      sku: 'CAF-001',
      weight: 0.5,
      unit: 'UN',
      minQuantityB2B: 12,
      categoryId: categories[4].id,
      featured: true,
    },
    {
      name: 'Chá Preto - Caixa 25 sachês',
      slug: 'cha-preto-25-saches',
      description: 'Chá preto premium em sachês. Sabor marcante e aroma intenso.',
      shortDescription: 'Chá preto premium em sachês',
      priceB2C: 8.90,
      priceB2B: 7.50,
      stock: 90,
      sku: 'CHA-001',
      weight: 0.05,
      unit: 'UN',
      minQuantityB2B: 12,
      categoryId: categories[4].id,
    },
    // Conservas
    {
      name: 'Milho Verde em Conserva - 200g',
      slug: 'milho-verde-conserva-200g',
      description: 'Milho verde em conserva, grãos inteiros. Prático e saboroso.',
      shortDescription: 'Milho verde em conserva, grãos inteiros',
      priceB2C: 3.50,
      priceB2B: 2.90,
      stock: 200,
      sku: 'CON-001',
      weight: 0.2,
      unit: 'UN',
      minQuantityB2B: 24,
      categoryId: categories[5].id,
    },
    {
      name: 'Ervilha em Conserva - 200g',
      slug: 'ervilha-conserva-200g',
      description: 'Ervilha em conserva, grãos tenros. Ideal para saladas e pratos quentes.',
      shortDescription: 'Ervilha em conserva, grãos tenros',
      priceB2C: 3.50,
      priceB2B: 2.90,
      stock: 180,
      sku: 'CON-002',
      weight: 0.2,
      unit: 'UN',
      minQuantityB2B: 24,
      categoryId: categories[5].id,
    },
    {
      name: 'Molho de Tomate - 340g',
      slug: 'molho-tomate-340g',
      description: 'Molho de tomate tradicional. Sabor caseiro, sem conservantes.',
      shortDescription: 'Molho de tomate tradicional',
      priceB2C: 4.20,
      priceB2B: 3.50,
      stock: 150,
      sku: 'CON-003',
      weight: 0.34,
      unit: 'UN',
      minQuantityB2B: 24,
      categoryId: categories[5].id,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log('✅ Produtos criados');

  console.log('\n🎉 Seed concluído com sucesso!');
  console.log('\n📊 Resumo:');
  console.log(`   - ${await prisma.user.count()} usuários`);
  console.log(`   - ${await prisma.category.count()} categorias`);
  console.log(`   - ${await prisma.product.count()} produtos`);
  console.log('\n👤 Credenciais de teste:');
  console.log('   B2C: joao@email.com / 123456');
  console.log('   B2B: maria@empresa.com / 123456');
  console.log('   Admin: admin@bbf.com.br / 123456');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
