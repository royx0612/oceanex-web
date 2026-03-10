const ScrollToTop = {
  template: `
    <transition name="fade">
      <button
        v-if="visible"
        @click="scrollTop"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-ocean-blue text-white rounded-full shadow-lg hover:bg-ocean-cyan transition-all duration-300 flex items-center justify-center"
        aria-label="Back to top"
      >
        <i data-lucide="chevron-up" class="w-5 h-5"></i>
      </button>
    </transition>
  `,
  data() {
    return { visible: false };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.visible = window.scrollY > 300;
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
