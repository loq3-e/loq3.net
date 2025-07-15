<script lang='ts'>
	export let skills: string[]
</script>

<div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
	{#each skills as skill}
		<div class='group bg-white border border-gray-200 p-4 rounded-lg text-center hover:shadow-md hover:border-blue-300 transition-all duration-300'>
			<span class='text-gray-800 font-medium group-hover:text-blue-600 transition-colors'>
				{skill}
			</span>
		</div>
	{/each}
</div>
