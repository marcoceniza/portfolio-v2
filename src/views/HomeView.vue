<script setup>
import { onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import WorksSection from '@/components/WorksSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'
import { useCommonStore } from '@/stores/commonStore'

const { handleScroll, typeWriter } = useCommonStore()

onMounted(() => {
    const srList = ['#about', '#works', '#contact'];

    srList.forEach(className => {
        ScrollReveal().reveal(className, { delay: 500 });
    });

    window.addEventListener('scroll', handleScroll);
    typeWriter();
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
    <div class="min-h-screen bg-bg selection:bg-brand selection:text-bg">
        <Navbar />

        <MobileMenu />

        <main>
            <HeroSection />

            <AboutSection />

            <WorksSection />

            <ContactSection />
        </main>

        <Footer />
    </div>
</template>