// src/main.tsx
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import App from './App';
import './locales';
import { lightTheme, darkTheme } from './antd-theme';
import { ProfilerProvider, useProfiler } from './contexts/ProfilerContext';
import enUS from 'antd/lib/locale/en_US';
import ptBR from 'antd/lib/locale/pt_BR';

const queryClient = new QueryClient();

const Main = () => {
  const state = useProfiler(); // Correção: pegar diretamente o estado do profiler
  const [theme, setTheme] = useState(lightTheme);
  const [locale, setLocale] = useState(
    state.locale || (navigator.language === 'pt-BR' ? ptBR : enUS),
  );

  useEffect(() => {
    if (state.theme === 'light') {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [state.theme]);

  useEffect(() => {
    setLocale(state.locale);
  }, [state.locale]);

  return (
    <ConfigProvider theme={theme} locale={locale}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ConfigProvider>
  );
};

const AppWrapper = () => (
  <ProfilerProvider>
    <Main />
  </ProfilerProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<AppWrapper />);
