const HomePage = {
  props: ['t', 'currentLang'],
  template: `
    <div>
      <!-- Hero Banner -->
      <hero-banner :t="t"></hero-banner>

      <!-- Brand Marquee -->
      <section class="py-6 bg-ocean-sky overflow-hidden">
        <div class="marquee-track">
          <template v-for="n in 2" :key="n">
            <span v-for="brand in marqueBrands" :key="brand + n"
              class="inline-flex items-center px-8 text-ocean-blue/70 font-semibold text-lg whitespace-nowrap">
              <span class="w-2 h-2 bg-ocean-cyan rounded-full mr-4 flex-shrink-0"></span>
              {{ brand }}
            </span>
          </template>
        </div>
      </section>

      <!-- Core Services -->
      <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('services.title') }}</h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">{{ t('services.subtitle') }}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="service in t('services.items')"
              :key="service.title"
              class="bg-white rounded-xl p-8 shadow-md card-hover border border-gray-100"
            >
              <div class="w-14 h-14 bg-ocean-sky rounded-xl flex items-center justify-center mb-6">
                <i :data-lucide="service.icon" class="w-7 h-7 text-ocean-blue"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Partner Brands -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('brands.title') }}</h2>
            <p class="text-gray-600 text-lg">{{ t('brands.subtitle') }}</p>
          </div>

          <!-- Agency Brands -->
          <div class="mb-10">
            <h3 class="text-sm font-semibold text-ocean-blue uppercase tracking-wider mb-4 text-center">{{ t('brands.agency') }}</h3>
            <div class="flex flex-wrap justify-center gap-4">
              <a v-for="brand in agencyBrands" :key="brand.name" :href="brand.url" target="_blank" rel="noopener"
                class="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-ocean-cyan hover:shadow-md transition-all duration-300 text-gray-800 font-medium text-sm">
                {{ brand.name }}
                <i data-lucide="external-link" class="w-3 h-3 inline ml-1 opacity-40"></i>
              </a>
            </div>
          </div>

          <!-- Trade Brands -->
          <div>
            <h3 class="text-sm font-semibold text-ocean-blue uppercase tracking-wider mb-4 text-center">{{ t('brands.trade') }}</h3>
            <div class="flex flex-wrap justify-center gap-3">
              <span v-for="brand in tradeBrands" :key="brand"
                class="px-5 py-2.5 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-700 font-medium text-sm">
                {{ brand }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Target Markets -->
      <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('markets.title') }}</h2>
            <p class="text-gray-600 text-lg">{{ t('markets.subtitle') }}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="market in t('markets.items')" :key="market.title"
              class="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div class="w-12 h-12 bg-ocean-blue rounded-lg flex items-center justify-center mb-5">
                <i :data-lucide="market.icon" class="w-6 h-6 text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ market.title }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="client in market.clients" :key="client"
                  class="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {{ client }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-gradient py-16 md:py-24 text-white relative overflow-hidden">
        <svg class="absolute bottom-0 left-0 w-full animate-wave opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none" style="height: 50%;">
          <path fill="rgba(76, 184, 196, 0.3)" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L0,320Z"></path>
        </svg>
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('cta.title') }}</h2>
          <p class="text-lg text-white/80 mb-8">{{ t('cta.subtitle') }}</p>
          <router-link to="/contact"
            class="inline-flex items-center gap-2 bg-ocean-cyan hover:bg-ocean-light text-ocean-dark font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg">
            {{ t('cta.button') }}
            <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </router-link>
        </div>
      </section>
    </div>
  `,
  computed: {
    marqueBrands() {
      const zh = this.currentLang === 'zh-TW';
      return [
        'Intel', 'AMD', 'NVIDIA', 'Samsung', 'SK Hynix', 'Micron', 'Kingston',
        zh ? '十銓科技' : 'Team Group',
        zh ? '晶發科技' : 'GiFARL',
        zh ? '普冉科技' : 'Puya Semi',
      ];
    },
    agencyBrands() {
      return [
        { name: this.currentLang === 'zh-TW' ? '十銓科技' : 'Team Group', url: 'https://www.teamgroupinc.com' },
        { name: this.currentLang === 'zh-TW' ? '晶發科技' : 'GiFARL / ChipPlus', url: 'https://www.gifarlcm.com' },
        { name: this.currentLang === 'zh-TW' ? '普冉科技' : 'Puya Semi', url: 'https://www.puyasemi.com/' },
      ];
    },
    tradeBrands() {
      return ['Intel', 'AMD', 'NVIDIA', 'Samsung', 'SK Hynix', 'Micron', 'Kingston'];
    },
  },
  mounted() {
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
  updated() {
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
};
