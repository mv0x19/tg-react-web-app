import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useTelegram } from '../src/hooks/useTelegram';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

const App = () => {
  const { onToggleButton, telegram } = useTelegram();

  useEffect(() => {
    telegram.ready();
  });

  return (
    <>
      <Header />
      <Button onClick={onToggleButton}>Toggle</Button>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
