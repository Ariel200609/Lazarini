import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Producto } from '../config/api';
import { ApiService } from '../services/apiService';

type Sucursal = 'BONIFACIO' | 'GUAMINI';

interface PharmacyContextType {
  sucursalActual: Sucursal;
  productos: Producto[];
  loading: boolean;
  error: string | null;
  cambiarSucursal: (sucursal: Sucursal) => void;
  recargarProductos: () => void;
}

const PharmacyContext = createContext<PharmacyContextType | undefined>(undefined);

export const usePharmacy = () => {
  const context = useContext(PharmacyContext);
  if (context === undefined) {
    throw new Error('usePharmacy debe ser usado dentro de PharmacyProvider');
  }
  return context;
};

interface PharmacyProviderProps {
  children: ReactNode;
}

export const PharmacyProvider: React.FC<PharmacyProviderProps> = ({ children }) => {
  const [sucursalActual, setSucursalActual] = useState<Sucursal>('BONIFACIO');
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cargarProductos = async (sucursal: Sucursal) => {
    try {
      setLoading(true);
      setError(null);
      const productosData = await ApiService.getProductos(sucursal);
      setProductos(productosData);
    } catch (err) {
      setError('Error al cargar los productos');
      console.error('Error al cargar productos:', err);
    } finally {
      setLoading(false);
    }
  };

  const cambiarSucursal = (sucursal: Sucursal) => {
    setSucursalActual(sucursal);
    cargarProductos(sucursal);
  };

  const recargarProductos = () => {
    cargarProductos(sucursalActual);
  };

  useEffect(() => {
    cargarProductos(sucursalActual);
  }, []);

  const value: PharmacyContextType = {
    sucursalActual,
    productos,
    loading,
    error,
    cambiarSucursal,
    recargarProductos,
  };

  return (
    <PharmacyContext.Provider value={value}>
      {children}
    </PharmacyContext.Provider>
  );
};
