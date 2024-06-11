import React from 'react';
import WheelComponent from '../components/wheel';
import '../index.css';
import LogoSebrae from '../assets/LogoSebrae.png';
import LogoEducampo from '../assets/LogoEducampo.png';
import ClickIcon from '../assets/Click_Icon.jpeg';

import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const segments = ['nutrição', 'produção', 'consumo'];
  const segColors = ['#5B792F', '#005EB8', '#00919D'];
  const onFinished = (winner) => {
    //console.log(winner);
    setTimeout(() => {
      navigate(`/${winner}`);
    }, 600);
  };

  let rotacao = Math.floor(Math.random() * 500);

  if (rotacao < 150) {
    rotacao = 150;
  }

  console.log(rotacao);

  const responsive = false;

  return (
    <>
      <div className="main_text">
        <p>Quiz Leite</p>
      </div>
      {responsive ? (
        ''
      ) : (
        <img className="icone-click" src={ClickIcon} alt="Ícone de Clique" />
      )}

      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="#FCF4F7"
        contrastColor="white"
        buttonText=""
        isOnlyOnce={false}
        size={responsive ? 100 : 290}
        upDuration={rotacao}
        downDuration={1200}
        fontFamily="Arial"
      />
      <div className="left_img">
        <img src={LogoSebrae} alt="Logo Sebrae" />
      </div>
      <div className="right_img">
        <img src={LogoEducampo} alt="Logo Sebrae" />
      </div>
    </>
  );
};

export default App;
