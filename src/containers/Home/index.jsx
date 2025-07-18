import { useEffect, useState, useRef } from 'react';
import useScrollAnimation from '../../components/animationScroll.js';

import Swal from 'sweetalert2';
import showInfo from '../../components/infoVideos.js';
import validator from 'validator';

import { easeIn, easeInOut, motion, scale } from 'motion/react';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import { icons } from '../../assets/icons.js';
import { video } from '../../assets/videos.js';

import {
	About,
	Avatar,
	Category,
	Container,
	Header,
	Link,
	LinkContact,
	Logo,
	Menus,
	Title,
	LinkArea,
	Name,
	FirstText,
	SkillsArea,
	Skills,
	Carousel,
	Projects,
	ProjectsArea,
	ProjectTitle,
	ContactArea,
	Contact,
	Form,
	ContactTitle,
	Footer,
	Apresentation,
	ButtonUp,
	MobileSideBar,
} from './styles';

function Home() {
	const openDocument = () => {
		window.open('/myDocument.pdf', '__blank');
	};

	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const scroll = () => {
			if (window.scrollY > 200) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', scroll);

		return () => window.removeEventListener('scroll', scroll);
	}, []);

	const goToUp = () => {
		window.scrollTo({
			top: 0,
		});
	};

	const [refApresentation, apresentationOn] = useScrollAnimation(0.1);
	const [refAbout, aboutOn] = useScrollAnimation(0.4);
	const [refSkills, skillsOn] = useScrollAnimation(0.9);

	const skillIcons = [
		icons.html,
		icons.css,
		icons.js,
		icons.react,
		icons.nodejs,
		icons.git,
		icons.express,
		icons.axios,
		icons.github,
		icons.mongodb,
		icons.mongoose,
		icons.postgresql,
		icons.sequelize,
		icons.styledComponents,
		icons.vite,
	];

	function showVideoInfo(id, index) {
		return showInfo(id)[index];
	}

	const [xOffset, setXOffset] = useState(-1300);

	useEffect(() => {
		const upgradeOffsetValue = () => {
			const windowWidth = document.documentElement.clientWidth;

			if (windowWidth > 1108) {
				setXOffset(-1500);
			} else if (windowWidth >= 944) {
				setXOffset(-1500);
			} else if (windowWidth >= 700) {
				setXOffset(-1600);
			} else if (windowWidth >= 660) {
				setXOffset(-1400);
			} else if (windowWidth >= 400) {
				setXOffset(-1300);
			} else {
				setXOffset(-1100); // ou o valor que quiser para <400px
			}
		};

		upgradeOffsetValue();
		window.addEventListener('resize', upgradeOffsetValue);

		return () => {
			window.removeEventListener('resize', upgradeOffsetValue);
		};
	}, []);

	const [active, setActive] = useState(false);

	useEffect(() => {
		const currentWidth = window.innerWidth;

		function closeSideBar() {
			if ((active && window.scrollY > 100) || (active && currentWidth > 524)) {
				setActive(false);
			}
		}

		window.addEventListener('scroll', closeSideBar);
		window.addEventListener('resize', closeSideBar);

		return () => {
			window.removeEventListener('scroll', closeSideBar);
			window.removeEventListener('resize', closeSideBar);
		};
	}, [active]);

	return (
		<Container>
			<Header>
				<Logo>
					<img src={logo} alt="Logo do Site"></img>
				</Logo>

				<Menus>
					<a href="#aboutMe">Sobre mim</a>
					<a href="#projects">Projetos</a>
					<LinkContact href="#contactMe">Contato</LinkContact>
				</Menus>

				<button
					type="button"
					className="mobileMenu"
					onClick={() => setActive(!active)}
				>
					<div></div>
					<div></div>
					<div></div>
				</button>

				<MobileSideBar className={active ? 'open' : ''}>
					<div className="options">
						<div>
							<a onClick={() => setActive(false)} href="#aboutMe">
								Sobre Mim
							</a>
						</div>
						<div>
							<a onClick={() => setActive(false)} href="#projects">
								Projetos
							</a>
						</div>
						<div>
							<a onClick={() => setActive(false)} href="#contactMe">
								Contato
							</a>
						</div>
					</div>
					<button
						type="button"
						onClick={() => setActive(false)}
						className="close"
					>
						&#10006;
					</button>
				</MobileSideBar>
			</Header>

			<Apresentation className="apresentation">
				<FirstText>
					<Name ref={refApresentation} $visible={apresentationOn}>
						<Title>PEDRO BRANDÃO</Title>
						<p>DESENVOLVEDOR FULL-STACK</p>
					</Name>

					<LinkArea ref={refApresentation} $visible={apresentationOn}>
						<Link onClick={openDocument}>Ver Currículo</Link>
						<Link href="#skills">Habilidades</Link>
					</LinkArea>
				</FirstText>
				<Avatar ref={refApresentation} $visible={apresentationOn}>
					<img src={avatar} alt="Imagem do propietário"></img>
				</Avatar>
				<motion.hr
					className="line-one"
					initial={{ opacity: 0, scale: 0.4 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
				/>
				<motion.hr
					className="line-two"
					initial={{ opacity: 0, scale: 0.4 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
				/>
			</Apresentation>

			<About ref={refAbout} $visible={aboutOn}>
				<Category id="aboutMe">Sobre mim</Category>
				<hr />
				<p>
					Estou em transição de carreira para a área de Desenvolvimento Web e,
					há mais de dois anos, venho me dedicando intensamente aos estudos e à
					prática da programação. Durante esse período, tenho aplicado os
					conhecimentos adquiridos para desenvolver projetos próprios e também
					soluções para terceiros. Utilizo as tecnologias mais atuais do
					mercado, incluindo bibliotecas e frameworks modernos, com foco na
					criação de interfaces funcionais, responsivas e com boa experiência do
					usuário. Meu objetivo é evoluir continuamente como desenvolvedor, e
					poder contribuir ao máximo em projetos futuros, sempre buscando o
					aprendizado.
				</p>
			</About>

			<SkillsArea ref={refSkills} $visible={skillsOn}>
				<Category id="skills">Habilidades</Category>
				<Carousel>
					<Skills
						key={xOffset}
						initial={{ x: 0 }}
						animate={
							skillsOn
								? {
										x: xOffset,
										transition: {
											duration: 5,
											repeat: Infinity,
											repeatType: 'reverse',
											ease: easeInOut,
										},
									}
								: {}
						}
						ref={refSkills}
						$visible={skillsOn}
					>
						<img className=" img" src={skillIcons[0]} alt="skills"></img>
						<img className=" img" src={skillIcons[1]} alt="skills"></img>
						<img className=" img" src={skillIcons[2]} alt="skills"></img>
						<img className=" img" src={skillIcons[3]} alt="skills"></img>
						<img className=" img" src={skillIcons[4]} alt="skills"></img>
						<img className=" img" src={skillIcons[5]} alt="skills"></img>
						<img className=" img" src={skillIcons[6]} alt="skills"></img>
						<img className=" img" src={skillIcons[7]} alt="skills"></img>
						<img className=" img" src={skillIcons[8]} alt="skills"></img>
						<img className=" img" src={skillIcons[9]} alt="skills"></img>
						<img className=" img" src={skillIcons[10]} alt="skills"></img>
						<img className="hidden img" src={skillIcons[11]} alt="skills"></img>
						<img className="hidden img" src={skillIcons[12]} alt="skills"></img>
						<img className="hidden img" src={skillIcons[13]} alt="skills"></img>
						<img className="hidden img" src={skillIcons[14]} alt="skills"></img>
					</Skills>
				</Carousel>
			</SkillsArea>

			<ProjectsArea
				initial={{ opacity: 0, y: 90, scale: 0.8 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.6, ease: easeIn }}
				viewport={{ once: true }}
			>
				<Category id="projects">Projetos</Category>
				<hr />

				<Projects>
					<motion.div
						initial={{ opacity: 0, x: -200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, ease: easeIn }}
						viewport={{ once: true, amount: 0.2 }}
					>
						<ProjectTitle>{showVideoInfo(1, 0)}</ProjectTitle>
						<video
							muted
							loop
							autoPlay
							playsInline
							src={video.cadastroUsuarios}
						></video>
						<div className="btnProjects">
							<Link target="_blank" href={showVideoInfo(1, 1)}>
								Ver no GitHub
							</Link>
							<Link
								onClick={() =>
									Swal.fire({
										title: showVideoInfo(1, 0),
										text: showVideoInfo(1, 2),
										showCloseButton: true,
										showConfirmButton: false,
										background: '#504f4f',
										color: '#fff',
									})
								}
							>
								Mais Informações
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, delay: 0.2, ease: easeIn }}
						viewport={{ once: true, amount: 0.5 }}
					>
						<ProjectTitle>{showVideoInfo(2, 0)}</ProjectTitle>
						<video
							muted
							loop
							autoPlay
							playsInline
							src={video.gerenciadorDeUsuarios}
						></video>
						<div className="btnProjects">
							<Link target="_blank" href={showVideoInfo(2, 1)}>
								Ver no GitHub
							</Link>
							<Link
								onClick={() =>
									Swal.fire({
										title: showVideoInfo(2, 0),
										text: showVideoInfo(2, 2),
										showCloseButton: true,
										showConfirmButton: false,
										background: '#504f4f',
										color: '#fff',
									})
								}
							>
								Mais Informações
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, ease: easeIn }}
						viewport={{ once: true, amount: 0.5 }}
					>
						<ProjectTitle>{showVideoInfo(3, 0)}</ProjectTitle>
						<video
							muted
							loop
							autoPlay
							playsInline
							src={video.calculator}
						></video>
						<div className="btnProjects">
							<Link target="_blank" href={showVideoInfo(3, 1)}>
								Ver no GitHub
							</Link>
							<Link
								onClick={() =>
									Swal.fire({
										title: showVideoInfo(3, 0),
										text: showVideoInfo(3, 2),
										showCloseButton: true,
										showConfirmButton: false,
										background: '#504f4f',
										color: '#fff',
									})
								}
							>
								Mais Informações
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, delay: 0.2, ease: easeIn }}
						viewport={{ once: true, amount: 0.5 }}
					>
						<ProjectTitle>{showVideoInfo(4, 0)}</ProjectTitle>
						<video muted loop autoPlay playsInline src={video.jokenPo}></video>
						<div className="btnProjects">
							<Link target="_blank" href={showVideoInfo(4, 1)}>
								Ver no GitHub
							</Link>
							<Link
								onClick={() =>
									Swal.fire({
										title: showVideoInfo(4, 0),
										text: showVideoInfo(4, 2),
										showCloseButton: true,
										showConfirmButton: false,
										background: '#504f4f',
										color: '#fff',
									})
								}
							>
								Mais Informações
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, ease: easeIn }}
						viewport={{ once: true, amount: 0.5 }}
					>
						<ProjectTitle>{showVideoInfo(5, 0)}</ProjectTitle>
						<video
							muted
							loop
							autoPlay
							playsInline
							src={video.layoutsWeb}
						></video>
						<div className="btnProjects">
							<Link target="_blank" href={showVideoInfo(5, 1)}>
								Ver no GitHub
							</Link>
							<Link
								onClick={() =>
									Swal.fire({
										title: showVideoInfo(5, 0),
										text: showVideoInfo(5, 2),
										showCloseButton: true,
										showConfirmButton: false,
										background: '#504f4f',
										color: '#fff',
									})
								}
							>
								Mais Informações
							</Link>
						</div>
					</motion.div>
				</Projects>
			</ProjectsArea>

			<ContactArea
				initial={{ y: 300 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.4 }}
				viewport={{ once: true }}
			>
				<ContactTitle id="contactMe">Me mande uma mensagem</ContactTitle>
				<hr />
				<Contact>
					<Form
						onSubmit={(e) => {
							e.preventDefault();
							const email = e.target.elements.email.value;
							const message = e.target.elements.message.value;

							if (!email || !message) {
								Swal.fire({
									title: 'Campos obrigatórios',
									text: 'Por favor, preencha o e-mail e a mensagem.',
									icon: 'warning',
									background: '#504f4f',
									color: '#fff',
								});
							} else if (!validator.isEmail(email)) {
								Swal.fire({
									title: 'E-mail inválido',
									text: 'Digite um e-mail válido!',
									icon: 'error',
									background: '#504f4f',
									color: '#fff',
								});
							} else {
								const phone = '5575987022058'; // ex: 5588999999999
								const text = `Olá! Meu email é ${email}. Mensagem: ${message}`;
								const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
								window.open(url, '_blank');
							}
						}}
						initial={{ scale: 0.3 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<input type="text" name="email" placeholder="Email" />
						<textarea name="message" placeholder="Digite sua mensagem" />
						<button type="submit">Enviar para o WhatsApp</button>
					</Form>
				</Contact>
			</ContactArea>

			<Footer>
				<div>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/pedro-brandao-silva/"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<path
								fill="#0078d4"
								d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
							></path>

							<path
								d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
								opacity=".05"
							></path>
							<path
								d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
								opacity=".07"
							></path>
							<path
								fill="#fff"
								d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
							></path>
						</svg>{' '}
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/Pedro_Brandao_the/#"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<radialGradient
								id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
								cx="19.38"
								cy="42.035"
								r="44.899"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stopColor="#fd5" />
								<stop offset=".328" stopColor="#ff543f" />
								<stop offset=".348" stopColor="#fc5245" />
								<stop offset=".504" stopColor="#e64771" />
								<stop offset=".643" stopColor="#d53e91" />
								<stop offset=".761" stopColor="#cc39a4" />
								<stop offset=".841" stopColor="#c837ab" />
							</radialGradient>

							<path
								fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
								d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
							/>

							<radialGradient
								id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
								cx="11.786"
								cy="5.54"
								r="29.813"
								gradientTransform="matrix(1 0 0 .6663 0 1.849)"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stopColor="#4168c9" />
								<stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
							</radialGradient>

							<path
								fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
								d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
							/>

							<path
								fill="#fff"
								d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
							/>

							<circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />

							<path
								fill="#fff"
								d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
							/>
						</svg>
					</a>

					<a target="_blank" href="https://github.com/PedroBrandaoSilva">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="48"
							height="48"
							viewBox="0 0 64 64"
						>
							<path d="M32,10c12.15,0,22,9.85,22,22c0,9.768-6.369,18.045-15.179,20.916c0.002-0.008,0.006-0.021,0.006-0.021	s-1.485-0.696-1.453-1.938c0.035-1.367,0-4.556,0-5.727c0-2.01-1.272-3.434-1.272-3.434s9.977,0.112,9.977-10.533	c0-4.107-2.147-6.245-2.147-6.245s1.128-4.385-0.39-6.245c-1.701-0.184-4.749,1.626-6.05,2.472c0,0-2.062-0.846-5.492-0.846	c-3.43,0-5.492,0.846-5.492,0.846c-1.301-0.846-4.348-2.656-6.05-2.472c-1.518,1.86-0.39,6.245-0.39,6.245s-2.147,2.137-2.147,6.245	c0,10.645,9.977,10.533,9.977,10.533s-1.005,1.136-1.225,2.806c-0.696,0.236-1.721,0.528-2.549,0.528	c-2.165,0-3.812-2.105-4.416-3.078c-0.595-0.96-1.815-1.766-2.953-1.766c-0.749,0-1.115,0.375-1.115,0.803s1.05,0.727,1.743,1.521	c1.461,1.674,1.435,5.438,6.641,5.438c0.565,0,1.719-0.139,2.588-0.256c-0.005,1.185-0.007,2.436,0.012,3.167	c0.031,1.242-1.453,1.938-1.453,1.938s0.004,0.012,0.006,0.021C16.369,50.045,10,41.768,10,32C10,19.85,19.85,10,32,10z"></path>
						</svg>
					</a>
				</div>
			</Footer>
			<ButtonUp $visible={showButton} onClick={goToUp}>
				&#x21E7;
			</ButtonUp>
		</Container>
	);
}

export default Home;
