// components/CepAutocomplete.tsx
import { useState } from "react";

interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const CepAutocomplete: React.FC = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setCep(newCep);

    if (newCep.length === 8) {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${newCep}/json/`
        );
        const data: Address & { erro?: boolean } = await response.json();

        if (data.erro) {
          setError("CEP não encontrado");
          setAddress(null);
        } else {
          setAddress(data);
        }
      } catch (err) {
        setError("Erro ao buscar CEP");
      } finally {
        setLoading(false);
      }
    } else {
      setAddress(null);
    }
  };

  return (
    <div>
      <label>CEP:</label>
      <input
        type="text"
        value={cep}
        onChange={handleCepChange}
        maxLength={8}
        placeholder="Digite o CEP"
      />
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {address && (
        <div>
          <p>Logradouro: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>
            Cidade: {address.localidade} - {address.uf}
          </p>
        </div>
      )}
    </div>
  );
};
