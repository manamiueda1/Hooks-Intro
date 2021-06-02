import './App.css';
import StateHook from './components/useState/StateHook'
import EffectHook from './components/useEffect/EffectHook'
import EffectCleanUp from './components/useEffect/EffectCleanUp'
import ContextHook from './components/useContext/ContextHook'
import RefHook from './components/useRef/RefHook'

function App() {
  return (
    <div className="App">
      <StateHook/>
      <EffectHook/>
      <EffectCleanUp/>
      <ContextHook/>
      <RefHook/>
    </div>
  );
}

export default App;
