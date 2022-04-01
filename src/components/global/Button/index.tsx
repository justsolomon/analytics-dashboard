import styles from './button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'transparent';
  iconButton?: boolean;
  children: React.ReactNode;
}

console.log(styles);

const Button = ({
  children,
  variant = 'solid',
  iconButton,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${styles['button']} ${rest.className} ${
        styles['button--' + variant]
      } ${iconButton ? styles['button--icon'] : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
