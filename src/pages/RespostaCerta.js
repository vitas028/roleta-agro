import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import winnerbell from '../assets/winner-bell-game-show.wav';

const RespostaCerta = () => {
  const navigate = useNavigate();
  const audio = new Audio(winnerbell);

  useEffect(() => {
    audio.play();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return <h1 className="resposta-certa">Resposta Certa</h1>;
};

export default RespostaCerta;
