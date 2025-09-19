// src/App.jsx
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Car,
  Shield,
  Clock,
  Star,
  MessageCircle,
} from "lucide-react";

import lukasImg from "./assets/lukas.jpg";
import porto from "./assets/porto.jpg";
import arraial from "./assets/arraial.jpg";

export default function CarRentalLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const vehicles = [
    {
      id: 1,
      name: "Fiat Argo",
      category: "Popular",
      image: "../public/argo2.jpg",
      features: [
        "Ar condicionado",
        "Direção elétrica",
        "5 lugares",
        "Econômico",
      ],
    },
    {
      id: 2,
      name: "Jeep Renegade",
      category: "SUV",
      image: "../public/renegade.jpg",
      features: ["SUV 4x4", "Automático", "Ar digital", "Multimidia"],
    },
    {
      id: 3,
      name: "Chevrolet Spin",
      category: "7 Lugares",
      image: "../public/spin.jpg",
      features: [
        "7 lugares",
        "Ideal para famílias",
        "Ar condicionado",
        "Porta-malas amplo",
      ],
    },
  ];

  const heroImages = [
    "../src/assets/arraial.jpeg",
    "../src/assets/igreja.jpeg",
    "../src/assets/trancoso.jpeg",
  ];

  const services = [
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Melhor Preço da Região",
      description:
        "Tarifas competitivas e transparentes, sem taxas ocultas para você economizar",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Veículos de Qualidade",
      description:
        "Frota nova e bem conservada, com revisões em dia e limpeza impecável",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Atendimento Excepcional",
      description:
        "Equipe dedicada e processo ágil para você aproveitar ao máximo suas férias",
    },
  ];

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5573811681522?text=Olá! Gostaria de alugar um veículo na Costa das Baleias.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">
                Sul Bahia Rent A Car
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-700">
                <Phone className="w-4 h-4" />
                <span>+55 73 8116-8152</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700">
                <MapPin className="w-4 h-4" />
                <span>Porto Seguro - BA</span>
              </div>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block w-full h-0.5 bg-gray-800"></span>
                <span className="block w-full h-0.5 bg-gray-800"></span>
                <span className="block w-full h-0.5 bg-gray-800"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span>+55 73 8116-8152</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-4 h-4" />
                <span>Porto Seguro - BA</span>
              </div>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Descubra a
            <br />
            <span className="text-blue-400">Costa das Baleias</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Explore Porto Seguro e região com total liberdade. As praias mais
            belas do Sul da Bahia te aguardam!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Reserve Agora no WhatsApp</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Ver Veículos
            </button>
          </div>
        </div>
      </section>

      {/* Seção de Veículos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossa Frota
            </h2>
            <p className="text-xl text-gray-600">
              Veículos novos e revisados para sua segurança e conforto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {vehicle.name}
                  </h3>
                  <ul className="text-gray-600 mb-6 space-y-1">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar no WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Por que escolher a
                <span className="text-blue-600"> Sul Bahia Rent A Car?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos especialistas em turismo na Costa das Baleias. Com anos de
                experiência em Porto Seguro, oferecemos o melhor custo-benefício
                da região com atendimento personalizado.
              </p>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleWhatsApp}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale Conosco</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={lukasImg}
                alt="Praia tropical"
                className="rounded-2xl shadow-lg"
              />
              <img
                src={porto}
                alt="Orla de Porto Seguro"
                className="rounded-2xl shadow-lg"
              />
              <img
                src={arraial}
                alt="Estrada tropical"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=400&fit=crop"
                alt="Paisagem paradisíaca"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Sul Bahia Rent A Car</span>
              </div>
              <p className="text-gray-400">
                Sua liberdade para explorar as belezas da Costa das Baleias e
                Porto Seguro.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+55 73 8116-8152</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp disponível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Porto Seguro, Bahia</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Horário</h3>
              <div className="text-gray-400 space-y-1">
                <p>Segunda - Domingo</p>
                <p>24 horas por dia</p>
                <p>Atendimento WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Sul Bahia Rent A Car. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
