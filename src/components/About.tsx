import { Leaf, Globe, Users, Award, Target, BarChart as ChartBar } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Transformando o Futuro com Energia Limpa
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore o mundo das energias renováveis e descubra como podemos construir
          um futuro mais sustentável juntos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
          <p className="text-gray-600">
            Promovemos soluções energéticas que respeitam o meio ambiente e
            garantem um futuro sustentável para as próximas gerações.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <Globe className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Impacto Global</h3>
          <p className="text-gray-600">
            Contribuímos para os Objetivos de Desenvolvimento Sustentável da ONU,
            especialmente o ODS 7 - Energia Acessível e Limpa.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Educação</h3>
          <p className="text-gray-600">
            Oferecemos recursos educativos e ferramentas interativas para
            democratizar o conhecimento sobre energias renováveis.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
            <Award className="h-6 w-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Excelência</h3>
          <p className="text-gray-600">
            Comprometidos com a qualidade e inovação em todas as nossas iniciativas
            educacionais e tecnológicas em energia renovável.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
            <Target className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Nossa Missão</h3>
          <p className="text-gray-600">
            Nossa missão é capacitar pessoas e organizações para a transição
            energética, promovendo conhecimento e tecnologias sustentáveis.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
            <ChartBar className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Nosso Impacto</h3>
          <p className="text-gray-600">
            Já impactamos mais de 10.000 pessoas com nossos recursos educacionais
            e contribuímos para a redução de 1.000 toneladas de CO2.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">A história das energias renováveis</h2>
          <p className="text-gray-600 mb-4">
            A história das energias renováveis remonta a milhares de anos, quando os primeiros humanos utilizaram o vento para navegar e a água para gerar energia. No entanto, com o advento da Revolução Industrial e a popularização dos combustíveis fósseis, o uso das energias renováveis diminuiu. Somente no século XX, com os avanços tecnológicos, como os painéis solares e turbinas eólicas, as energias renováveis voltaram a ser exploradas. No século XXI, com a crescente necessidade de enfrentar as mudanças climáticas, elas emergiram como uma alternativa viável aos combustíveis fósseis, oferecendo soluções mais limpas e renováveis para a geração de energia em um mundo cada vez mais consciente da sustentabilidade.
          </p>
          <p className="text-gray-600">
          As energias renováveis têm sido usadas desde os tempos antigos, com o vento e a água sendo aproveitados para movimentar moinhos e barcos. Com o surgimento dos combustíveis fósseis durante a Revolução Industrial, as energias renováveis ficaram em segundo plano. Foi apenas no século XX que tecnologias como a energia solar e eólica começaram a ganhar destaque. No século XXI, devido à crescente preocupação com o meio ambiente e as mudanças climáticas, essas fontes de energia voltaram a ser foco de inovação. Atualmente, as energias renováveis desempenham um papel crucial na busca por um futuro sustentável, substituindo gradualmente os combustíveis fósseis e proporcionando soluções mais limpas e acessíveis.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Números no Brasil</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-green-600 mb-3">20M</div>
                <div className="text-gray-600 text-center">Até 2024, a energia solar no Brasil beneficiou mais de 20 milhões de pessoas, proporcionando acesso à energia limpa e sustentável.</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-blue-600 mb-3">76</div>
                <div className="text-gray-600 text-center">Novos parques eólicos - 3,3 GW de capacidade adicional.</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-purple-600 mb-3">50M</div>
                <div className="text-gray-600 text-center">Desde 2012, a energia solar no Brasil evitou mais de 50 milhões de toneladas de CO₂, sendo 9 milhões em 2023.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;