import { useNavigate } from 'react-router-dom';

import styles from './BackButton.module.css';

export const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className={styles.back} onClick={goBack} title="Back">
      &#8592;
    </button>
  );
};
