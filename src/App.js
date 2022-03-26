import './App.css';
import Todo from './components/Todo'
import { ThemeProvider } from "styled-components";
import { StyleTheme, DarkTheme, LightTheme } from './components/Todo/partial/styled-custom';
import { useStore } from './helpers'

function App() {
  const [store] = useStore()
  return (
    <ThemeProvider theme={ store.theme === 'light' ? LightTheme : DarkTheme }> {store.theme}
      <StyleTheme />
      <div className="App">
        <Todo />
      </div>
    </ThemeProvider>
  );
}

export default App;
