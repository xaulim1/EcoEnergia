import React, { useState, useEffect } from 'react';
import { Trophy, Award, Star, ArrowRight } from 'lucide-react';
import useSound from 'use-sound';
import { supabase } from '../lib/supabase';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  level: number;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface Score {
  id: number;
  player_name: string;
  score: number;
  level: number;
  created_at: string;
}

interface LevelUpModalProps {
  level: number;
  onClose: () => void;
}

const questions: Question[] = [
  // Level 1 questions (Basic)
  {
    id: 1,
    text: "O que são energias renováveis?",
    options: [
      "Fontes de energia que se esgotam rapidamente",
      "Fontes de energia que se renovam naturalmente",
      "Apenas energia solar",
      "Combustíveis fósseis"
    ],
    correctAnswer: 1,
    level: 1
  },
  {
    id: 2,
    text: "Qual é a principal fonte de energia renovável no Brasil?",
    options: ["Solar", "Eólica", "Hidrelétrica", "Biomassa"],
    correctAnswer: 2,
    level: 1
  },
  {
    id: 3,
    text: "Qual destas é uma fonte de energia não renovável?",
    options: ["Solar", "Eólica", "Carvão", "Hidrelétrica"],
    correctAnswer: 2,
    level: 1
  },
  {
    id: 4,
    text: "Qual a principal vantagem das energias renováveis?",
    options: [
      "São fontes ilimitadas de energia",
      "Geram poluição",
      "São mais baratas que as fontes fósseis",
      "Não dependem do clima"
    ],
    correctAnswer: 0,
    level: 1
  },
  {
    id: 5,
    text: "Qual energia renovável é mais utilizada para geração de eletricidade no Brasil?",
    options: ["Solar", "Eólica", "Hidrelétrica", "Biomassa"],
    correctAnswer: 2,
    level: 1
  },
  // Level 2 questions (Intermediate)
  {
    id: 6,
    text: "O que é um sistema fotovoltaico off-grid?",
    options: [
      "Sistema conectado à rede elétrica",
      "Sistema independente da rede elétrica",
      "Sistema sem painéis solares",
      "Sistema sem baterias"
    ],
    correctAnswer: 1,
    level: 2
  },
  {
    id: 7,
    text: "Qual é a eficiência média de um painel solar comercial?",
    options: ["5-10%", "15-20%", "30-35%", "40-45%"],
    correctAnswer: 1,
    level: 2
  },
  {
    id: 8,
    text: "Qual é o principal componente de um sistema fotovoltaico?",
    options: ["Turbina", "Painéis solares", "Gerador", "Transformador"],
    correctAnswer: 1,
    level: 2
  },
  {
    id: 9,
    text: "O que é a irradiância solar?",
    options: [
      "A quantidade de energia solar que chega à Terra",
      "A quantidade de luz visível no ambiente",
      "A temperatura da superfície terrestre",
      "A quantidade de radiação de micro-ondas"
    ],
    correctAnswer: 0,
    level: 2
  },
  {
    id: 10,
    text: "O que é necessário para garantir o funcionamento de um sistema solar fotovoltaico?",
    options: [
      "Somente painéis solares",
      "Painéis solares, inversor e baterias",
      "Somente baterias",
      "Painéis solares e um sistema de resfriamento"
    ],
    correctAnswer: 1,
    level: 2
  },
  // Level 3 questions (Advanced)
  {
    id: 11,
    text: "O que é o efeito fotovoltaico?",
    options: [
      "Reflexão da luz solar",
      "Conversão direta de luz em eletricidade",
      "Aquecimento de água solar",
      "Armazenamento de energia térmica"
    ],
    correctAnswer: 1,
    level: 3
  },
  {
    id: 12,
    text: "Como funciona uma usina maremotriz?",
    options: [
      "Usa a força do vento",
      "Aproveita a diferença das marés",
      "Utiliza painéis solares",
      "Queima biomassa"
    ],
    correctAnswer: 1,
    level: 3
  },
  {
    id: 13,
    text: "Qual é a principal limitação da energia solar em regiões nubladas?",
    options: [
      "A produção de energia é interrompida durante a noite",
      "A eficiência dos painéis solares é reduzida pela falta de luz solar direta",
      "A umidade reduz a produção de energia",
      "Os painéis solares não funcionam sem vento"
    ],
    correctAnswer: 1,
    level: 3
  },
  {
    id: 14,
    text: "O que caracteriza uma célula solar de silício monocristalino?",
    options: [
      "Maior eficiência e custo mais baixo",
      "Maior eficiência e custo mais alto",
      "Menor eficiência e custo mais baixo",
      "Menor eficiência e custo mais alto"
    ],
    correctAnswer: 1,
    level: 3
  },
  {
    id: 15,
    text: "Qual é o principal desafio da energia solar em larga escala?",
    options: [
      "Desperdício de energia por ineficiência dos painéis",
      "Armazenamento de energia de forma eficiente",
      "Falta de interesse financeiro",
      "Custo muito alto de instalação"
    ],
    correctAnswer: 1,
    level: 3
  },
  // Level 4 questions (Expert)
  {
    id: 16,
    text: "O que é o conceito de 'Smart Grid' em sistemas de energia renovável?",
    options: [
      "Uma rede elétrica tradicional com painéis solares",
      "Uma rede elétrica inteligente que integra tecnologias digitais para melhor gerenciamento",
      "Um sistema de armazenamento de energia em baterias",
      "Uma rede de distribuição exclusiva para energia solar"
    ],
    correctAnswer: 1,
    level: 4
  },
  {
    id: 17,
    text: "Qual é o principal desafio da integração de energia eólica em larga escala?",
    options: [
      "Custo dos equipamentos",
      "Intermittência e variabilidade da geração",
      "Manutenção dos aerogeradores",
      "Espaço necessário para instalação"
    ],
    correctAnswer: 1,
    level: 4
  },
  {
    id: 18,
    text: "O que é o conceito de 'Prosumer' no contexto de energia renovável?",
    options: [
      "Apenas um consumidor de energia",
      "Apenas um produtor de energia",
      "Um consumidor que também produz energia",
      "Um profissional do setor energético"
    ],
    correctAnswer: 2,
    level: 4
  },
  {
    id: 19,
    text: "Qual tecnologia é mais promissora para armazenamento de energia em larga escala?",
    options: [
      "Baterias de lítio",
      "Baterias de fluxo redox",
      "Supercapacitores",
      "Baterias de chumbo-ácido"
    ],
    correctAnswer: 1,
    level: 4
  },
  {
    id: 20,
    text: "O que é o conceito de 'Vehicle-to-Grid' (V2G)?",
    options: [
      "Carregamento de veículos elétricos na rede",
      "Uso de veículos elétricos como fonte de energia para a rede",
      "Sistema de distribuição de energia para veículos",
      "Rede exclusiva para veículos elétricos"
    ],
    correctAnswer: 1,
    level: 4
  },

  // Level 5 questions (Master)
  {
    id: 21,
    text: "Qual é o impacto do 'Efeito Albedo' na eficiência de painéis solares?",
    options: [
      "Aumenta a eficiência devido ao reflexo da luz",
      "Diminui a eficiência devido ao aquecimento excessivo",
      "Não tem impacto significativo",
      "Causa danos permanentes aos painéis"
    ],
    correctAnswer: 1,
    level: 5
  },
  {
    id: 22,
    text: "O que é o conceito de 'Energia Renovável Distribuída'?",
    options: [
      "Geração centralizada de energia renovável",
      "Sistema de geração próximo aos pontos de consumo",
      "Distribuição de energia apenas para áreas rurais",
      "Sistema de backup para energia renovável"
    ],
    correctAnswer: 1,
    level: 5
  },
  {
    id: 23,
    text: "Qual é o papel da 'Blockchain' no setor de energia renovável?",
    options: [
      "Apenas para registro de transações",
      "Gerenciamento de contratos inteligentes e rastreamento de energia",
      "Controle de acesso aos sistemas",
      "Armazenamento de dados de consumo"
    ],
    correctAnswer: 1,
    level: 5
  },
  {
    id: 24,
    text: "O que é o conceito de 'Microgrid' em sistemas de energia renovável?",
    options: [
      "Uma rede elétrica menor que a Smart Grid",
      "Sistema independente que pode operar conectado ou isolado da rede principal",
      "Rede exclusiva para pequenas comunidades",
      "Sistema de backup para emergências"
    ],
    correctAnswer: 1,
    level: 5
  },
  {
    id: 25,
    text: "Qual é o impacto do 'Efeito de Ilha de Calor' na eficiência de sistemas solares urbanos?",
    options: [
      "Aumenta a eficiência devido ao calor adicional",
      "Diminui a eficiência devido ao aumento da temperatura ambiente",
      "Não tem impacto significativo",
      "Causa apenas problemas estéticos"
    ],
    correctAnswer: 1,
    level: 5
  }
];

