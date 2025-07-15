<script lang="ts">
	import ProjectCard from './ProjectCard.svelte'
	import type { Project } from '$lib/data/portfolio'

	export let projects: Project[]
</script>

<section class="px-6 py-16 bg-gray-50">
	<div class="max-w-5xl mx-auto">
		<h3 class="text-3xl font-light text-gray-900 mb-12 text-center">
			Featured Projects
		</h3>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<ProjectCard
					title={project.title}
					description={project.description}
					tech={project.tech}
					link={project.link}
					demo={project.demo}
				/>
			{/each}
		</div>
	</div>
</section>
