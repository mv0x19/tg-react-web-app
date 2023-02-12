import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useTelegram } from '../src/hooks/useTelegram';

const App = () => {
  const { onToggleButton, telegram } = useTelegram();

  useEffect(() => {
    telegram.ready();
  });

  return <button onClick={onToggleButton}>Toggle</button>;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
