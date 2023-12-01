import { classNames } from 'shared/config/lib/classNames/classNames';
import s from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'widgets/assets/icons/theme-light.svg';
import DarkIcon from 'widgets/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(s.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
