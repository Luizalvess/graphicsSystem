import { Calculator, Chat } from "@/pages";
import { RouterAwareComponent } from "../../routes/RouterAwareComponent";

import { MaxModalsWarning } from "./MaxModalsWarning";

export const GlobalModals: React.FC = () => {
  return (
    <RouterAwareComponent>
      <Chat />
      <Calculator />
      <MaxModalsWarning />
    </RouterAwareComponent>
  );
};