const LevelUpModal: React.FC<LevelUpModalProps> = ({ level, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Parabéns! Você alcançou o Nível {level}!
        </h3>
        <p className="text-gray-600 mb-6">
          Continue assim para dominar todos os níveis de conhecimento em energia renovável!
        </p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

const Quiz: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [scores, setScores] = useState<Score[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Sound effects
  const [playSuccess] = useSound('/success.mp3');
  const [playError] = useSound('/error.mp3');
  const [playLevelUp] = useSound('/levelup.mp3');

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserData();
      fetchScores();
    }
  }, [isAuthenticated]);

  const fetchUserData = async () => {
    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (authUser) {
        const { data: userData, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', authUser.id)
          .single();

        if (error) throw error;
        if (userData) setUser(userData);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  const fetchScores = async () => {
    try {
      const { data, error } = await supabase
        .from('scores')
        .select('*')
        .order('score', { ascending: false })
        .limit(10);

      if (error) throw error;
      if (data) {
        console.log('Scores fetched:', data); // Debug log
        setScores(data);
      }
    } catch (error) {
      console.error('Erro ao buscar pontuações:', error);
    }
  };

  const getCurrentLevelQuestions = () => {
    return questions.filter(q => q.level === level);
  };

  const saveScore = async () => {
    if (!user) return;

    try {
      const scoreData = {
        player_name: user.name,
        score: score,
        level: level
      };

      console.log('Saving score:', scoreData); // Debug log

      const { error } = await supabase
        .from('scores')
        .insert([scoreData]);

      if (error) throw error;
      
      // Atualiza o ranking imediatamente após salvar
      await fetchScores();
    } catch (error) {
      console.error('Erro ao salvar pontuação:', error);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQuestionData = getCurrentLevelQuestions()[currentQuestion];
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    if (answerIndex === currentQuestionData.correctAnswer) {
      playSuccess();
      setScore(score + 10);
      setWrongAnswers(0);
    } else {
      playError();
      setWrongAnswers(wrongAnswers + 1);
    }

    // Aguarda 1 segundo antes de passar para a próxima questão
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);

      const nextQuestion = currentQuestion + 1;
      const currentLevelQuestions = getCurrentLevelQuestions();

      if (nextQuestion < currentLevelQuestions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        if (level < 5) {
          playLevelUp();
          setShowLevelUp(true);
          saveScore();
        } else {
          saveScore();
          setShowGameOver(true);
        }
      }
    }, 1000);
  };

  const handleLevelUpContinue = () => {
    setShowLevelUp(false);
    setCurrentQuestion(0);
    setLevel(level + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLevel(1);
    setShowLevelUp(false);
    setShowGameOver(false);
    setWrongAnswers(0);
  };

  const handleGameOver = () => {
    if (wrongAnswers >= 3) {
      // Se errou 3 vezes, volta ao nível 1 mantendo a pontuação
      setLevel(1);
      setCurrentQuestion(0);
      setWrongAnswers(0);
      setShowGameOver(false);
    } else {
      // Se não errou 3 vezes, reinicia o quiz
      resetQuiz();
    }
  };

  const getButtonStyle = (index: number) => {
    if (!showFeedback) {
      return "w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-500 transition-colors";
    }

    const currentQuestionData = getCurrentLevelQuestions()[currentQuestion];
    if (index === currentQuestionData.correctAnswer) {
      return "w-full text-left p-4 rounded-lg border-2 border-green-500 bg-green-50 text-green-700";
    }
    if (index === selectedAnswer && index !== currentQuestionData.correctAnswer) {
      return "w-full text-left p-4 rounded-lg border-2 border-red-500 bg-red-50 text-red-700";
    }
    return "w-full text-left p-4 rounded-lg border border-gray-200";
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Faça login para participar do Quiz
        </h2>
        <p className="text-gray-600">
          Para participar do quiz e competir no ranking, você precisa estar logado.
        </p>
      </div>
    );
  }

  if (showGameOver) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Quiz Concluído!</h2>
          <p className="text-xl mb-6">
            Sua pontuação final: <span className="font-bold">{score}</span>
          </p>
          <button
            onClick={handleGameOver}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center mx-auto"
          >
            Jogar Novamente
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {showLevelUp && (
        <LevelUpModal level={level} onClose={handleLevelUpContinue} />
      )}

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
            <span className="font-semibold">Nível {level}</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Pontuação</div>
            <div className="text-xl font-bold">{score}</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / getCurrentLevelQuestions().length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">
          {getCurrentLevelQuestions()[currentQuestion].text}
        </h2>

        <div className="space-y-3">
          {getCurrentLevelQuestions()[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showFeedback}
              className={getButtonStyle(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;