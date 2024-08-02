import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Notifications from './components/page/Notifications';
import { NotificationProvider } from './context/NotificationContext';

function App() {
 return (
  <NotificationProvider>
    <div className='container'>
      <Header />
      <main>
        <Notifications/>
      </main>
      <Footer/>
    </div>
  </NotificationProvider>
 )
}

export default App
