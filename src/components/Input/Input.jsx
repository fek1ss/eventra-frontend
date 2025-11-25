import styles from './styles.module.css';

const Input = ({ value, onChange, label, type, name }) => {
  return (
    <div className={styles.input_container}>
        <input
          className={styles.inp}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder=" "
          name={name}
        />
        <label className={styles.label}>{label}</label>
    </div>
  );
};

{
  /* <input
  className={styles.inpArea}
  type={type}
  value={value}
  onChange={e => onChange(e.target.value)}
  placeholder=" "
  name={name}
/>; */
}

{
  /* <label className={styles.label}>
      <p className={styles.label__name} style={{ color }}>
        {label}
      </p>
      {type === 'text' && (
        <input
          style={{ color: color, borderBottom: `1px solid ${color}` }}
          className={styles.inputText}
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      )}
      {type === 'date' && (
        <input
          style={{ color }}
          className={styles.inputFile}
          type="date"
          value={value || ''}
          onChange={e => onChange(e.target.value)}
        />
      )}
      {type === 'number' && (
        <input
          style={{ color, borderBottom: `1px solid ${color}` }}
          className={styles.inputNumber}
          type="number"
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
        />
      )}

      {type === 'file' && (
        <input
          style={{ color }}
          className={styles.inputFile}
          type="file"
          onChange={e => onChange(e.target.files[0])}
        />
      )}
    </label> */
}
export default Input;
