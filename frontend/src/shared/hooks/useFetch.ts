import { useState, useEffect } from "react";
import { api } from "../services/api/api";

// Hook customizado para chamadas de API
export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get(url);
        setData(response.data);
      } catch (err: any) {
        console.error("Erro no useFetch:", err);
        setError(
          err.response?.data?.message || err.message || "Erro ao buscar dados"
        );
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};
