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
			href="mailto:{profile.email}"
			class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
		>
			Get In Touch
			<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>
</section>
