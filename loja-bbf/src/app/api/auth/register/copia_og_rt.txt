import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name, userType, cpf, cnpj, companyName, phone } = body;

    // Validate required fields
    if (!email || !password || !name || !userType) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email já cadastrado" },
        { status: 400 }
      );
    }

    // Check CPF/CNPJ uniqueness
    if (userType === "B2C" && cpf) {
      const existingCPF = await prisma.user.findUnique({
        where: { cpf },
      });
      if (existingCPF) {
        return NextResponse.json(
          { error: "CPF já cadastrado" },
          { status: 400 }
        );
      }
    }

    if (userType === "B2B" && cnpj) {
      const existingCNPJ = await prisma.user.findUnique({
        where: { cnpj },
      });
      if (existingCNPJ) {
        return NextResponse.json(
          { error: "CNPJ já cadastrado" },
          { status: 400 }
        );
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        userType,
        cpf: userType === "B2C" ? cpf : null,
        cnpj: userType === "B2B" ? cnpj : null,
        companyName: userType === "B2B" ? companyName : null,
        phone,
      },
      select: {
        id: true,
        email: true,
        name: true,
        userType: true,
      },
    });

    return NextResponse.json(
      { message: "Usuário criado com sucesso", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 }
    );
  }
}
