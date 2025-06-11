declare global {
  interface Window {
    electronAPI: {
      minimizeWindow: () => void;
      maximizeWindow: () => void;
      closeWindow: () => void;
      onMaximizeChange: (callback: (maximized: boolean) => void) => void;
      removeMaximizeChangeListener: () => void;
    };
  }
}

export {};
