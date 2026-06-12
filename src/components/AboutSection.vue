<script setup>
import { useCommonStore } from '@/stores/commonStore';
import { MapPin, Download, Code2, Mail } from 'lucide-vue-next';

const commonStore = useCommonStore();
</script>

<template>
	<section id="about" class="py-24 bg-card/30">
		<div class="max-w-7xl mx-auto px-6">
			<div class="grid md:grid-cols-2 gap-16 items-center">
				<div class="relative">
					<div class="aspect-square glass rounded-3xl p-8 flex items-center justify-center">
						<div
							class="relative w-full h-full bg-linear-to-br from-purple-600 to-indigo-800 rounded-2xl flex items-center justify-center overflow-hidden">
							<div
								class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)]" />
							<div class="text-white text-9xl font-bold opacity-10 select-none">VUE</div>
							<div class="relative z-10 flex flex-col items-center text-center">
								<div
									class="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 mb-4">
									<Code2 class="w-12 h-12 text-brand" />
								</div>
								<span class="font-display font-bold text-2xl tracking-tight">Frontend Dev</span>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h2 class="text-4xl font-display font-bold mb-6">
						About <span class="text-brand">Me</span>
					</h2>
					<div class="space-y-6 text-gray-400 leading-relaxed">
						<p>
							I'm a Frontend Developer with experience building responsive and user-friendly web applications using HTML, CSS, JavaScript, Tailwind CSS, Vue.js, React, Next.js, and Laravel.
						</p>
						<p>
							I utilize AI-assisted coding tools to improve productivity, streamline development workflows, and maintain clean, efficient, and high-quality code. I am committed to continuously learning and adapting to modern technologies and best practices to build scalable and maintainable web solutions.
						</p>
					</div>

					<div class="mt-8 grid grid-cols-2 gap-4">
						<div class="flex items-center gap-3 text-sm">
							<div class="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
								<MapPin class="w-5 h-5" />
							</div>
							<div>
								<p class="text-white font-medium">Location</p>
								<p class="text-xs">Cebu City, Cebu</p>
							</div>
						</div>
						<div class="flex items-center gap-3 text-sm">
							<div class="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
								<Mail class="w-5 h-5" />
							</div>
							<div>
								<p class="text-white font-medium">Email</p>
								<p class="text-xs">marcoceniza15@gmail.com</p>
							</div>
						</div>
					</div>

					<button
						class="mt-10 cursor-pointer flex items-center gap-2 px-6 py-3 bg-brand/10 text-brand font-bold rounded-lg hover:bg-brand hover:text-bg transition-all">
						<Download class="w-5 h-5" />
						DOWNLOAD RESUME
					</button>
				</div>
			</div>

			<!-- Skills Grid -->
			<div class="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
				<div v-for="(skill, i) in commonStore.SKILLS" :key="skill.name"
					class="glass p-6 rounded-2xl text-center group hover:border-brand/50 transition-all">
					<div
						class="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform">
						<component :is="skill.icon" class="w-5 h-5" />
					</div>
					<h3 class="font-medium text-white mb-1">{{ skill.name }}</h3>
				</div>
			</div>
		</div>
	</section>
</template>