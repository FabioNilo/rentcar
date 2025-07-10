import { useState } from "react";
import {
  ShoppingCart,
  Phone,
  MapPin,
  User,
  Mail,
  Plus,
  Minus,
  X,
} from "lucide-react";
import { QUENTINHAS } from "./data.js";
import neide from "./assets/neide.jpg";

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const addToCart = (quentinha) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === quentinha.id);
      if (existing) {
        return prev.map((item) =>
          item.id === quentinha.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...quentinha, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = () => {
    const whatsappNumber = "557399825-3365";

    let message = `🍽️ *NOVO PEDIDO - QUENTINHAS CONGELADAS*\n\n`;
    message += `👤 *Cliente:* ${customer.name}\n`;
    message += `📱 *Telefone:* ${customer.phone}\n`;
    message += `📧 *Email:* ${customer.email}\n`;
    message += `📍 *Endereço:* ${customer.address}\n\n`;

    message += `🛒 *ITENS DO PEDIDO:*\n`;
    cart.forEach((item) => {
      message += `• ${item.name} (x${item.quantity}) - R$ ${(
        item.price * item.quantity
      ).toFixed(2)}\n`;
    });

    message += `\n💰 *TOTAL: R$ ${getTotalPrice().toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Limpar carrinho e dados após envio
    setCart([]);
    setCustomer({ name: "", phone: "", email: "", address: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <span className="text-2xl">
                  <img
                    src={neide}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover"
                  />
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Neide congelados</h1>
                <p className="text-orange-100">
                  O sabor caseiro para sua praticidade total!
                </p>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-orange-500 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-orange-50 transition-colors shadow-md"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="font-semibold">Carrinho ({cart.length})</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-red-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">
            🔥 QUENTINHAS Congeladas Premium
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Refeições completas, nutritivas e deliciosas. Descongele, aqueça e
            saborei.
          </p>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span>Prático e Rápido</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🥩</span>
              <span>Proteínas Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">❄️</span>
              <span>Sempre Fresquinho</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🍽️ Nossos Sabores
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {QUENTINHAS.map((quentinha) => (
                <div
                  key={quentinha.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={quentinha.image}
                    alt={quentinha.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {quentinha.name}
                    </h4>
                    <div className="bg-orange-100 border-l-4 border-orange-500 p-3 mb-4">
                      <p className="text-sm text-orange-700 font-semibold mb-1">
                        🥩 Proteína: {quentinha.protein}
                      </p>
                      <p className="text-sm text-gray-600">
                        {quentinha.ingredients}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">
                        R$ {quentinha.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(quentinha)}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all font-semibold shadow-lg hover:shadow-xl"
                      >
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-fit">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📝 Seus Dados
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={customer.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={customer.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Endereço de Entrega
                </label>
                <textarea
                  name="address"
                  value={customer.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Rua, número, bairro, cidade, CEP"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">
                🛒 Resumo do Pedido
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Carrinho vazio</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-green-600 font-bold">
                          R$ {item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-green-600">
                        R$ {getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      📋 Dados do Cliente:
                    </h4>
                    <p>
                      <strong>Nome:</strong> {customer.name || "Não informado"}
                    </p>
                    <p>
                      <strong>Telefone:</strong>{" "}
                      {customer.phone || "Não informado"}
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      {customer.email || "Não informado"}
                    </p>
                    <p>
                      <strong>Endereço:</strong>{" "}
                      {customer.address || "Não informado"}
                    </p>
                  </div>

                  <button
                    onClick={sendToWhatsApp}
                    disabled={
                      cart.length === 0 || !customer.name || !customer.phone
                    }
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    📱 Enviar Pedido via WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
