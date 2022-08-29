import { Header } from "../Header";
import {Footer} from '../Footer'
import { Wave } from "../Wave";
import { ToastContainer } from "react-toastify";
export function Layout({children}) {
  return (
    <>
    <Wave/>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
