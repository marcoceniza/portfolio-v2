<script setup>
import { ChevronRight } from 'lucide-vue-next';
import { useCommonStore } from '@/stores/commonStore';

const commonStore = useCommonStore();
</script>

<template>
    <section id="works" class="py-24">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-4">My <span class="text-brand">Works</span>
                </h2>
                <p class="text-gray-400 max-w-2xl mx-auto">
                    Throughout my career as a web developer, I have created several simple sample projects,
                    which I would like to share.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(project, i) in commonStore.PROJECTS" :key="project.title"
                    class="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-brand/30 transition-all">
                    <div class="aspect-video overflow-hidden">
                        <img :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer" />
                    </div>
                    <div class="p-8">
                        <div class="flex gap-2 mb-4">
                            <span v-for="tag in project.tags" :key="tag"
                                class="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded text-gray-400">
                                {{ tag }}
                            </span>
                        </div>
                        <h3 class="text-xl font-display font-bold mb-3 group-hover:text-brand transition-colors">
                            {{ project.title }}
                        </h3>
                        <p class="text-sm text-gray-400 mb-6 line-clamp-2">
                            {{ project.description }}
                        </p>
                        <a :href="project.link"
                            class="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand transition-colors">
                            VIEW PROJECT
                            <ChevronRight class="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>