import './App.css';
import StateHook from './components/useState/StateHook'
import EffectHook from './components/useEffect/EffectHook'
import EffectCleanUp from './components/useEffect/EffectCleanUp'
import ContextHook from './components/useContext/ContextHook'

function App() {
  return (
    <div className="App">
      <StateHook/>
      <EffectHook/>
      <EffectCleanUp/>
      <ContextHook/>
    </div>
  );
}

export default App;
