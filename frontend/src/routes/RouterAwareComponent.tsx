import React from "react";
import { useLocation } from "react-router-dom";

interface RouterAwareComponentProps {
  children: React.ReactNode;
}

export const RouterAwareComponent: React.FC<RouterAwareComponentProps> = ({
  children,
}) => {
  try {
    // Tenta usar um hook do React Router para verificar se estamos em um contexto de Router
    useLocation();
    // Se não lançar erro, renderiza os filhos
    return <>{children}</>;
  } catch (error) {
    console.warn("Component rendered outside Router context:", error);
    // Retorna null ou um componente de fallback
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Este componente deve ser usado dentro de um Router.</p>
      </div>
    );
  }
};
