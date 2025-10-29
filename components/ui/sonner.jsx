'use client';

import { useTheme } from 'next-themes';
import { Toaster} from 'sonner';

type ToasterProps = React.ComponentProps;

const Toaster = ({ ...props }) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme'theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast,
          description,
          actionButton,
          cancelButton,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
