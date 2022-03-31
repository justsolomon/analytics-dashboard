import styles from './button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'transparent';
  colorScheme?: 'primary' | 'secondary' | 'none';
  iconButton?: boolean;
  children: React.ReactNode;
}

function Button({
  children,
  variant = 'solid',
  colorScheme = 'none',
  iconButton,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles['button']} ${rest.className} ${
        styles['button--' + variant]
      } ${styles['button--' + colorScheme]} ${
        iconButton ? styles['button--icon'] : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
