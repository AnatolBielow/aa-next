import styles from '../../styles/Home.module.scss'

export const Wave = () => {
  return (
    <div className={styles.waveWrapper}>
      <div className={[styles.wave, styles.waveOne].join(" ")}></div>
      <div className={[styles.wave, styles.waveTwo].join(" ")}></div>
      <div className={[styles.wave, styles.waveThree].join(" ")}></div>
    </div>
  );
};
