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

<header class="mb-16 pb-8 border-b border-gray-200">
	<!-- Profile Information -->
	<div class="mb-8">
		<h1 class="text-5xl font-light text-black mb-4 tracking-wide">
			{profile.name}
		</h1>
		<h2 class="text-xl font-normal text-gray-600 mb-4">
			{profile.title}
		</h2>
		<p class="text-base text-gray-500 mb-6 leading-relaxed max-w-2xl font-light">
			{profile.bio}
		</p>
		
		<!-- Social Links -->
		<div class="flex space-x-4">
			<a
				href={profile.github}
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-400 hover:text-black transition-colors duration-150"
			>
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
				</svg>
			</a>
		</div>
	</div>

	<!-- Navigation -->
	<nav>
		<ul class="flex space-x-8">
			{#each navigationItems as item}
				<li>
					<button
						on:click={() => scrollToSection(item.id)}
						class="group flex items-center text-gray-400 hover:text-black transition-colors duration-150"
						class:text-black={activeSection === item.id}
					>
						<span 
							class="w-6 h-px bg-gray-300 mr-3 transition-all duration-150 group-hover:w-12 group-hover:bg-black"
							class:w-12={activeSection === item.id}
							class:bg-black={activeSection === item.id}
						></span>
						<span class="text-sm font-medium uppercase tracking-wider">
							{item.label}
						</span>
					</button>
				</li>
			{/each}
		</ul>
	</nav>
</header>
