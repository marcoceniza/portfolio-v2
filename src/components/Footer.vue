<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next';
</script>

<template>
	<footer class="py-12 border-t border-border">
		<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
			<div class="text-xl font-display font-bold text-brand">
				MC<span class="text-white">.</span>
			</div>
			<p class="text-sm text-gray-500">
				© {{ new Date().getFullYear() }} Marco Ceniza. All Rights Reserved.
			</p>
			<div class="flex gap-6">
				<a href="https://github.com/marcoceniza" target="_blank"
					class="text-gray-500 hover:text-brand transition-colors cursor-pointer">
					<Github class="w-5 h-5" />
				</a>
				<a href="https://linkedin.com/in/marcoceniza" target="_blank"
					class="text-gray-500 hover:text-brand transition-colors cursor-pointer">
					<Linkedin class="w-5 h-5" />
				</a>
				<a href="mailto:marcoceniza@gmail.com"
					class="text-gray-500 hover:text-brand transition-colors cursor-pointer">
					<Mail class="w-5 h-5" />
				</a>
			</div>
		</div>
	</footer>
</template>