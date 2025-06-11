import { useAuth, UserRole, UserType } from "@/shared";

export const usePermissions = () => {
  const { user } = useAuth();

  const hasPermission = (
    requiredRole?: UserRole,
    requiredAccessLevel?: number
  ): boolean => {
    if (!user) {
      return false;
    }

    // Admin tem acesso a tudo
    const isAdmin = user.role === "Admin" || user.userType === "Administrador";
    if (isAdmin) {
      return true;
    }

    // Se não especificar requisitos, usuário autenticado tem acesso
    if (!requiredRole && !requiredAccessLevel) {
      return true;
    }

    const { role, accessLevel } = user;

    // Verificar role se especificado
    if (requiredRole && role !== requiredRole) {
      return false;
    }

    // Verificar nível de acesso se especificado (menor número = maior acesso)
    if (requiredAccessLevel && accessLevel) {
      return accessLevel <= requiredAccessLevel;
    }

    return true;
  };

  const hasRole = (role: UserRole): boolean => {
    if (!user) return false;
    return user.role === role || user.role === "Admin";
  };

  const hasAccessLevel = (level: number): boolean => {
    if (!user || !user.accessLevel) return false;
    return user.accessLevel <= level; // Menor número = maior acesso
  };

  const isAdmin = (): boolean => {
    if (!user) return false;
    return user.role === "Admin" || user.userType === "Administrador";
  };

  const canAccess = (
    requiredRoles: UserRole[],
    requiredAccessLevel?: number
  ): boolean => {
    if (!user) return false;

    if (isAdmin()) return true;

    const hasRequiredRole = requiredRoles.includes(user.role as UserRole);
    const hasRequiredAccess = requiredAccessLevel
      ? hasAccessLevel(requiredAccessLevel)
      : true;

    return hasRequiredRole && hasRequiredAccess;
  };

  return {
    hasPermission,
    hasRole,
    hasAccessLevel,
    isAdmin,
    canAccess,
    userRole: user?.role || null,
    userType: user?.userType || null,
    userAccessLevel: user?.accessLevel || null,
  };
};
