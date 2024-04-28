import './App.css';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Homepage/>
      </div>
     </AppProvider>
  );
}

export default App;
