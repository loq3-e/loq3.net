<script lang="ts">
	import {
		HeroSection,
		ExperienceSection,
		SkillsSection,
		ProjectsSection,
		ContactSection,
		Footer,
		profile,
		skills,
		projects,
		experience
	} from '$lib'
</script>

<svelte:head>
	<title>{profile.name} - Software Engineer Portfolio</title>
	<meta name="description" content={profile.bio} />
</svelte:head>

<main class="min-h-screen bg-white">
	<HeroSection {profile} />
	<ExperienceSection {experience} />
	<SkillsSection {skills} />
	<ProjectsSection {projects} />
	<ContactSection {profile} />
	<Footer {profile} />
</main>
