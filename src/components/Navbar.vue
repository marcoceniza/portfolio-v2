<script setup>
import { useCommonStore } from '@/stores/commonStore';
import { X, Menu } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';

const commonStore = useCommonStore();
const { isScrolled, mobileMenuOpen } = storeToRefs(commonStore);
</script>

<template>
    <nav :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-bg/80 backdrop-blur-lg border-b border-border py-4' : 'bg-transparent py-6'
    ]">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div class="text-2xl font-display font-bold text-brand">
                MC<span class="text-white">.</span>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex gap-8">
                <a v-for="link in commonStore.NAV_LINKS" :key="link.name" @click="commonStore.scrollToSection(link.id)"
                    class="text-sm font-medium hover:text-brand transition-colors">
                    {{ link.name }}
                </a>
            </div>

            <!-- Mobile Toggle -->
            <button class="md:hidden text-white" @click="mobileMenuOpen = !mobileMenuOpen">
                <component :is="mobileMenuOpen ? X : Menu" />
            </button>
        </div>
    </nav>
</template>