const HeroBanner = {
  props: ['t'],
  template: `
    <section class="relative hero-gradient text-white overflow-hidden" style="min-height: 80vh;">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <svg class="absolute bottom-0 left-0 w-full animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none" style="height: 40%;">
          <path fill="rgba(76, 184, 196, 0.12)" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"></path>
        </svg>
        <svg class="absolute bottom-0 left-0 w-full animate-wave" style="animation-delay: -2s; height: 30%;" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(125, 211, 224, 0.08)" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z"></path>
        </svg>
        <!-- Circuit pattern decoration -->
        <div class="absolute top-10 right-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" stroke="white" stroke-width="1"/>
            <circle cx="100" cy="100" r="50" stroke="white" stroke-width="1"/>
            <circle cx="100" cy="100" r="20" stroke="white" stroke-width="1"/>
            <line x1="100" y1="0" x2="100" y2="200" stroke="white" stroke-width="0.5"/>
            <line x1="0" y1="100" x2="200" y2="100" stroke="white" stroke-width="0.5"/>
          </svg>
        </div>
        <div class="absolute bottom-20 left-10 opacity-10">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <rect x="25" y="25" width="100" height="100" stroke="white" stroke-width="1" rx="5"/>
            <rect x="45" y="45" width="60" height="60" stroke="white" stroke-width="1" rx="3"/>
            <line x1="75" y1="0" x2="75" y2="25" stroke="white" stroke-width="0.5"/>
            <line x1="75" y1="125" x2="75" y2="150" stroke="white" stroke-width="0.5"/>
            <line x1="0" y1="75" x2="25" y2="75" stroke="white" stroke-width="0.5"/>
            <line x1="125" y1="75" x2="150" y2="75" stroke="white" stroke-width="0.5"/>
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center" style="min-height: 80vh;">
        <div class="max-w-3xl">
          <transition name="slide" mode="out-in">
            <div :key="currentSlide">
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {{ slides[currentSlide].title }}
              </h1>
              <p class="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
                {{ slides[currentSlide].subtitle }}
              </p>
              <router-link
                :to="ctaLinks[currentSlide]"
                class="inline-flex items-center gap-2 bg-ocean-cyan hover:bg-ocean-light text-ocean-dark font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {{ slides[currentSlide].cta }}
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </router-link>
            </div>
          </transition>
        </div>

        <!-- Slide indicators -->
        <div class="flex gap-3 mt-12">
          <button
            v-for="(slide, i) in slides"
            :key="i"
            @click="goToSlide(i)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="i === currentSlide ? 'bg-ocean-cyan w-8' : 'bg-white/40 hover:bg-white/60'"
          ></button>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      currentSlide: 0,
      timer: null,
      ctaLinks: ['/about', '/agency', '/trade'],
    };
  },
  computed: {
    slides() {
      return this.t('hero.slides');
    },
  },
  mounted() {
    this.startAutoPlay();
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
  unmounted() {
    this.stopAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.timer = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
    stopAutoPlay() {
      if (this.timer) clearInterval(this.timer);
    },
    goToSlide(i) {
      this.currentSlide = i;
      this.stopAutoPlay();
      this.startAutoPlay();
    },
  },
  updated() {
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
};
