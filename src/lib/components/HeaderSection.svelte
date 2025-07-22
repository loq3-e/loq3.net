<script lang="ts">
	import type { Profile } from '$lib/data/portfolio'

	export let profile: Profile
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
		<p class="text-base text-gray-500 mb-8 leading-relaxed max-w-2xl font-light">
			{profile.bio}
		</p>
	</div>
</header>
