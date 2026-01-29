import styles from "./Option.module.css";

interface OptionProps {
  icon: any;
  text: string;
}
const option = ({ icon, text }: OptionProps) => {
  return (
    <>
      <div className={styles.optionContainer}>
        <span className={styles.icon}>{icon}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

export default option;
