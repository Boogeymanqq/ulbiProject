import { Link } from 'react-router-dom';
import { classNames } from 'shared/config/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
