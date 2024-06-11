import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import badbeep from '../assets/bad-beep-incorrect.wav';

const RespostaErrada = () => {
  const navigate = useNavigate();
  const audio = new Audio(badbeep);

  useEffect(() => {
    audio.play();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return <h1 className="resposta-errada">Resposta Errada</h1>;
};

export default RespostaErrada;
