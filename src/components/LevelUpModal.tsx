import React from 'react';
import { Star } from 'lucide-react';

interface LevelUpModalProps {
  level: number;
  onClose: () => void;
}

const LevelUpModal: React.FC<LevelUpModalProps> = ({ level, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Parabéns! Você alcançou o Nível {level}!</h2>
        <p className="mb-4">
          {level === 5 
            ? "Você completou todos os níveis! Continue testando seus conhecimentos!"
            : "Continue aprendendo sobre energia renovável!"}
        </p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal; 