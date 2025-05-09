import React, { useEffect, useState } from 'react';
import { Trophy, Medal } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Score {
  id: number;
  player_name: string;
  score: number;
  level: number;
  created_at: string;
}

const Ranking: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      // Buscar todas as pontuações
      const { data, error } = await supabase
        .from('scores')
        .select('*')
        .order('score', { ascending: false });

      if (error) throw error;
      if (data) {
        // Criar um Map para armazenar a maior pontuação de cada jogador
        const playerScores = new Map<string, Score>();
        
        // Iterar sobre todas as pontuações
        data.forEach((score: Score) => {
          const currentHighest = playerScores.get(score.player_name);
          if (!currentHighest || score.score > currentHighest.score) {
            playerScores.set(score.player_name, score);
          }
        });

        // Converter o Map para array e ordenar por pontuação
        const topScores = Array.from(playerScores.values())
          .sort((a: Score, b: Score) => b.score - a.score)
          .slice(0, 10); // Pegar apenas os top 10

        setScores(topScores);
      }
    } catch (error) {
      console.error('Erro ao buscar pontuações:', error);
    }
  };

  const getMedal = (position: number) => {
    switch (position) {
      case 0:
        return <Medal className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <Trophy className="w-8 h-8 text-yellow-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Ranking</h2>
      </div>

      <div className="space-y-4">
        {scores.map((score, index) => (
          <div
            key={score.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mr-3">
                {index + 1}
              </span>
              {getMedal(index)}
              <span className="ml-2 font-medium">{score.player_name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-900">{score.score}</span>
              <span className="ml-2 text-sm text-gray-500">pontos</span>
            </div>
          </div>
        ))}

        {scores.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            Nenhuma pontuação registrada ainda.
          </p>
        )}
      </div>
    </div>
  );
};

export default Ranking; 