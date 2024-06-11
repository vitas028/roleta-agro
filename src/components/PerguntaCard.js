import { useNavigate } from 'react-router-dom';

const PerguntaCard = ({ perguntasAleatorizadas, tema }) => {
  const navigate = useNavigate();

  const checkAnswer = (resposta) => {
    if (resposta) {
      navigate('/correct', { tema });
    } else {
      navigate('/incorrect', { state: tema });
    }
  };

  const alternativas = perguntasAleatorizadas.map((alternativa) => (
    <button
      className="botao-alternativa"
      style={{ backgroundColor: tema }}
      key={alternativa.texto}
      onMouseOver={(e) => {
        e.target.style.color = tema;
        e.target.style.border = `3px solid ${tema}`;
      }}
      onMouseLeave={(e) => {
        e.target.style.color = '#fff';
      }}
      onClick={() => {
        setTimeout(() => {
          checkAnswer(alternativa.valor);
        }, 300);
      }}
    >
      {alternativa.texto}
    </button>
  ));

  return alternativas;
};

export default PerguntaCard;
