<script lang="ts">
	import SkillsGrid from './SkillsGrid.svelte'

	export let skills: string[]
</script>

<section class="px-6 py-16">
	<div class="max-w-5xl mx-auto">
		<h3 class="text-3xl font-light text-gray-900 mb-12 text-center">
			Skills & Technologies
		</h3>
		<SkillsGrid {skills} />
	</div>
</section>
