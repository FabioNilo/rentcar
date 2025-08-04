const ServiceCard = ({ service, onLearnMore }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.shortDescription}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">
          {service.price}
        </span>
        <button
          onClick={() => onLearnMore(service)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Saiba Mais
        </button>
      </div>
    </div>
  </div>
);

export default ServiceCard;
