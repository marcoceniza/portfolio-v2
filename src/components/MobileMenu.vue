<script setup>
import { useCommonStore } from '@/stores/commonStore';
import { storeToRefs } from 'pinia';

const commonStore = useCommonStore();
const { mobileMenuOpen } = storeToRefs(commonStore);
</script>

<template>
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-full">
        <div v-if="mobileMenuOpen"
            class="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8 md:hidden">
            <a v-for="link in commonStore.NAV_LINKS" :key="link.name" :href="link.href" @click="mobileMenuOpen = false"
                class="text-2xl font-display font-bold hover:text-brand transition-colors">
                {{ link.name }}
            </a>
        </div>
    </Transition>
</template>