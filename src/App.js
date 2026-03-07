import { ToastContainer } from 'react-toastify';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import AllRoutes from './Routes';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-wrapper">
        <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick rtl={false} 
          pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
