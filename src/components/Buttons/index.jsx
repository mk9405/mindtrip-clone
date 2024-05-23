import styles from "./HoverButton.module.css";

export const HoverButton = ({ children, radius = "100%" }) => {
  return (
    <div
      className={styles.buttonBody}
      style={{
        borderRadius: radius,
      }}
    >
      {children}
    </div>
  );
};
