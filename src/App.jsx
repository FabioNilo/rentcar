import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Clipboard,
  Phone,
  Mail,
  MapPin,
  Star,
  Plus,
  Minus,
  Send,
} from "lucide-react";
import clara from "./assets/clara.jpg";
import eline from "./assets/eline.jpg";

const DentalClinicLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
  });

  const dentists = [
    {
      name: "Dra. Eline",
      specialty: "Ortodontia",
      image: eline,
      experience: "15 anos de experiência",
      description:
        "Especialista em ortodontia com foco em tratamentos invisíveis e estética dental.",
    },
    {
      name: "Dr. Clara",
      specialty: "Implantodontia",
      image: clara,
      experience: "20 anos de experiência",
      description:
        "Especialista em implantes dentários e cirurgias orais complexas.",
    },
  ];

  const services = [
    {
      id: 2,
      title: "Profilaxia",
      shortDescription: "Limpeza profunda para prevenção de doenças bucais.",
      fullDescription:
        "A profilaxia dental é uma limpeza realizada no consultório para remoção de placa bacteriana e tártaro, polimento dos dentes e aplicação de flúor. É essencial para a prevenção de cáries, gengivite e mau hálito, sendo recomendada semestralmente.",
      recommendedFrequency: "A cada 6 meses",
      duration: "45 minutos",
    },
    {
      id: 6,
      title: "Restauração",
      shortDescription: "Tratamento de cáries com materiais restauradores.",
      fullDescription:
        "A restauração dental recupera a função e estética de dentes danificados por cáries. Utiliza-se resina composta ou outros materiais estéticos para preencher a cavidade após a remoção da lesão cariosa.",
      indication: "Pacientes com cáries ou fraturas pequenas.",
      duration: "40 minutos",
    },
    {
      id: 9,
      title: "Endodontia",
      shortDescription: "Tratamento de canal para salvar dentes comprometidos.",
      fullDescription:
        "A endodontia trata a parte interna do dente, removendo tecido inflamado ou infectado. Após a limpeza e desinfecção dos canais, realiza-se o selamento com material biocompatível, evitando extrações e aliviando dores intensas.",
      performedBy: "Especialista em endodontia",
      duration: "1h 30min",
    },
    {
      id: 10,
      title: "Implante",
      shortDescription: "Reposição de dentes perdidos com pinos de titânio.",
      fullDescription:
        "O implante dentário é uma solução fixa para perda dentária, consistindo na instalação cirúrgica de um pino de titânio no osso maxilar, que posteriormente receberá uma prótese. Restaura função mastigatória e estética com alta durabilidade.",
      indication: "Pacientes com perda dentária parcial ou total.",
      duration: "2h (etapa cirúrgica)",
    },
    {
      id: 12,
      title: "Clareamento Dental",
      shortDescription: "Clareamento dos dentes com técnica segura e eficaz.",
      fullDescription:
        "Procedimento estético que visa remover pigmentações dos dentes, utilizando agentes clareadores como o peróxido de hidrogênio ou carbamida. Pode ser realizado em consultório ou em casa, sempre sob supervisão profissional.",
      recommendedFrequency: "Avaliação a cada 12 meses",
      duration: "1h por sessão",
    },
    {
      id: 8,
      title: "Cirurgia Oral",
      shortDescription: "Procedimentos cirúrgicos na cavidade bucal.",
      fullDescription:
        "Inclui extrações dentárias simples ou complexas, remoção de cistos, biópsias e outros procedimentos realizados sob anestesia local. A cirurgia oral é indicada para tratar lesões, dentes impactados ou condições patológicas.",
      performedBy: "Cirurgião-dentista",
      duration: "1h a 2h",
    },
  ];

  const testimonials = [
    {
      name: "João Silva",
      text: "Excelente atendimento! Fiz um implante e ficou perfeito. Equipe muito profissional e cuidadosa.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      text: "Melhor clínica da região! Meus filhos adoram vir aqui, a Dra. Maria é muito carinhosa com eles.",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      text: "Fiz clareamento e ortodontia. Resultado incrível! Recomendo para todos.",
      rating: 5,
    },
  ];

  const faqData = [
    {
      question: "Quanto tempo dura uma consulta?",
      answer:
        "As consultas têm duração média de 30 a 45 minutos, dependendo do tipo de procedimento. Consultas de avaliação costumam ser mais rápidas, enquanto procedimentos específicos podem levar mais tempo.",
    },
    {
      question: "Vocês atendem convênios?",
      answer:
        "Sim, atendemos os principais convênios odontológicos. Entre em contato conosco para verificar se seu plano está credenciado e quais procedimentos estão cobertos.",
    },
    {
      question: "É possível agendar consulta de emergência?",
      answer:
        "Sim, reservamos horários para emergências odontológicas. Em caso de dor intensa ou trauma dental, entre em contato imediatamente que faremos o possível para atendê-lo no mesmo dia.",
    },
    {
      question: "Oferecem parcelamento dos tratamentos?",
      answer:
        "Sim, oferecemos diversas opções de parcelamento sem juros e também aceitamos cartões de crédito e débito. Consulte nossas condições especiais na recepção.",
    },
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1b1b2b4c7b25?w=1200&h=600&fit=crop",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (service) => {
    const existingItem = cart.find((item) => item.id === service.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
    setIsServiceModalOpen(false);
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  const updateQuantity = (serviceId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(serviceId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === serviceId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  /* const getTotalPrice = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(
          item.price.replace("R$ ", "").replace(".", "").replace(",", ".")
        );
        return total + price * item.quantity;
      }, 0)
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }; */

  const sendToWhatsApp = () => {
    let message = `*Agendamento - Clínica Odontológica*\n\n`;
    message += `*Dados do Cliente:*\n`;
    message += `Nome: ${formData.name}\n`;
    message += `Telefone: ${formData.phone}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Data Preferida: ${formData.preferredDate}\n\n`;

    message += `*Serviços Solicitados:*\n`;
    cart.forEach((item) => {
      message += `• ${item.title} (${item.quantity}x)\n\n`;
    });

    if (formData.message) {
      message += `*Observações:* ${formData.message}\n\n`;
    }

    message += `Aguardo confirmação do agendamento!`;

    const whatsappUrl = `https://wa.me/557391064760?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    setIsCartOpen(false);
    setShowForm(false);
    setCart([]);
    setFormData({
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🦷</span>
            </div>
            <h1 className="text-2xl font-bold text-blue-600">
              Clinica Dra. Eline Robert
            </h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Início
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Serviços
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Depoimentos
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Equipe
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contato
            </a>
          </nav>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
          >
            <Clipboard className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section com Carrossel */}
      <section id="home" className="relative h-screen overflow-hidden mt-20">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Seu Sorriso
              <br />
              <span className="text-blue-400">Perfeito</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Tecnologia avançada e cuidado personalizado para transformar seu
              sorriso
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105">
              Agende sua Consulta
            </button>
          </div>
        </div>

        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroImages.length) % heroImages.length
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroImages.length)
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </section>

      {/* Seção de Serviços */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de tratamentos odontológicos com
              tecnologia de ponta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedService(service);
                        setIsServiceModalOpen(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              O Que Nossos Pacientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de quem confia em nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-blue-600">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção da Equipe */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais altamente qualificados e experientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dentists.map((dentist, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
              >
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="w-40h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {dentist.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {dentist.specialty}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {dentist.experience}
                  </p>
                  <p className="text-gray-700">{dentist.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas mais comuns
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl">Estamos aqui para cuidar do seu sorriso</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-700 p-6 rounded-xl">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p>(11) 99999-9999</p>
              <p>(11) 3333-3333</p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>contato@smilecare.com.br</p>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p>Comercial Fraga Center, 4º Andar</p>
              <p>Centro - Ilhéus/BA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Serviço */}
      {isServiceModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedService.title}
                </h2>
                <button
                  onClick={() => setIsServiceModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedService.fullDescription}
                </p>
              </div>

              <button
                onClick={() => addToCart(selectedService)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Adicionar à Lista
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal do Carrinho */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Lista de Agendamentos
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-600 text-center py-8">
                  Nenhum serviço agendado
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gray-50 p-4 rounded-lg flex justify-between items-center"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-blue-600 font-bold">
                            {item.price}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="bg-gray-200 p-1 rounded"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="bg-gray-200 p-1 rounded"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 ml-2"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!showForm ? (
                    <button
                      onClick={() => setShowForm(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Continuar para Agendamento
                    </button>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Dados para Agendamento
                      </h3>

                      <input
                        type="text"
                        placeholder="Nome completo"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                      />

                      <input
                        type="tel"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                      />

                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                      />

                      <input
                        type="date"
                        placeholder="Data preferida"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                      />

                      <textarea
                        placeholder="Observações (opcional)"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 h-24"
                      />

                      <button
                        onClick={sendToWhatsApp}
                        disabled={
                          !formData.name || !formData.phone || !formData.email
                        }
                        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>Enviar para WhatsApp</span>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DentalClinicLanding;
