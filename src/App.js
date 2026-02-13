import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import AllRoutes from './Routes';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-wrapper">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
