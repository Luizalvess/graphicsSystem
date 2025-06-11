import React from "react";
import { Navigate } from "react-router-dom";
import { usePermissions } from "@/shared/hooks/usePermissions";
import { useAuth, UserRole } from "@/shared";
import { Loading } from "@/pages";
interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  requiredAccessLevel?: number;
  requiredRoles?: UserRole[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  requiredRole,
  requiredAccessLevel,
  requiredRoles,
}) => {
  const { state } = useAuth();
  const { hasPermission, canAccess, isAdmin } = usePermissions();

  // Mostrar loading enquanto verifica autenticação
  if (state.loading) {
    return <Loading message="Validando autenticação..." />;
  }

  // Redirecionar para login se não autenticado
  if (!state.isAuthenticated || !state.user) {
    return <Navigate to="/" replace />;
  }

  // Se é admin, tem acesso a tudo
  if (isAdmin()) {
    return <>{children}</>;
  }

  // Verificar permissões específicas se fornecidas
  if (requiredRoles && requiredRoles.length > 0) {
    if (!canAccess(requiredRoles, requiredAccessLevel)) {
      return <Navigate to="/dashboard" replace />;
    }
  } else if (requiredRole || requiredAccessLevel) {
    if (!hasPermission(requiredRole, requiredAccessLevel)) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default PrivateRoute;
