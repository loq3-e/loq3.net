// ポートフォリオデータ（後で編集可能）
export const profile = {
	name:     'loq3-e',
	title:    'Student',
	bio:      '鈴鹿工業高等専門学校4年',
	github:   'https://github.com/loq3-e',
}

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
	github: string
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
