import { useEffect } from 'react';
import './App.scss';
import Home from './components/Home';
import { useUiStore, applyTheme } from './stores/ui';

export default function App() {
  const darkMode = useUiStore((state) => state.darkMode);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  return <Home />;
}
