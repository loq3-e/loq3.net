<script lang="ts">
	export let title: string
	export let description: string
	export let tech: string[]
	export let link: string
	export let demo: string | undefined = undefined
</script>

<div class="group border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 bg-white">
	<h4 class="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
		{title}
	</h4>
	<p class="text-gray-700 mb-4 leading-relaxed">
		{description}
	</p>
	<div class="flex flex-wrap gap-2 mb-4">
		{#each tech as techItem}
			<span class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
				{techItem}
			</span>
		{/each}
	</div>
	<div class="flex space-x-4">
		<a 
			href={link} 
			target="_blank" 
			rel="noopener noreferrer"
			class="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
		>
			View Code
			<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
			</svg>
		</a>
		{#if demo}
			<a 
				href={demo} 
				target="_blank" 
				rel="noopener noreferrer"
				class="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
			>
				Live Demo
				<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
				</svg>
			</a>
		{/if}
	</div>
</div>
