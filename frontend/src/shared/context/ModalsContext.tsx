import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

// Tipos de modais disponíveis na aplicação
export type ModalType =
  | "calculator"
  | "chat"
  | "settings"
  | "calendar"
  | "seller"
  | string;

interface ModalState {
  isOpen: boolean;
  isMinimized: boolean;
  minimizeOrder: number | null; // Ordem de minimização para posicionamento
}

interface ModalsContextType {
  modals: Record<ModalType, ModalState>;
  openModal: (modalType: ModalType) => void;
  closeModal: (modalType: ModalType) => void;
  minimizeModal: (modalType: ModalType) => void;
  isModalOpen: (modalType: ModalType) => boolean;
  isModalMinimized: (modalType: ModalType) => boolean;
  getMinimizeOrder: (modalType: ModalType) => number | null;
  getMinimizedPosition: (modalType: ModalType) => {
    bottom: number;
    right: number;
  };
  getOpenModalsCount: () => number;
}

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const MAX_OPEN_MODALS = 5;
const BASE_RIGHT_POSITION = 20;
const BASE_BOTTOM_POSITION = 20;
const VERTICAL_OFFSET = 45; // Espaçamento vertical entre botões minimizados
const MAX_VERTICAL_POSITION = 300; // Limite máximo de altura para os botões minimizados

export const ModalsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modals, setModals] = useState<Record<ModalType, ModalState>>({
    calculator: { isOpen: false, isMinimized: false, minimizeOrder: null },
    chat: { isOpen: false, isMinimized: false, minimizeOrder: null },
    settings: { isOpen: false, isMinimized: false, minimizeOrder: null },
    calendar: { isOpen: false, isMinimized: false, minimizeOrder: null },
    seller: { isOpen: false, isMinimized: false, minimizeOrder: null },
    // Adicione outros modais conforme necessário
  });

  // Reorganiza as ordens de minimização quando o estado dos modais muda
  useEffect(() => {
    reorganizeMinimizedModals();
  }, [modals]);

  // Reorganiza os modais minimizados para que não haja lacunas nas ordens
  const reorganizeMinimizedModals = () => {
    const minimizedModals = Object.entries(modals)
      .filter(([_, state]) => state.isMinimized)
      .sort((a, b) => {
        const orderA = a[1].minimizeOrder || 0;
        const orderB = b[1].minimizeOrder || 0;
        return orderA - orderB;
      });

    // Se não houver modais minimizados, não há nada para reorganizar
    if (minimizedModals.length === 0) return;

    // Atualiza as ordens de minimização para serem sequenciais
    const updatedModals = { ...modals };
    minimizedModals.forEach(([type, _], index) => {
      updatedModals[type as ModalType] = {
        ...updatedModals[type as ModalType],
        minimizeOrder: index,
      };
    });

    // Atualiza o estado apenas se houver mudanças
    if (JSON.stringify(updatedModals) !== JSON.stringify(modals)) {
      setModals(updatedModals);
    }
  };

  // Conta quantos modais estão abertos
  const getOpenModalsCount = (): number => {
    return Object.values(modals).filter((modal) => modal.isOpen).length;
  };

  const openModal = (modalType: ModalType) => {
    // Se o modal já estava minimizado, apenas restaure-o
    if (modals[modalType]?.isMinimized) {
      setModals((prev) => ({
        ...prev,
        [modalType]: {
          ...prev[modalType],
          isOpen: true,
          isMinimized: false,
          minimizeOrder: null,
        },
      }));
      return;
    }

    // Verifica se já atingiu o limite de modais abertos
    if (!modals[modalType]?.isOpen && getOpenModalsCount() >= MAX_OPEN_MODALS) {
      console.warn(
        `Limite máximo de ${MAX_OPEN_MODALS} modais abertos atingido.`
      );
      return;
    }

    setModals((prev) => ({
      ...prev,
      [modalType]: {
        ...prev[modalType],
        isOpen: true,
        isMinimized: false,
      },
    }));
  };

  const closeModal = (modalType: ModalType) => {
    setModals((prev) => ({
      ...prev,
      [modalType]: {
        ...prev[modalType],
        isOpen: false,
        isMinimized: false,
        minimizeOrder: null,
      },
    }));
  };

  const minimizeModal = (modalType: ModalType) => {
    // Encontra a maior ordem de minimização atual
    const maxOrder = Math.max(
      -1,
      ...Object.values(modals)
        .filter((modal) => modal.isMinimized)
        .map((modal) => modal.minimizeOrder || 0)
    );

    // Usa a próxima ordem disponível
    const nextOrder = maxOrder + 1;

    setModals((prev) => ({
      ...prev,
      [modalType]: {
        ...prev[modalType],
        isOpen: false,
        isMinimized: true,
        minimizeOrder: nextOrder,
      },
    }));
  };

  const isModalOpen = (modalType: ModalType): boolean => {
    return modals[modalType]?.isOpen || false;
  };

  const isModalMinimized = (modalType: ModalType): boolean => {
    return modals[modalType]?.isMinimized || false;
  };

  const getMinimizeOrder = (modalType: ModalType): number | null => {
    return modals[modalType]?.minimizeOrder || null;
  };

  // Calcula a posição do botão minimizado com base na ordem de minimização
  const getMinimizedPosition = (
    modalType: ModalType
  ): { bottom: number; right: number } => {
    const order = getMinimizeOrder(modalType);

    if (order === null) {
      return { bottom: BASE_BOTTOM_POSITION, right: BASE_RIGHT_POSITION };
    }

    // Calcula a posição vertical com base na ordem de minimização
    const bottom = BASE_BOTTOM_POSITION + order * VERTICAL_OFFSET;

    // Limita a posição vertical para não ultrapassar o máximo definido
    const limitedBottom = Math.min(bottom, MAX_VERTICAL_POSITION);

    return { bottom: limitedBottom, right: BASE_RIGHT_POSITION };
  };

  return (
    <ModalsContext.Provider
      value={{
        modals,
        openModal,
        closeModal,
        minimizeModal,
        isModalOpen,
        isModalMinimized,
        getMinimizeOrder,
        getMinimizedPosition,
        getOpenModalsCount,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalsContext);
  if (context === undefined) {
    throw new Error("useModals must be used within a ModalsProvider");
  }
  return context;
};

// Hook personalizado para um modal específico
export const useModal = (modalType: ModalType) => {
  const {
    openModal,
    closeModal,
    minimizeModal,
    isModalOpen,
    isModalMinimized,
    getMinimizedPosition,
    getOpenModalsCount,
  } = useModals();

  return {
    isOpen: isModalOpen(modalType),
    isMinimized: isModalMinimized(modalType),
    handleOpen: () => openModal(modalType),
    handleClose: () => closeModal(modalType),
    handleMinimize: () => minimizeModal(modalType),
    getMinimizedPosition: () => getMinimizedPosition(modalType),
    canOpenNewModal: getOpenModalsCount() < MAX_OPEN_MODALS,
  };
};
