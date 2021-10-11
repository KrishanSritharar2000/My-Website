export const typingStrings = [
	"Hello ツ",
	"Welcome to my website",
	"I am Krishan",
	"I am a 3rd Year MEng Computing Student",
	"I am a Software Engineer",
	"I am a Web Developer",
	"I am an App Developer",
	"I am a Teaching Assistant",
];

export const mailAddressLink = "mailto:krishan.sritharar19@imperial.ac.uk";

export const gitHubAddress = "https://github.com/KrishanSritharar2000";
export const gitHubAddressProjects = "https://github.com/KrishanSritharar2000?tab=repositories";

export const linkedInAddress = "https://www.linkedin.com/in/krishan-sritharar";

export const TimeLineData = [
	{ year: 2015, text: 'Started my journey by discovering programming using Kodu Game Lab' },
	{ year: 2016, text: 'Created my first app: a Flappy Bird replica built using BuildBox' },
	{ year: 2017, text: 'Achieved straight A*s at GCSE - Highest mark in my school' },
	{ year: 2018, text: 'Developed a Monte Carlo Simulation for CREST project' },
	// { year: 2019, text: 'Created a Mental Maths platformer game for helping student\'s learn' },
	{ year: 2019, text: 'Started my Computing degree at Imperial College London' },
	{ year: 2020, text: 'Started workin with the awesome concept of Concurrency' },
	// { year: 2020, text: 'Attened my first Hackathon at IC Hack 20' },
	{ year: 2021, text: 'Head of Mobile Development at Vioo Inc' },
];

export const acomplishments = [
	{ number: 'First Class Honours', text: 'in First and Second years of undergraduate degree' },
	{ number: '1600+', text: 'Lifetime commits' },
	{ number: 1900, text: 'Github Followers' },
	{ number: '3 Students', text: 'I tutor for GCSE Maths, Computing and Physics' },
];

// image: '/images/inProgress.jfif',
export const projects = [
	{
		id: 0,
		title: 'Vioo App',
		description:
			'Mobile app designed, developed and deployed for Vioo completly from scratch and devleoped using Flutter. Connected with databases, restful apis and webhooks, for secure data exchange whilst reusing exisiting backend functionality for maintainability.',
		commits: 362,
		branches: 27,
		image: '/images/vioo.png',
		languages: ['Flutter', 'Dart', 'PHP', 'MySQL'],
		time: '2',
		teamSize: '1',
		code: 'https://github.com/KrishanSritharar2000/Modelling-Quantum-Gravity',
		live: 'https://apps.apple.com/gb/app/vioo-world/id1586002398',
		// live: 'https://play.google.com/store/apps/details?id=com.viooworld.app',
	},
	{
		id: 1,
		title: 'Tutor Me',
		description:
			'An integrated online tutoring platform with server-less group video conferencing, realtime messaging and shared timetabling support. WebRTC framework and WebSockets used to achieve browser based, Peer-to-Peer connections for calling.',
		commits: 243,
		branches: 13,
		image: '/images/tutorme.png',
		languages: ['Spring Boot', 'Kotin', 'JavaScript', 'PostgreSQL'],
		time: '1',
		teamSize: '4',
		code: 'https://github.com/DRP-18/tutor-me',
		live: 'http://tutor-drp.herokuapp.com/login',
	},
	{
		id: 2,
		title: 'WACC',
		description:
			'Fully functional compiler written completely from scratch for a Turing complete variant of the simple While family of languages. Added optimisations, code generation to ARM assembley and managed throughout with CI/CD pipeline.',
		commits: 940,
		branches: 57,
		image: '/images/inProgress.jfif',
		languages: ['Kotlin', 'ANTLR'],
		time: '3',
		teamSize: '4',
		code: 'https://github.com/KrishanSritharar2000/Modelling-Quantum-Gravity',
		live: '',
	},
	{
		id: 3,
		title: 'PintOS',
		description:
			'Concurrent, virtual memory supported OS framework that I extended using C. Added a MLFQS scheduling algorithm, user system calls support, virtual memory system with swap space, eviction process, lazy loading and page fault procesing.',
		commits: 395,
		branches: 45,
		image: '/images/inProgress.jfif',
		languages: ['Python', 'Golang'],
		time: '3',
		teamSize: '4',
		code: 'https://github.com/KrishanSritharar2000/CFlow',
		live: '',
	},
	{
		id: 4,
		title: 'CFlow',
		description:
			'A TensorFlow equivalent library written from scratch in C. Developers can use CFlow to make neural networks with many input and output heads.',
		commits: 58,
		branches: 1,
		image: '/images/inProgress.jfif',
		languages: ['C', 'Makefile'],
		time: '',
		teamSize: '',
		code: 'https://github.com/KrishanSritharar2000/CFlow',
		live: '',
	},
	{
		id: 5,
		title: 'Royal Chat',
		description:
			'A real-time messaging web app designed to link people together anonymously on a predetermined topic without fear of judgement or trolled.',
		commits: 122,
		branches: 1,
		image: '/images/inProgress.jfif',
		languages: ['Python', 'Golang', 'HTML'],
		time: '',
		teamSize: '',
		code: 'https://github.com/ICHACK2020/Royal-Chat',
		live: '',
	},
	{
		id: 6,
		title: 'Modelling Quantum Gravity',
		description:
			'Gold CREST Project on "Developing Computational Methods of Modelling Quantum Gravity". A Monte Carlo random walk 🎲🚶 simulation research project created using Python and Processing.',
		commits: 50,
		branches: 1,
		image: '/images/inProgress.jfif',
		languages: ['Python', 'Processing'],
		time: '',
		teamSize: '',
		code: 'https://github.com/KrishanSritharar2000/Modelling-Quantum-Gravity',
		live: '',
	},
	{
		id: 7,
		title: 'Mental Maths Game',
		description:
			'A graphical platformer-style game to develop your mental maths skills 🔢. Drive 🚗through the levels, collecting all the coins 💰 as you go along and answering all the questions ❔ as quick as you can ⏳.',
		commits: 40,
		branches: 1,
		image: '/images/inProgress.jfif',
		languages: ['Python'],
		time: '',
		teamSize: '',
		code: 'https://github.com/KrishanSritharar2000/Mental-Maths-Game',
		live: '',
	},
];