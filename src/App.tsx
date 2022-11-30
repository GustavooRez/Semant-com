import { BrowserRouter } from "react-router-dom";
import { Routess } from "./Routes";
import "./assets/styles/styles.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';
import { GlobalProvider } from "./contexts/Global/GlobalContext";


export function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routess />
        <Loading />
        <ToastContainer />
      </GlobalProvider>
    </BrowserRouter>
  );
}
