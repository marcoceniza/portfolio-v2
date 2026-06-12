<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next';
</script>

<template>
	<section id="contact" class="py-24 bg-card/30">
		<div class="max-w-7xl mx-auto px-6">
			<div class="grid lg:grid-cols-2 gap-16">
				<div>
					<h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
						Let's <span class="text-brand">Connect</span>
					</h2>
					<p class="text-gray-400 text-lg mb-10 leading-relaxed">
						If you have any questions or inquiries, please feel free to fill in the form below.
						I'll get back to you as soon as possible to assist you further.
					</p>

					<div class="space-y-8">
						<div class="flex items-start gap-4">
							<div
								class="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
								<Mail class="w-6 h-6" />
							</div>
							<div>
								<h4 class="text-white font-bold mb-1">Email Me</h4>
								<p class="text-gray-400">marcoceniza15@gmail.com</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div
								class="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
								<Linkedin class="w-6 h-6" />
							</div>
							<div>
								<h4 class="text-white font-bold mb-1">LinkedIn</h4>
								<p class="text-gray-400">linkedin.com/in/marcoceniza</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div
								class="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
								<Github class="w-6 h-6" />
							</div>
							<div>
								<h4 class="text-white font-bold mb-1">GitHub</h4>
								<p class="text-gray-400">github.com/marcoceniza</p>
							</div>
						</div>
					</div>
				</div>

				<div class="glass p-8 md:p-12 rounded-3xl">
					<form class="space-y-6" @submit.prevent>
						<div class="grid md:grid-cols-2 gap-6">
							<div class="space-y-2">
								<label class="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
								<input type="text" placeholder="Your Name"
									class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" />
							</div>
							<div class="space-y-2">
								<label class="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
								<input type="email" placeholder="Your Email"
									class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" />
							</div>
						</div>
						<div class="space-y-2">
							<label class="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
							<input type="text" placeholder="Project Inquiry"
								class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors" />
						</div>
						<div class="space-y-2">
							<label class="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
							<textarea rows="4" placeholder="Tell me about your project..."
								class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none" />
						</div>
						<button
							class="w-full cursor-pointer py-4 bg-brand text-bg font-bold rounded-xl hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-brand/20">
							SEND MESSAGE
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>