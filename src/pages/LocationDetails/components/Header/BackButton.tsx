import { HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export const BackButton = (props: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} title="Back" {...props}>
      &#8592;
    </button>
  );
};
