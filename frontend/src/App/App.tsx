import { AppRouter } from "../routes";
import "../Styles/App.less";
import { AppThemeProvider, AuthProvider, ModalsProvider } from "../shared/";
import { MinimizedModalsContainer } from "../Components";

function App() {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <ModalsProvider>
          <AppRouter />
          <MinimizedModalsContainer />
          {/* <GlobalModals /> */}
        </ModalsProvider>
      </AuthProvider>
    </AppThemeProvider>
  );
}

export default App;
