import { X } from "lucide-react";

const ServiceModal = ({ service, onClose, onAddService }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          {service.fullDescription}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Preço</h4>
            <p className="text-2xl font-bold text-blue-600">{service.price}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Duração</h4>
            <p className="text-xl text-gray-700">{service.duration}</p>
          </div>
        </div>

        <button
          onClick={() => onAddService(service)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Adicionar à Lista
        </button>
      </div>
    </div>
  </div>
);

export default ServiceModal;
