<script lang="ts">
	import type { Project } from '$lib/data/portfolio'

	export let projects: Project[]
</script>

<section id="projects" class="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
	<h2 class="text-2xl font-light text-black mb-8 tracking-wide">Projects</h2>
	
	<div class="space-y-8">
		{#each projects as project}
			<div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-70">
				<div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.05)]"></div>
				
				<div class="z-10 sm:order-2 sm:col-span-6">
					<h3>
						<a 
							class="inline-flex items-baseline font-normal leading-tight text-black hover:text-gray-600 focus-visible:text-gray-600 group/link text-base" 
							href={project.link} 
							target="_blank" 
							rel="noreferrer noopener"
						>
							<span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
							<span>
								{project.title}
								<svg class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75H7.75a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
								</svg>
							</span>
						</a>
					</h3>
					<p class="mt-2 text-sm leading-normal text-gray-600 font-light">
						{project.description}
					</p>
					{#if project.demo}
						<a 
							class="relative mt-2 inline-flex items-center text-sm font-normal text-gray-500 hover:text-black focus-visible:text-black" 
							href={project.demo} 
							target="_blank" 
							rel="noreferrer noopener"
						>
							<svg viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
								<path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
								<path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
							</svg>
							<span>Live Demo</span>
						</a>
					{/if}
					<ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
						{#each project.tech as tech}
							<li class="mr-1.5 mt-2">
								<div class="flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-normal leading-5 text-gray-700">
									{tech}
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>
