<script lang="ts">
	import type { Experience } from '$lib/data/portfolio'

	export let experience: Experience[]
</script>

<section class="px-6 py-16 bg-gray-50">
	<div class="max-w-5xl mx-auto">
		<h3 class="text-3xl font-light text-gray-900 mb-12 text-center">
			Experience
		</h3>
		<div class="space-y-8">
			{#each experience as exp}
				<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
						<div>
							<h4 class="text-xl font-medium text-gray-900">{exp.position}</h4>
							<p class="text-blue-600 font-medium">{exp.company}</p>
						</div>
						<span class="text-gray-600 mt-2 md:mt-0">{exp.period}</span>
					</div>
					<p class="text-gray-700 leading-relaxed">{exp.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
