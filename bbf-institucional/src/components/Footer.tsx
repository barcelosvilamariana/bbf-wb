import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">BBF</h3>
            <p className="text-gray-400 mb-4">
              Bracelos Brazil Foods S/A - Líder em distribuição de alimentos e franquias Barcelos no Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-gray-400 hover:text-primary transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#negocios" className="text-gray-400 hover:text-primary transition">
                  Nossos Negócios
                </Link>
              </li>
              <li>
                <Link href="#sustentabilidade" className="text-gray-400 hover:text-primary transition">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-400 hover:text-primary transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Units */}
          <div>
            <h4 className="font-semibold mb-4">Unidades de Negócio</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://franquias.bbf.com.br" target="_blank" className="text-gray-400 hover:text-primary transition">
                  Franquias Barcelos
                </a>
              </li>
              <li>
                <a href="https://loja.bbf.com.br" target="_blank" className="text-gray-400 hover:text-primary transition">
                  Distribuição Atacado
                </a>
              </li>
              <li>
                <a href="https://loja.bbf.com.br" target="_blank" className="text-gray-400 hover:text-primary transition">
                  Vendas Varejo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  São Paulo, SP - Brasil
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">+55 (11) 0000-0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">contato@bbf.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BBF - Bracelos Brazil Foods S/A. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
