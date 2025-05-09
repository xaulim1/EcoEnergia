import { Sun, Wind, Waves, Zap, Flame, Thermometer, Battery, Trees as Tree } from 'lucide-react';

const EnergyTypes = () => {
  const energyTypes = [
    {
      title: 'Energia Solar',
      icon: Sun,
      color: 'yellow',
      description:
        'A energia solar é captada através de painéis fotovoltaicos que convertem a luz do sol em eletricidade. Também pode ser utilizada para aquecimento de água através de coletores solares térmicos.',
      image: '/images/Solar.svg',
    },
    {
      title: 'Energia Eólica',
      icon: Wind,
      color: 'blue',
      description:
        'A energia eólica é gerada pelo movimento das turbinas impulsionadas pelo vento. É uma das fontes mais eficientes e com menor impacto ambiental, ideal para regiões com bons regimes de vento.',
      image: '/images/Eólica.svg',
    },
    {
      title: 'Energia Hidrelétrica',
      icon: Waves,
      color: 'blue',
      description:
        'A energia hidrelétrica aproveita a força da água em movimento para gerar eletricidade. Inclui grandes usinas, PCHs (Pequenas Centrais Hidrelétricas) e sistemas de fio d&#39;água.',
      image: '/images/Hidrelétrica.svg',
    },
    {
      title: 'Energia da Biomassa',
      icon: Tree,
      color: 'green',
      description:
        'A biomassa utiliza matéria orgânica para gerar energia, incluindo resíduos agrícolas, florestais, urbanos e industriais. Pode ser usada para produção de biocombustíveis e bioeletricidade.',
      image: '/images/Biomassa.svg',
    },
    {
      title: 'Energia Geotérmica',
      icon: Thermometer,
      color: 'red',
      description:
        'A energia geotérmica aproveita o calor do interior da Terra para gerar eletricidade e aquecimento. É altamente eficiente e disponível 24/7, ideal para regiões com atividade geológica.',
      image: '/images/Geotérmica.svg',
    },
    {
      title: 'Energia das Marés',
      icon: Waves,
      color: 'blue',
      description:
        'A energia maremotriz aproveita o movimento das marés para gerar eletricidade. Inclui tecnologias como barragens de maré, turbinas submarinas e conversores de ondas.',
      image: '/images/Maremotriz.svg',
    },
    {
      title: 'Hidrogênio Verde',
      icon: Zap,
      color: 'green',
      description:
        'O hidrogênio verde é produzido através da eletrólise da água usando energia renovável. É considerado um vetor energético limpo, ideal para armazenamento e transporte de energia.',
      image: '/images/hidrogênio verde.svg',
    },
    {
      title: 'Energia do Biogás',
      icon: Flame,
      color: 'orange',
      description:
        'O biogás é produzido pela decomposição anaeróbica de matéria orgânica. Pode ser usado para geração de eletricidade, aquecimento e como combustível veicular.',
      image: '/images/biogás.svg',
    },
    {
      title: 'Armazenamento de Energia',
      icon: Battery,
      color: 'purple',
      description:
        'Sistemas de armazenamento como baterias, hidrelétricas reversíveis e ar comprimido são essenciais para garantir o fornecimento constante de energia renovável.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Fontes de Energia Renovável
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça as diferentes fontes de energia limpa e renovável disponíveis atualmente
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
        {energyTypes.map((type) => (
          <div
            key={type.title}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-full object-cover"
                style={{
                  aspectRatio: '16/9',
                  height: '192px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center text-white">
                  <type.icon className={`h-6 w-6 text-${type.color}-500 mr-2`} />
                  <h3 className="text-xl font-semibold">{type.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{type.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-8 rounded-lg mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Por que escolher Energias Renováveis?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Sustentabilidade</h4>
            <p className="text-gray-600">
              Fontes renováveis são inesgotáveis e têm menor impacto ambiental
              comparado a combustíveis fósseis.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Economia</h4>
            <p className="text-gray-600">
              Custos decrescentes e alta eficiência tornam as energias renováveis
              cada vez mais competitivas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Independência</h4>
            <p className="text-gray-600">
              Reduz a dependência de combustíveis fósseis e promove a autonomia
              energética local.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyTypes;