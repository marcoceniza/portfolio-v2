import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Code2, Database, Layout, Server } from 'lucide-vue-next';

export const useCommonStore = defineStore('common', () => {
    const NAV_LINKS = [
        { name: 'Home', id: '#home' },
        { name: 'About', id: '#about' },
        { name: 'Works', id: '#works' },
        { name: 'Resume', id: '#resume' },
        { name: 'Contact', id: '#contact' },
    ]

    const PROJECTS = [
        {
            title: 'Todo Application',
            description: 'A robust task management system built with Laravel and Vue.js, featuring real-time updates and categorization.',
            image: 'https://picsum.photos/seed/todo/800/600',
            tags: ['Laravel', 'Vue.js', 'MySQL'],
            link: '#'
        },
        {
            title: 'Image Upload System',
            description: 'A secure image hosting and management platform with drag-and-drop functionality and cloud storage integration.',
            image: 'https://picsum.photos/seed/upload/800/600',
            tags: ['Vue.js', 'PHP', 'Tailwind'],
            link: '#'
        },
        {
            title: 'E-commerce Dashboard',
            description: 'A comprehensive admin panel for managing products, orders, and analytics with interactive charts.',
            image: 'https://picsum.photos/seed/dashboard/800/600',
            tags: ['Laravel', 'Vue.js', 'Chart.js'],
            link: '#'
        }
    ]

    const SKILLS = [
        { name: 'Vue.js', icon: Layout, level: 'Expert' },
        { name: 'React', icon: Code2, level: 'Expert' },
        { name: 'Next.js', icon: Server, level: 'Expert' },
        { name: 'Tailwind CSS', icon: Layout, level: 'Advanced' },
        { name: 'MySQL', icon: Database, level: 'Expert' },
        { name: 'Laravel', icon: Server, level: 'Expert' },
    ]

    const isScrolled = ref(false);
    const mobileMenuOpen = ref(false);
    const fullText = ref('DEVELOPER');
    const typedText = ref('');

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 50
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const typeWriter = () => {
        let i = 0;

        const typingInterval = setInterval(() => {
            typedText.value += fullText.value[i];
            i++;

            if (i === fullText.value.length) {
                clearInterval(typingInterval);
            }
        }, 250);
    }

    return {
        NAV_LINKS,
        PROJECTS,
        SKILLS,
        isScrolled,
        mobileMenuOpen,
        handleScroll,
        scrollToSection,
        typeWriter,
        fullText,
        typedText
    }
})
