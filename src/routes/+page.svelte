<script lang="ts">
	import {
		Sidebar,
		AboutSection,
		ExperienceSection,
		ProjectsSection,
		profile,
		projects,
		experience
	} from '$lib'
</script>

<svelte:head>
	<title>{profile.name} - Software Engineer Portfolio</title>
	<meta name="description" content={profile.bio} />
</svelte:head>

<div class="mx-auto min-h-screen max-w-screen-xl font-sans lg:flex lg:justify-between lg:gap-4">
	<Sidebar {profile} />
	
	<main class="px-6 py-12 md:px-12 md:py-20 lg:w-1/2 lg:py-24">
		<AboutSection />
		<ExperienceSection {experience} />
		<ProjectsSection {projects} />
	</main>
</div>

<style>
	:global(html) {
		background-color: #0f172a;
		color: #94a3b8;
	}
	
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
