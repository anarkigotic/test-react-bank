import './App.css';
import { Formularios } from './components/Login';
import { DataProvider } from './context/DataContext';

import './index.css'
import { AppRouter } from './router/AppRouter';



function App() {



  return (
    <DataProvider>
        <AppRouter>

      <div className="container">
        <Formularios/>
      </div>
      
        </AppRouter>
    </DataProvider>
  );
}

export default App;
