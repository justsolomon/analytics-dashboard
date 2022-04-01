import styles from './select.module.scss';
import { ReactComponent as ArrowDownIcon } from 'assets/vectors/arrow-down.svg';

interface Option {
  value: string;
  label?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder?: string;
  icon?: React.ReactNode;
}

const Select = ({ placeholder, options, icon, ...rest }: SelectProps) => {
  return (
    <div className={styles['select-group']}>
      <select {...rest} className={styles['select']}>
        {placeholder ? <option value="">{placeholder}</option> : null}

        {options.map(({ value, label }, index) => (
          <option value={value} key={index}>
            {label || value}
          </option>
        ))}
      </select>

      <span className={styles['select__icon']}>
        {icon ?? <ArrowDownIcon />}
      </span>
    </div>
  );
};

export default Select;
