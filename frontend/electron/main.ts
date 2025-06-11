import { app, BrowserWindow, ipcMain } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
import installExtension, { REDUX_DEVTOOLS } from "electron-devtools-installer";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, "..");

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;
let modalWindow: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    width: 1366,
    minWidth: 1366,
    height: 728,
    minHeight: 728,
    frame: false,
    show: false,
    icon: "./public/icon.png",
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      nodeIntegration: true,
    },
  });

  // mostra a pagina somente apos carregar todas as funçoes do app
  win.once("ready-to-show", () => {
    win.show();
  });

  win.webContents.openDevTools();

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }

  // Enviar evento para o cliente quando a janela for maximizada ou restaurada
  win.on("maximize", () => {
    win?.webContents.send("maximize-change", true);
  });

  win.on("restore", () => {
    win?.webContents.send("maximize-change", false);
  });
}

ipcMain.handle("minimize-window", () => {
  win?.minimize();
});

ipcMain.handle("maximize-window", () => {
  if (win?.isMaximized()) {
    win.restore();
  } else {
    win?.maximize();
  }
});

ipcMain.handle("close-window", () => {
  win?.close();
});

//   if (modalWindow) {
//     modalWindow.focus();
//     return;
//   }
//   modalWindow = new BrowserWindow({
//     width: 1000,
//     height: 600,
//     parent: win,
//     modal: false,
//     frame: false,
//     show: false,
//     alwaysOnTop: false,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.mjs"),
//       nodeIntegration: true,
//     },
//   });

//   modalWindow.once("ready-to-show", () => {
//     modalWindow?.show();
//   });

//   // Add this to handle modal window closing
//   modalWindow.on("closed", () => {
//     modalWindow = null;
//   });

//   // modalWindow.loadFile("modal.html");

//   if (VITE_DEV_SERVER_URL) {
//     modalWindow.loadURL(`${VITE_DEV_SERVER_URL}#/modal`);
//   } else {
//     modalWindow.loadFile(path.join(RENDERER_DIST, "index.html"), {
//       hash: "/modal",
//     });
//   }

//   // Update the IPC handler to check modal state
//   ipcMain.handle("open-modal", () => {
//     if (!modalWindow) {
//       createModal();
//     }
//   });
// }

// Add this IPC handler
// ipcMain.handle("open-modal", () => {
//   createModal();
// });

ipcMain.handle("close-modal", () => {
  modalWindow?.close();
  modalWindow = null;
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(() => {
  [REDUX_DEVTOOLS].map((extension) => {
    installExtension(extension)
      .then((name: string) => console.log(`Installed extension: ${name}.`))
      .catch((error) => console.log("An error has occurred", error));
  });

  createWindow();
});
