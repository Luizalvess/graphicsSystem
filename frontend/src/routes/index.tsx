import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Cliente,
  Financeiro,
  OS,
  Produtos,
  Vendas,
  Users,
  RH,
  AddOS,
  AddUserForm,
  CadFuncionarios,
  Login,
  Budget,
  Dashboard,
  ForgotPassword,
} from "@/pages";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/esqueci-minha-senha",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/cliente",
    element: (
      <PrivateRoute
        requiredRoles={[
          "Admin",
          "Gerente",
          "Vendedor(a)",
          "Diretor(a) Comercial",
        ]}
      >
        <Cliente />
      </PrivateRoute>
    ),
  },
  {
    path: "/os",
    element: (
      <PrivateRoute requiredRoles={["Admin", "Gerente", "Laser", "Acabamento"]}>
        <OS />
      </PrivateRoute>
    ),
  },
  {
    path: "/addos",
    element: (
      <PrivateRoute requiredRoles={["Admin", "Gerente", "Laser", "Acabamento"]}>
        <AddOS />
      </PrivateRoute>
    ),
  },
  {
    path: "/vendas",
    element: (
      <PrivateRoute
        requiredRoles={[
          "Admin",
          "Gerente",
          "Vendedor(a)",
          "Diretor(a) Comercial",
        ]}
      >
        <Vendas />
      </PrivateRoute>
    ),
  },
  {
    path: "/orcamento",
    element: (
      <PrivateRoute
        requiredRoles={[
          "Admin",
          "Gerente",
          "Vendedor(a)",
          "Diretor(a) Comercial",
        ]}
      >
        <Budget />
      </PrivateRoute>
    ),
  },
  {
    path: "/financeiro",
    element: (
      <PrivateRoute
        requiredRoles={["Admin", "Financeiro", "Diretor(a) Financeiro"]}
      >
        <Financeiro />
      </PrivateRoute>
    ),
  },
  {
    path: "/produtos",
    element: (
      <PrivateRoute requiredRoles={["Admin", "Gerente", "Vendedor(a)"]}>
        <Produtos />
      </PrivateRoute>
    ),
  },
  {
    path: "/usuarios",
    element: (
      <PrivateRoute requiredRole="Admin" requiredAccessLevel={1}>
        <Users />
      </PrivateRoute>
    ),
    children: [
      {
        path: "*",
        element: <AddUserForm />,
      },
      {
        path: "/usuarios/cadUser",
        element: <AddUserForm />,
      },
    ],
  },
  {
    path: "/recursosHumanos",
    element: (
      <PrivateRoute requiredRoles={["Admin", "Gerente"]}>
        <RH />
      </PrivateRoute>
    ),
  },
  {
    path: "/cadfuncionario",
    element: (
      <PrivateRoute requiredRoles={["Admin", "Gerente"]}>
        <CadFuncionarios />
      </PrivateRoute>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
