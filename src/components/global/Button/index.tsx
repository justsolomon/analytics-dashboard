import styles from './button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'transparent';
  colorScheme?: 'primary' | 'secondary' | 'none';
  iconButton?: boolean;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

function Button({
  children,
  variant = 'solid',
  colorScheme = 'none',
  iconButton,
  leftIcon,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles['button']} ${rest.className} ${
        styles['button--' + variant]
      } ${styles['button--' + colorScheme]} ${
        iconButton ? styles['button--icon'] : ''
      }`}
      onClick={onClick}
      {...rest}
    >
      {leftIcon ? (
        <span className={styles['button__left-icon']}>{leftIcon}</span>
      ) : null}
      <>{children}</>
    </button>
  );
}

export default Button;
