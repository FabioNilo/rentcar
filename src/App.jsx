import { useState, useEffect } from "react";
import {
  CheckCircle,
  Monitor,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Menu,
  X,
  Eye,
  BarChart3,
  Shield,
} from "lucide-react";

const QAObservabilityLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-orange-500">QA</span> Observability
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#solucoes"
                className="hover:text-orange-500 transition-colors"
              >
                Soluções
              </a>
              <a
                href="#diferenciais"
                className="hover:text-orange-500 transition-colors"
              >
                Diferenciais
              </a>
              <a
                href="#sobre"
                className="hover:text-orange-500 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="hover:text-orange-500 transition-colors"
              >
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-100 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#solucoes"
                  onClick={toggleMenu}
                  className="hover:text-orange-500 transition-colors"
                >
                  Soluções
                </a>
                <a
                  href="#diferenciais"
                  onClick={toggleMenu}
                  className="hover:text-orange-500 transition-colors"
                >
                  Diferenciais
                </a>
                <a
                  href="#sobre"
                  onClick={toggleMenu}
                  className="hover:text-orange-500 transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="#contato"
                  onClick={toggleMenu}
                  className="hover:text-orange-500 transition-colors"
                >
                  Contato
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full text-sm text-orange-500 mb-6">
              <Eye size={16} />
              Observabilidade em QA
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pare de descobrir bugs
              <span className="text-orange-500 block">em produção</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Integramos{" "}
              <strong className="text-orange-500">Observabilidade</strong> ao
              seu ciclo de QA, garantindo qualidade contínua desde o
              desenvolvimento até a produção.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Análise Gratuita
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-700 hover:border-orange-500 text-gray-100 font-semibold px-8 py-4 rounded-lg transition-all">
              Ver Cases de Sucesso
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">40%</div>
              <div className="text-gray-400">Redução em bugs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">5x</div>
              <div className="text-gray-400">Menor custo de correção</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-400">Empresas validaram</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              O Problema que Resolvemos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empresas perdem tempo e dinheiro corrigindo bugs em produção
              porque seus times de QA não têm visibilidade em tempo real do
              comportamento do software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800">
              <div className="text-red-400 mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Bugs Custosos em Produção
              </h3>
              <p className="text-gray-300">
                Times investem em testes automatizados, mas ainda sofrem com
                falhas críticas que poderiam ser prevenidas com observabilidade
                adequada.
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-xl border border-gray-800">
              <div className="text-red-400 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Desalinhamento de Times
              </h3>
              <p className="text-gray-300">
                DevOps/SRE usam ferramentas como Datadog e Grafana, mas QA não
                tem acesso a esses dados críticos para melhorar os testes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nossas Soluções</h2>
            <p className="text-xl text-gray-300">
              Integramos QA e Observabilidade para qualidade contínua
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-orange-500/20 p-4 rounded-lg">
                  <Monitor className="text-orange-500" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">
                    Consultoria em QA + Observabilidade
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Ajudamos empresas a integrar ferramentas de monitoramento
                    aos processos de teste e treinamos times de QA para analisar
                    dados de produção.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-orange-500" size={20} />
                      <span>Integração APM, logs e métricas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-orange-500" size={20} />
                      <span>Treinamento de times QA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="bg-orange-500/20 p-4 rounded-lg">
                  <BarChart3 className="text-orange-500" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">
                    Testes Terceirizados com Observabilidade
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Testes contínuos baseados em dados reais de produção,
                    priorizando funcionalidades com mais erros e fornecendo
                    relatórios inteligentes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-orange-500" size={20} />
                      <span>Testes baseados em dados reais</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-orange-500" size={20} />
                      <span>Relatórios com padrões de falha</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nossos Diferenciais</h2>
            <p className="text-xl text-gray-300">
              O que nos torna únicos no mercado de QA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Visibilidade Completa
              </h3>
              <p className="text-gray-300">
                Primeira consultoria a integrar Observabilidade nativamente ao
                processo de QA
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Detecção Proativa</h3>
              <p className="text-gray-300">
                Identificamos problemas antes que cheguem à produção usando
                dados em tempo real
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Qualidade Contínua</h3>
              <p className="text-gray-300">
                Garantimos qualidade desde o desenvolvimento até a produção, não
                apenas no código
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="sobre" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Sobre os Fundadores</h2>
            <p className="text-xl text-gray-300">
              Experiência real com os problemas que resolvemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">
                Ex-Engenheiro de QA
              </h3>
              <p className="text-gray-300 mb-4">
                Trabalhou em uma fintech que enfrentou um bug crítico em
                produção causando prejuízo. Percebeu que com acesso a métricas
                em tempo real, o problema teria sido detectado antes.
              </p>
              <div className="text-sm text-orange-500">
                Especialista em Quality Assurance
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">
                Especialista em DevOps
              </h3>
              <p className="text-gray-300 mb-4">
                Viu que times de SRE já usam Observabilidade para monitorar
                sistemas, mas não compartilham esses dados com QA, criando um
                gap crítico.
              </p>
              <div className="text-sm text-orange-500">
                Expert em DevOps & SRE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contato"
        className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-500"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Pronto para Transformar seu QA?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Oferecemos uma análise gratuita para identificar gaps em seu
            processo de QA e mostrar como a observabilidade pode transformar sua
            qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
              Agendar Análise Gratuita
            </button>
            <button className="border-2 border-black hover:bg-black hover:text-white text-black font-semibold px-8 py-4 rounded-lg transition-all">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-4">
              <span className="text-orange-500">QA</span> Observability
              Solutions
            </div>
            <p className="text-gray-400">
              Integrando Observabilidade ao QA para qualidade contínua
            </p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>
              &copy; 2024 QA Observability Solutions. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QAObservabilityLanding;
