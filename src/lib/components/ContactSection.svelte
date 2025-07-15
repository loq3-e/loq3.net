<script lang="ts">
	import type { Profile } from '$lib/data/portfolio'

	export let profile: Profile
</script>

<section class="px-6 py-16">
	<div class="max-w-5xl mx-auto text-center">
		<h3 class="text-3xl font-light text-gray-900 mb-8">
			Let's Work Together
		</h3>
		<p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
			I'm always interested in hearing about new opportunities and exciting projects.
		</p>
		<a
			href={profile.github}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
		>
			View GitHub Profile
			<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
			</svg>
		</a>
	</div>
</section>
