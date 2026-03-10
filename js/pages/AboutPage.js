const AboutPage = {
  props: ['t', 'currentLang'],
  template: `
    <div>
      <!-- Page Header -->
      <section class="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="absolute top-10 right-20" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" stroke="white" stroke-width="1"/>
            <circle cx="60" cy="60" r="30" stroke="white" stroke-width="1"/>
          </svg>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('about.pageTitle') }}</h1>
          <div class="flex items-center gap-2 text-white/60 text-sm">
            <router-link to="/" class="hover:text-white transition-colors">{{ t('nav.home') }}</router-link>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
            <span class="text-white/90">{{ t('about.pageTitle') }}</span>
          </div>
        </div>
      </section>

      <!-- Company Profile -->
      <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ t('about.companyTitle') }}</h2>
              <div class="space-y-4">
                <p v-for="(para, i) in t('about.companyDesc')" :key="i" class="text-gray-600 leading-relaxed">
                  {{ para }}
                </p>
              </div>
            </div>
            <div class="flex justify-center">
              <!-- Decorative illustration -->
              <div class="relative w-80 h-80">
                <svg viewBox="0 0 320 320" class="w-full h-full">
                  <!-- Background circles -->
                  <circle cx="160" cy="160" r="150" fill="#E8F4F8" opacity="0.5"/>
                  <circle cx="160" cy="160" r="110" fill="#E8F4F8"/>
                  <!-- Supply chain nodes -->
                  <circle cx="160" cy="70" r="25" fill="#1C3F97" opacity="0.9"/>
                  <circle cx="80" cy="200" r="25" fill="#4CB8C4" opacity="0.9"/>
                  <circle cx="240" cy="200" r="25" fill="#7DD3E0" opacity="0.9"/>
                  <circle cx="160" cy="160" r="30" fill="#1C3F97"/>
                  <!-- Connection lines -->
                  <line x1="160" y1="95" x2="160" y2="130" stroke="#1C3F97" stroke-width="2" stroke-dasharray="4"/>
                  <line x1="100" y1="188" x2="132" y2="170" stroke="#4CB8C4" stroke-width="2" stroke-dasharray="4"/>
                  <line x1="220" y1="188" x2="188" y2="170" stroke="#7DD3E0" stroke-width="2" stroke-dasharray="4"/>
                  <!-- Center icon -->
                  <text x="160" y="167" text-anchor="middle" fill="white" font-size="24" font-weight="bold">O</text>
                  <!-- Node icons -->
                  <text x="160" y="77" text-anchor="middle" fill="white" font-size="16">IC</text>
                  <text x="80" y="207" text-anchor="middle" fill="white" font-size="12">MEM</text>
                  <text x="240" y="207" text-anchor="middle" fill="white" font-size="12">SCM</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Values -->
      <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">{{ t('about.mission.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div v-for="item in t('about.mission.items')" :key="item.title"
              class="text-center p-8">
              <div class="w-16 h-16 bg-ocean-sky rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i :data-lucide="item.icon" class="w-8 h-8 text-ocean-blue"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Business Services -->
      <section class="py-16 md:py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">{{ t('about.business.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(item, i) in t('about.business.items')" :key="i"
              class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-ocean-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-white font-bold text-sm">{{ i + 1 }}</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
  updated() {
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
};
