const infoVideo = {
	id: {
		1: {
			name: 'Cadastro de Usuários',
			git: 'https://github.com/PedroBrandaoSilva/Cadastro_usu-rios_Interface_React',
			info: 'Interface criada utilizando React com vite e como banco de dados e api node e mongoDb. Ela apresenta uma tela simples de login e cadastro de usuário, aplicando métodos de autenticação, evitando erros durante o uso',
		},
		2: {
			name: 'Gerenciador de usuários (admin)',
			git: 'https://github.com/PedroBrandaoSilva/cadastro-usuarios-com-React',
			info: 'Interface criada utilizando React com vite e como banco de dados e api node e mongoDb. É um gerenciador de usuários, onde o admin consegue excluir usuários cadastrados, ou cadastrar novos em seu sistema',
		},
		3: {
			name: 'Calculadora Básica',
			git: 'https://github.com/PedroBrandaoSilva/Basic-Calculator',
			info: 'Interface criada utilizando Html, Css e JavaScript. Calculadora simples, criada para colocar em prática a lógica de programação, onde ela resolverá as 4 operações básicas da matemática',
		},
		4: {
			name: 'Mini-game(JokenPô)',
			git: 'https://github.com/PedroBrandaoSilva/Jokenp--Game',
			info: 'Interface criada utilizando Html, Css e JavaScript. Mini game criado junto ao Dev Club, onde o usuario joga o famoso pedra, papel ou tesoura, contra a máquina, com mensagens interativas e sistema de pontuação.',
		},
		5: {
			name: 'LandingPages(Prestação de Serviços)',
			git: 'https://github.com/PedroBrandaoSilva?tab=repositories',
			info: 'Interfaces minimalistas criadas utilizando Html, Css e JavaScript. Landing Pages simples, para apresentação de serviço prestado, mostrando o máximo de informações que o usuário precisa para adiquirir o serviço',
		},
	},
};

function showInfo(num) {
	const name = infoVideo.id[num].name;
	const gitLink = infoVideo.id[num].git;
	const info = infoVideo.id[num].info;

	return [name, gitLink, info];
}

export default showInfo;
