import React from 'react';
import { BookOpen, Link, FileText, Video, Globe, BarChart, Download, School, Database } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'ONU - ODS 7',
      description:
        'Objetivos de Desenvolvimento Sustentável - Energia Acessível e Limpa',
      link: 'https://brasil.un.org/pt-br/sdgs/7',
      icon: FileText,
    },
    {
      title: 'IEA - Panorama Energético Mundial 2023',
      description: 'Relatório sobre o panorama energético mundial',
      link: 'https://www.iea.org/reports/world-energy-outlook-2023',
      icon: BookOpen,
    },
    {
      title: 'ANEEL - Atlas de Energia',
      description: 'Atlas de energia elétrica do Brasil',
      link: 'https://www.gov.br/aneel',
      icon: Link,
    },
    {
      title: 'Curso de Energias Renováveis',
      description: 'Curso gratuito sobre fundamentos de energias renováveis',
      link: 'https://www.coursera.org/learn/renewable-energy',
      icon: School,
    },
    {
      title: 'Base de Dados Energéticos',
      description: 'Dados estatísticos sobre energia renovável no Brasil',
      link: 'https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/balanco-energetico-nacional-2023',
      icon: Database,
    },
    {
      title: 'Documentário: A Revolução da Energia',
      description: 'Documentário sobre a transição energética global',
      link: 'https://www.youtube.com/watch?v=energy-revolution',
      icon: Video,
    },
    {
      title: 'Portal de Energia Renovável',
      description: 'Portal com notícias e atualizações sobre energia limpa',
      link: 'https://www.portal-energia.com/',
      icon: Globe,
    },
    {
      title: 'Relatório de Tendências 2024',
      description: 'Análise das tendências em energia renovável',
      link: 'https://www.irena.org/publications/2024/trends',
      icon: BarChart,
    },
    {
      title: 'Guia Prático de Energia Solar',
      description: 'Manual completo sobre instalação e manutenção de painéis solares',
      link: 'https://www.energy.gov/solar-guide',
      icon: Download,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Materiais Educacionais
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Recursos e referências para aprofundar seus conhecimentos
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-200"
          >
            <div className="flex items-center mb-4">
              <resource.icon className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">{resource.title}</h3>
            </div>
            <p className="text-gray-600">{resource.description}</p>
          </a>
        ))}
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Quer saber mais?
        </h3>
        <p className="text-gray-600 mb-4">
          Estamos constantemente atualizando nossa base de materiais. Fique atento
          para novos recursos e atualizações.
        </p>
        <p className="text-gray-600">
          Tem sugestões de materiais? Entre em contato conosco!
        </p>
      </div>
    </div>
  );
};

export default Resources;