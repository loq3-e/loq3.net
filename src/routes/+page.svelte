<script lang="ts">
	import {
		HeaderSection,
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

<div class="min-h-screen font-sans" style="padding-left: 128px; padding-right: 128px;">
	<div class="max-w-4xl mx-auto py-16">
		<HeaderSection {profile} />
		<AboutSection />
		<ExperienceSection {experience} />
		<ProjectsSection {projects} />
	</div>
</div>

<style>
	:global(html) {
		background-color: #ffffff;
		color: #374151;
	}
	
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
