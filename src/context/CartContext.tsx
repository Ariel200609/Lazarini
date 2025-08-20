import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Producto } from '../config/api';

export interface CartItem {
  producto: Producto;
  cantidad: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (producto: Producto, cantidad?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, cantidad: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getWhatsAppMessage: () => string;
  getWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Número de WhatsApp de la farmacia
  const WHATSAPP_NUMBER = '5492923659973'; // Farmacia Montoya

  const addToCart = (producto: Producto, cantidad: number = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.producto.id === producto.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prevItems, { producto, cantidad }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prevItems => prevItems.filter(item => item.producto.id !== productId));
  };

  const updateQuantity = (productId: number, cantidad: number) => {
    if (cantidad <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.producto.id === productId
          ? { ...item, cantidad }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.cantidad, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = item.producto.isPromotional && item.producto.discount
        ? item.producto.price * (1 - item.producto.discount)
        : item.producto.price;
      return total + (price * item.cantidad);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getWhatsAppMessage = () => {
    if (items.length === 0) return '';

    let message = '🛒 *PEDIDO FARMACIA MONTOYA*\n\n';
    
    items.forEach((item, index) => {
      const price = item.producto.isPromotional && item.producto.discount
        ? item.producto.price * (1 - item.producto.discount)
        : item.producto.price;
      
      message += `${index + 1}. *${item.producto.name}*\n`;
      message += `   • Cantidad: ${item.cantidad}\n`;
      message += `   • Precio unitario: ${formatPrice(price)}\n`;
      message += `   • Subtotal: ${formatPrice(price * item.cantidad)}\n`;
      if (item.producto.isPromotional && item.producto.discount) {
        message += `   • 🏷️ Descuento: ${Math.round(item.producto.discount * 100)}%\n`;
      }
      message += '\n';
    });

    message += `💰 *TOTAL: ${formatPrice(getTotalPrice())}*\n\n`;
    message += '📍 Por favor, confirme la disponibilidad y el método de entrega.\n';
    message += '¡Gracias por elegir Farmacia Montoya! 💊';

    return message;
  };

  const getWhatsAppUrl = () => {
    const message = getWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getWhatsAppMessage,
    getWhatsAppUrl
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Función helper para generar WhatsApp URL para producto individual
export const getProductWhatsAppUrl = (producto: Producto, sucursal: string) => {
  const WHATSAPP_NUMBER = '5492923659973'; // Farmacia Montoya
  
  const price = producto.isPromotional && producto.discount
    ? producto.price * (1 - producto.discount)
    : producto.price;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  let message = `🏥 *CONSULTA FARMACIA MONTOYA*\n\n`;
  message += `Hola! Me interesa el siguiente producto:\n\n`;
  message += `📦 *${producto.name}*\n`;
  message += `💰 Precio: ${formatPrice(price)}`;
  
  if (producto.isPromotional && producto.discount) {
    message += ` (${Math.round(producto.discount * 100)}% OFF)`;
  }
  
  message += `\n🏷️ Categoría: ${producto.category}\n`;
  message += `📍 Sucursal: ${sucursal}\n\n`;
  message += `¿Está disponible? ¿Cuál es el método de entrega?\n\n`;
  message += `¡Gracias! 😊`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
