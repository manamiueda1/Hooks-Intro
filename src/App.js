import './App.css';
import StateHook from './components/useState/StateHook'
import EffectHook from './components/useEffect/EffectHook'
import EffectCleanUp from './components/useEffect/EffectCleanUp'

function App() {
  return (
    <div className="App">
      <StateHook/>
      <EffectHook/>
      <EffectCleanUp/>
    </div>
  );
}

export default App;
