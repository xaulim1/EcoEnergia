import { useState } from 'react';
import { BarChart3, Home, Sun, Wind, DollarSign, Clock, Lightbulb, TrendingUp } from 'lucide-react';

const Simulator = () => {
  const [consumption, setConsumption] = useState(300);
  const [solarPanels, setSolarPanels] = useState(0);
  const [windTurbines, setWindTurbines] = useState(0);
  const [tariff, setTariff] = useState(0.8); // R$/kWh

  // Cálculos
  const solarProduction = solarPanels * 30; // 30kWh por painel por mês
  const windProduction = windTurbines * 50; // 50kWh por turbina por mês
  const totalProduction = solarProduction + windProduction;
  const savings = totalProduction / consumption * 100;
  
  // Cálculos financeiros
  const monthlySavings = totalProduction * tariff;
  const solarInvestment = solarPanels * 2000; // R$ 2000 por painel
  const windInvestment = windTurbines * 15000; // R$ 15000 por turbina
  const totalInvestment = solarInvestment + windInvestment;
  const roiMonths = totalInvestment / monthlySavings;

  // Dicas personalizadas
  const getTips = () => {
    if (savings < 30) {
      return "Considere aumentar o número de painéis solares para atingir uma economia mais significativa.";
    } else if (savings > 100) {
      return "Excelente! Você está produzindo mais energia do que consome. Considere vender o excedente para a rede.";
    } else {
      return "Bom progresso! Você está no caminho certo para a autossuficiência energética.";
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simulador de Energia Renovável
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calcule o potencial de economia e investimento com energias renováveis
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg h-[400px] flex flex-col">
          <h3 className="text-2xl font-semibold h-[40px] flex items-center">
            <Home className="mr-2 h-6 w-6" /> Consumo Mensal
          </h3>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[120px] flex flex-col justify-center">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Consumo em kWh/mês
              </label>
              <input
                type="range"
                min="100"
                max="1000"
                step="10"
                value={consumption}
                onChange={(e) => setConsumption(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="h-[80px] flex items-center justify-center text-3xl font-bold text-gray-900">
              {consumption} kWh
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg h-[400px] flex flex-col">
          <h3 className="text-2xl font-semibold h-[40px] flex items-center">
            <DollarSign className="mr-2 h-6 w-6" /> Tarifa de Energia
          </h3>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[120px] flex flex-col justify-center">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Valor em R$/kWh
              </label>
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.1"
                value={tariff}
                onChange={(e) => setTariff(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="h-[80px] flex items-center justify-center text-3xl font-bold text-gray-900">
              R$ {tariff.toFixed(2)}/kWh
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg h-[400px] flex flex-col">
          <h3 className="text-2xl font-semibold h-[40px] flex items-center">
            <Sun className="mr-2 h-6 w-6" /> Painéis Solares
          </h3>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[120px] flex flex-col justify-center">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Quantidade de painéis
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={solarPanels}
                onChange={(e) => setSolarPanels(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="h-[80px] flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-gray-900">
                {solarPanels} painéis
              </div>
              <div className="text-lg text-gray-600">
                Investimento: R$ {solarInvestment.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg h-[400px] flex flex-col">
          <h3 className="text-2xl font-semibold h-[40px] flex items-center">
            <Wind className="mr-2 h-6 w-6" /> Turbinas Eólicas
          </h3>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[120px] flex flex-col justify-center">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Quantidade de turbinas
              </label>
              <input
                type="range"
                min="0"
                max="5"
                value={windTurbines}
                onChange={(e) => setWindTurbines(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="h-[80px] flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-gray-900">
                {windTurbines} turbinas
              </div>
              <div className="text-lg text-gray-600">
                Investimento: R$ {windInvestment.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg h-[400px] flex flex-col">
          <h3 className="text-2xl font-semibold h-[40px] flex items-center">
            <BarChart3 className="mr-2 h-6 w-6" /> Resultados
          </h3>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[240px] flex flex-col justify-center space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-600">Produção Total</p>
                <p className="text-3xl font-bold text-gray-900">
                  {totalProduction} kWh/mês
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600">Economia Estimada</p>
                <p className="text-3xl font-bold text-green-600">
                  {savings.toFixed(1)}%
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600">Economia Mensal</p>
                <p className="text-3xl font-bold text-green-600">
                  R$ {monthlySavings.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg h-[400px] flex flex-col">
          <h3 className="text-2xl font-semibold h-[40px] flex items-center">
            <TrendingUp className="mr-2 h-6 w-6" /> Investimento
          </h3>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[240px] flex flex-col justify-center space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-600">Investimento Total</p>
                <p className="text-3xl font-bold text-gray-900">
                  R$ {totalInvestment.toLocaleString()}
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600">Tempo de Retorno</p>
                <p className="text-3xl font-bold text-blue-600">
                  {roiMonths.toFixed(1)} meses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg h-[200px] flex flex-col">
        <h3 className="text-2xl font-semibold h-[40px] flex items-center">
          <Lightbulb className="mr-2 h-6 w-6" /> Dicas Personalizadas
        </h3>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg text-gray-600 text-center">{getTips()}</p>
        </div>
      </div>
    </div>
  );
};

export default Simulator;