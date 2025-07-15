// ポートフォリオデータ（後で編集可能）
export const profile = {
	name:     'Your Name',
	title:    'Software Engineer',
	bio:      'Passionate about creating clean, efficient, and user-friendly applications. I specialize in modern web technologies and enjoy solving complex problems with elegant solutions.',
	email:    'your.email@example.com',
	github:   'https://github.com/yourusername',
	linkedin: 'https://linkedin.com/in/yourusername',
}

export const skills = [
	'JavaScript',
	'TypeScript',
	'React',
	'Svelte/SvelteKit',
	'Node.js',
	'Python',
	'PostgreSQL',
	'MongoDB',
	'Docker',
	'AWS',
	'Git',
	'TailwindCSS',
]

export const projects = [
	{
		title:       'E-Commerce Platform',
		description: 'A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
		tech:        ['TypeScript', 'SvelteKit', 'Node.js', 'PostgreSQL', 'Stripe'],
		link:        'https://github.com/yourusername/ecommerce-platform',
		demo:        'https://ecommerce-demo.com',
	},
	{
		title:       'Task Management App',
		description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		tech:        ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
		link:        'https://github.com/yourusername/task-manager',
		demo:        'https://taskmanager-demo.com',
	},
	{
		title:       'Data Visualization Dashboard',
		description: 'An interactive dashboard for data visualization and analytics with real-time charts, filtering, and export capabilities.',
		tech:        ['Python', 'FastAPI', 'React', 'D3.js', 'PostgreSQL'],
		link:        'https://github.com/yourusername/data-dashboard',
		demo:        'https://datadash-demo.com',
	},
]

export const experience = [
	{
		company:     'Tech Company',
		position:    'Senior Software Engineer',
		period:      '2022 - Present',
		description: 'Lead development of web applications using modern technologies. Mentor junior developers and contribute to architectural decisions.',
	},
	{
		company:     'Startup Inc.',
		position:    'Full Stack Developer',
		period:      '2020 - 2022',
		description: 'Developed and maintained multiple web applications. Worked closely with design and product teams to deliver high-quality features.',
	},
]

// TypeScript型定義
export interface Profile {
	name: string
	title: string
	bio: string
	email: string
	github: string
	linkedin: string
}

export interface Project {
	title: string
	description: string
	tech: string[]
	link: string
	demo?: string
}

export interface Experience {
	company: string
	position: string
	period: string
	description: string
}
