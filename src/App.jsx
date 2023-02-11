import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return <button onClick={onClose}>Close</button>;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
