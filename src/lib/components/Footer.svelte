<script lang="ts">
	import type { Profile } from '$lib/data/portfolio'

	export let profile: Profile
</script>

<footer class="px-6 py-12 bg-gray-900 text-white">
	<div class="max-w-5xl mx-auto text-center">
		<p class="text-gray-400">
			© 2025 {profile.name}. Built with SvelteKit, TypeScript & Tailwind CSS.
		</p>
	</div>
</footer>
