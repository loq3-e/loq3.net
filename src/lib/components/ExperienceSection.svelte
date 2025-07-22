<script lang="ts">
	import type { Experience } from '$lib/data/portfolio'

	export let experience: Experience[]
</script>

<section id="experience" class="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
	<div class="space-y-8">
		{#each experience as exp}
			<div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-70">
				<div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.05)]"></div>
				
				<header class="z-10 mb-2 mt-1 text-xs font-normal uppercase tracking-wide text-gray-500 sm:col-span-2">
					{exp.period}
				</header>
				
				<div class="z-10 sm:col-span-6">
					<h3 class="font-normal leading-snug text-black">
						<div>
							<span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
							<span>
								{exp.position} · {exp.company}
							</span>
						</div>
					</h3>
					
					<p class="mt-2 text-sm leading-normal text-gray-600 font-light">
						{exp.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
