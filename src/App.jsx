import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          SENAI <span>DEV</span>
        </div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizado">Aprendizado</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#areas">Mercado</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <main>

        <section id="inicio" className="hero">

          <div className="hero-text">
            <p className="tag">
              CURSO TÉCNICO
            </p>

            <h1>
              Transforme ideias em <span>sistemas.</span>
            </h1>

            <p>
              Aprenda programação, desenvolvimento web,
              banco de dados e tecnologias utilizadas
              no mercado de trabalho.
            </p>

            <a href="#sobre" className="button">
              Conheça o curso
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              alt="Computador e tecnologia"
            />
          </div>

        </section>

        <section id="sobre" className="section">

          <div className="section-title">
            <p>SOBRE O CURSO</p>
            <h2>Desenvolvimento de Sistemas</h2>
          </div>

          <div className="about-content">

            <div className="about-box">
              <h3>O que é?</h3>
              <p>
                Desenvolvimento de Sistemas é a área responsável
                pela criação de sites, aplicativos, programas
                e sistemas utilizados por pessoas e empresas.
              </p>
            </div>

            <div className="about-box">
              <h3>Qual o objetivo?</h3>
              <p>
                O curso prepara o aluno para desenvolver
                soluções tecnológicas utilizando diferentes
                linguagens e ferramentas.
              </p>
            </div>

            <div className="about-box">
              <h3>O que faz o profissional?</h3>
              <p>
                O profissional pode desenvolver, testar,
                atualizar e realizar a manutenção de sistemas
                e aplicações.
              </p>
            </div>

          </div>

        </section>

        <section id="aprendizado" className="section dark-section">

          <div className="section-title">
            <p>APRENDIZADO</p>
            <h2>O que você aprende</h2>
          </div>

          <div className="cards">

            <div className="card">
              <div className="card-icon">01</div>
              <h3>Lógica de Programação</h3>
              <p>
                Aprenda a criar soluções utilizando
                lógica e raciocínio computacional.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">02</div>
              <h3>Desenvolvimento Web</h3>
              <p>
                Crie páginas e sistemas para a internet.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">03</div>
              <h3>Frontend</h3>
              <p>
                Desenvolva a parte visual e interativa
                das aplicações.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">04</div>
              <h3>Backend</h3>
              <p>
                Desenvolva a lógica responsável
                pelo funcionamento dos sistemas.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">05</div>
              <h3>Banco de Dados</h3>
              <p>
                Aprenda a armazenar e organizar
                informações.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">06</div>
              <h3>APIs</h3>
              <p>
                Aprenda como diferentes sistemas
                podem trocar informações.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">07</div>
              <h3>Aplicativos</h3>
              <p>
                Conheça conceitos utilizados no
                desenvolvimento de aplicações.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">08</div>
              <h3>Git e GitHub</h3>
              <p>
                Utilize ferramentas para controlar
                e organizar seus projetos.
              </p>
            </div>

          </div>

        </section>

        <section id="tecnologias" className="section">

          <div className="section-title">
            <p>TECNOLOGIAS</p>
            <h2>Ferramentas utilizadas</h2>
          </div>

          <div className="technologies">
            <div className="technology">HTML</div>
            <div className="technology">CSS</div>
            <div className="technology">JavaScript</div>
            <div className="technology">React</div>
            <div className="technology">Node.js</div>
            <div className="technology">SQL</div>
            <div className="technology">Git</div>
            <div className="technology">GitHub</div>
          </div>

        </section>

        <section id="areas" className="section dark-section">

          <div className="section-title">
            <p>MERCADO DE TRABALHO</p>
            <h2>Áreas de atuação</h2>
          </div>

          <div className="areas">

            <div className="area">
              <span>01</span>
              <div>
                <h3>Desenvolvimento Frontend</h3>
                <p>
                  Criação da parte visual e interativa
                  de sites e aplicações.
                </p>
              </div>
            </div>

            <div className="area">
              <span>02</span>
              <div>
                <h3>Desenvolvimento Backend</h3>
                <p>
                  Desenvolvimento da lógica responsável
                  pelo funcionamento dos sistemas.
                </p>
              </div>
            </div>

            <div className="area">
              <span>03</span>
              <div>
                <h3>Desenvolvimento Full Stack</h3>
                <p>
                  Trabalho envolvendo frontend e backend
                  de uma aplicação.
                </p>
              </div>
            </div>

            <div className="area">
              <span>04</span>
              <div>
                <h3>Desenvolvimento de Aplicações</h3>
                <p>
                  Criação e manutenção de diferentes
                  tipos de aplicações.
                </p>
              </div>
            </div>

            <div className="area">
              <span>05</span>
              <div>
                <h3>Banco de Dados</h3>
                <p>
                  Organização e gerenciamento das
                  informações dos sistemas.
                </p>
              </div>
            </div>

            <div className="area">
              <span>06</span>
              <div>
                <h3>Suporte e Manutenção</h3>
                <p>
                  Correção de problemas e atualização
                  de sistemas.
                </p>
              </div>
            </div>

          </div>

        </section>

        <section id="projetos" className="section">

          <div className="section-title">
            <p>PROJETOS</p>
            <h2>O que você pode desenvolver</h2>
          </div>

          <div className="project-grid">

            <div className="project-card">
              <div className="project-number">01</div>
              <h3>Sistema de Cadastro de Clientes</h3>
              <p>
                Sistema para cadastrar, consultar,
                editar e organizar clientes.
              </p>
            </div>

            <div className="project-card">
              <div className="project-number">02</div>
              <h3>Sistema de Estoque</h3>
              <p>
                Sistema para controlar produtos,
                entradas e saídas.
              </p>
            </div>

            <div className="project-card">
              <div className="project-number">03</div>
              <h3>Aplicação de Agendamentos</h3>
              <p>
                Aplicação para organizar horários
                e agendamentos.
              </p>
            </div>

            <div className="project-card">
              <div className="project-number">04</div>
              <h3>Loja Virtual</h3>
              <p>
                Sistema para apresentar produtos
                e realizar compras online.
              </p>
            </div>

            <div className="project-card">
              <div className="project-number">05</div>
              <h3>Dashboard Administrativo</h3>
              <p>
                Painel para acompanhar informações
                e dados de uma empresa.
              </p>
            </div>

            <div className="project-card">
              <div className="project-number">06</div>
              <h3>Aplicativo de Tarefas</h3>
              <p>
                Aplicação para criar, organizar
                e acompanhar tarefas.
              </p>
            </div>

          </div>

        </section>

        <section className="cta">

          <div>
            <p>COMECE SUA JORNADA</p>

            <h2>
              Seu futuro na tecnologia pode começar aqui.
            </h2>

            <span>
              Conheça o curso Técnico em Desenvolvimento
              de Sistemas e comece a construir seus
              próprios projetos.
            </span>
          </div>

          <a href="#inicio" className="button cta-button">
            Voltar ao início
          </a>

        </section>

      </main>

      <footer className="footer">

        <div>
          <h3>Técnico em Desenvolvimento de Sistemas</h3>
          <p>SENAI</p>
        </div>

        <div>
          <p>Aluno: Luan Henrique</p>
          <p>2026</p>
        </div>

      </footer>
    </>
  )
}

export default App


