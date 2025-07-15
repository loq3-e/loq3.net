<script lang="ts">
	import type { Profile } from '$lib/data/portfolio'
	import { onMount } from 'svelte'

	export let profile: Profile

	let activeSection = 'about'

	onMount(() => {
		const handleScroll = () => {
			const sections = ['about', 'experience', 'projects']
			const scrollPosition = window.scrollY + 100

			for (const section of sections) {
				const element = document.getElementById(section)
				if (element) {
					const offsetTop = element.offsetTop
					const offsetBottom = offsetTop + element.offsetHeight

					if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
						activeSection = section
						break
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	})

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const navigationItems = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' }
	]
</script>

<aside class="fixed top-0 left-0 h-screen w-1/2 max-w-md flex flex-col justify-between p-12 bg-gray-900 text-white lg:flex hidden z-10">
	<!-- Header -->
	<div>
		<h1 class="text-5xl font-bold text-slate-200 mb-4 tracking-tight">
			{profile.name}
		</h1>
		<h2 class="text-xl font-medium text-slate-200 mb-4">
			{profile.title}
		</h2>
		<p class="text-lg text-slate-400 mb-16 leading-relaxed max-w-xs">
			{profile.bio}
		</p>

		<!-- Navigation -->
		<nav class="hidden lg:block">
			<ul class="space-y-6">
				{#each navigationItems as item}
					<li>
						<button
							on:click={() => scrollToSection(item.id)}
							class="group flex items-center text-slate-500 hover:text-slate-200 transition-all duration-200"
							class:text-slate-200={activeSection === item.id}
						>
							<span 
								class="w-8 h-px bg-slate-600 mr-4 transition-all duration-200 group-hover:w-16 group-hover:bg-slate-200"
								class:w-16={activeSection === item.id}
								class:bg-slate-200={activeSection === item.id}
							></span>
							<span class="text-xs font-bold uppercase tracking-widest">
								{item.label}
							</span>
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<!-- Social Links -->
	<div class="flex space-x-6">
		<a
			href={profile.github}
			target="_blank"
			rel="noopener noreferrer"
			class="text-slate-400 hover:text-slate-200 transition-colors duration-200"
		>
			<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
			</svg>
		</a>
	</div>
</aside>

<!-- Mobile Header -->
<header class="lg:hidden bg-gray-900 text-white px-6 py-8">
	<h1 class="text-4xl font-bold text-slate-200 mb-2">
		{profile.name}
	</h1>
	<h2 class="text-lg font-medium text-slate-200 mb-2">
		{profile.title}
	</h2>
	<p class="text-slate-400 mb-6">
		{profile.bio}
	</p>
	
	<!-- Mobile Navigation -->
	<nav class="mb-6">
		<ul class="flex space-x-8">
			{#each navigationItems as item}
				<li>
					<button
						on:click={() => scrollToSection(item.id)}
						class="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
						class:text-slate-200={activeSection === item.id}
					>
						{item.label}
					</button>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Mobile Social Links -->
	<div class="flex space-x-4">
		<a
			href={profile.github}
			target="_blank"
			rel="noopener noreferrer"
			class="text-slate-400 hover:text-slate-200 transition-colors duration-200"
		>
			<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
			</svg>
		</a>
	</div>
</header>
