import React, { useState, useEffect } from "react";
import { ShoppingCart, Filter, X, Plus, Minus, Star } from "lucide-react";

// Componente Header
export default function Header() {
  return (
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
  );
}
