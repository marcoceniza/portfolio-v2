<script setup>
import { useCommonStore } from '@/stores/commonStore';
import { storeToRefs } from 'pinia';
import 'animate.css';

const { typedText } = storeToRefs(useCommonStore());
</script>

<template>
    <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div class="absolute top-1/4 -left-20 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
                <h2 class="text-sm font-mono tracking-widest text-brand uppercase mb-4">Marco Ceniza</h2>
                <h1 class="text-6xl md:text-8xl font-display font-bold leading-tight mb-6">
                    Frontend <span class="text-gradient block">{{ typedText }} <span
                            class="animate-[blink_0.5s_step-end_infinite_alternate]">|</span></span>
                </h1>
                <p class="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
                    I'm a Frontend Developer passionate about building responsive and user-friendly web applications using
                    <span class="text-white font-medium">HTML</span>,
                    <span class="text-white font-medium">CSS</span>,
                    <span class="text-white font-medium">JavaScript</span>,
                    <span class="text-white font-medium">Tailwind CSS</span>,
                    <span class="text-white font-medium">Vue.js</span>,
                    <span class="text-white font-medium">React</span>,
                    <span class="text-white font-medium">Next.js</span>, and
                    <span class="text-white font-medium">Laravel</span>.
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="#contact"
                        class="px-8 py-4 bg-brand text-bg font-bold rounded-lg hover:bg-brand-dark transition-all transform hover:-translate-y-1">
                        CONTACT ME
                    </a>
                    <a href="#works"
                        class="px-8 py-4 border border-border text-white font-bold rounded-lg hover:bg-white/5 transition-all transform hover:-translate-y-1">
                        VIEW WORKS
                    </a>
                </div>
            </div>

            <div class="relative flex justify-center">
                <div class="relative w-72 h-72 md:w-96 md:h-96 group">
                    <!-- Rotated Square Background -->
                    <div
                        class="absolute inset-0 bg-brand/20 rotate-12 rounded-3xl group-hover:rotate-6 transition-transform duration-700" />
                    <div
                        class="absolute inset-0 bg-border rotate-6 rounded-3xl group-hover:rotate-3 transition-transform duration-700" />

                    <!-- Main Image Square -->
                    <div
                        class="absolute inset-0 bg-card rounded-3xl overflow-hidden border-2 border-brand/30 shadow-2xl shadow-brand/10 group-hover:rotate-0 transition-transform duration-700">
                        <img src="@/assets/my_img.jpg" alt="Marco Ceniza"
                            class="w-full h-full object-cover transition-all duration-700"
                            referrerPolicy="no-referrer" />

                        <!-- Floating Badge -->
                        <div
                            class="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                            <p class="text-white font-bold text-sm">Marco Ceniza</p>
                            <p class="text-brand text-xs font-mono">Frontend Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@keyframes blink {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}
</style>