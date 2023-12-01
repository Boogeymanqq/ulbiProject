import { classNames } from 'shared/config/lib/classNames/classNames';
import s from './BugButton.module.scss';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    // if (Math.random() < 0.5) {
    //   throw new Error();
    // }
  }, [error]);
  return (
    <Button onClick={onThrow} className={classNames(s.BugButton, {}, [className])}>
      throw error
    </Button>
  );
};
