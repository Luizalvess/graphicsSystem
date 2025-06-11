import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserRole, UserType } from "@/shared";

interface PermissionsContextType {
  permissions: string[];
  setPermissions: (permissions: string[]) => void;
  checkPermission: (permission: string) => boolean;
  hasRole: (role: UserRole) => boolean;
  hasAccessLevel: (level: number) => boolean;
  isAdmin: () => boolean;
}

const PermissionsContext = createContext<PermissionsContextType | undefined>(
  undefined
);

export const PermissionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [permissions, setPermissions] = useState<string[]>([]);

  const updatePermissions = (newPermissions: string[]) => {
    setPermissions(newPermissions);
  };

  const checkPermission = (permission: string): boolean => {
    return permissions.includes(permission);
  };

  const hasRole = (role: UserRole): boolean => {
    return (
      permissions.includes(`role:${role}`) || permissions.includes("role:Admin")
    );
  };

  const hasAccessLevel = (level: number): boolean => {
    return permissions.some((perm) => {
      if (perm.startsWith("access:")) {
        const userLevel = parseInt(perm.split(":")[1]);
        return userLevel <= level;
      }
      return false;
    });
  };

  const isAdmin = (): boolean => {
    return (
      permissions.includes("role:Admin") ||
      permissions.includes("type:Administrador")
    );
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        setPermissions: updatePermissions,
        checkPermission,
        hasRole,
        hasAccessLevel,
        isAdmin,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

export const usePermissions = (): PermissionsContextType => {
  const context = useContext(PermissionsContext);
  if (!context) {
    throw new Error(
      "usePermissions deve ser usado dentro de PermissionsProvider"
    );
  }
  return context;
};
