import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClass?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = ({
  containerClass,
  leftIcon,
  rightIcon,
  ...rest
}: InputProps) => {
  return (
    <div className={`${styles['input-group']} ${containerClass}`}>
      {leftIcon ? (
        <span className={styles['input__left-icon']}>{leftIcon}</span>
      ) : null}

      <input
        {...rest}
        className={`${styles['input']} ${rest.className} ${
          leftIcon ? styles['input--has-left'] : ''
        } ${rightIcon ? styles['input--has-right'] : ''}`}
      />

      {rightIcon ? (
        <span className={styles['input__right-icon']}>{rightIcon}</span>
      ) : null}
    </div>
  );
};

export default Input;
