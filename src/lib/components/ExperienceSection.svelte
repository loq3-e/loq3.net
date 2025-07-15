<script lang="ts">
	import type { Experience } from '$lib/data/portfolio'

	export let experience: Experience[]
</script>

<section id="experience" class="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
	<div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
		<h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
			Experience
		</h2>
	</div>
	
	<div class="space-y-12">
		{#each experience as exp}
			<div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
				<div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
				
				<header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
					{exp.period}
				</header>
				
				<div class="z-10 sm:col-span-6">
					<h3 class="font-medium leading-snug text-slate-200">
						<div>
							<span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
							<span>
								{exp.position} · {exp.company}
							</span>
						</div>
					</h3>
					
					<p class="mt-2 text-sm leading-normal text-slate-400">
						{exp.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
