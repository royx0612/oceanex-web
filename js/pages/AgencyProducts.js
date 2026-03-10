const AgencyProducts = {
  props: ['t', 'currentLang'],
  template: `
    <div>
      <!-- Page Header -->
      <section class="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="absolute bottom-10 right-20" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="80" stroke="white" stroke-width="1" rx="5"/>
            <rect x="30" y="30" width="40" height="40" stroke="white" stroke-width="1" rx="3"/>
          </svg>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('agency.pageTitle') }}</h1>
          <p class="text-white/80 text-lg mb-4">{{ t('agency.pageSubtitle') }}</p>
          <div class="flex items-center gap-2 text-white/60 text-sm">
            <router-link to="/" class="hover:text-white transition-colors">{{ t('nav.home') }}</router-link>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
            <span class="text-white/90">{{ t('agency.pageTitle') }}</span>
          </div>
        </div>
      </section>

      <!-- Vendor Cards -->
      <section v-for="(vendor, i) in t('agency.vendors')" :key="vendor.name"
        :class="i % 2 === 1 ? 'bg-gray-50' : 'bg-white'"
        class="py-16 md:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" :class="i % 2 === 1 ? 'lg:flex-row-reverse' : ''">
            <!-- Info -->
            <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-ocean-blue rounded-xl flex items-center justify-center">
                  <i data-lucide="building-2" class="w-6 h-6 text-white"></i>
                </div>
                <div>
                  <h2 class="text-2xl md:text-3xl font-bold text-gray-900">{{ vendor.name }}</h2>
                  <p class="text-sm text-gray-500">{{ vendor.nameEn }}</p>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed mb-6">{{ vendor.desc }}</p>

              <!-- Highlights -->
              <div v-if="vendor.highlights && vendor.highlights.length" class="mb-6 space-y-3">
                <div v-for="hl in vendor.highlights" :key="hl.text"
                  class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-ocean-sky rounded-lg flex items-center justify-center flex-shrink-0">
                    <i :data-lucide="hl.icon" class="w-4 h-4 text-ocean-blue"></i>
                  </div>
                  <p class="text-gray-700 text-sm leading-relaxed">{{ hl.text }}</p>
                </div>
              </div>

              <!-- Products -->
              <div v-if="vendor.products && vendor.products.length" class="mb-6">
                <h3 class="text-sm font-semibold text-ocean-blue uppercase tracking-wider mb-3">
                  {{ currentLang === 'zh-TW' ? '代理產品' : 'Products' }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <a v-for="product in vendor.products" :key="product.name"
                    :href="product.url" target="_blank" rel="noopener"
                    class="inline-flex items-center gap-1.5 px-4 py-2 bg-ocean-sky text-ocean-blue rounded-lg text-sm font-medium hover:bg-ocean-cyan hover:text-white transition-all duration-200 cursor-pointer">
                    {{ product.name }}
                    <i data-lucide="external-link" class="w-3 h-3 opacity-50"></i>
                  </a>
                </div>
              </div>

              <a :href="vendor.url" target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 bg-ocean-blue hover:bg-ocean-dark text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                {{ t('agency.visitWebsite') }}
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
            </div>

            <!-- Decorative Illustration -->
            <div :class="i % 2 === 1 ? 'lg:order-1' : ''" class="flex justify-center">
              <div class="w-64 h-64 md:w-80 md:h-80 relative">
                <svg v-if="i === 0" viewBox="0 0 300 300" class="w-full h-full">
                  <!-- Memory module illustration -->
                  <rect x="50" y="60" width="200" height="180" rx="10" fill="#E8F4F8" stroke="#1C3F97" stroke-width="2"/>
                  <rect x="70" y="80" width="40" height="50" rx="3" fill="#1C3F97" opacity="0.8"/>
                  <rect x="120" y="80" width="40" height="50" rx="3" fill="#4CB8C4" opacity="0.8"/>
                  <rect x="170" y="80" width="40" height="50" rx="3" fill="#7DD3E0" opacity="0.8"/>
                  <rect x="70" y="150" width="40" height="50" rx="3" fill="#7DD3E0" opacity="0.8"/>
                  <rect x="120" y="150" width="40" height="50" rx="3" fill="#1C3F97" opacity="0.8"/>
                  <rect x="170" y="150" width="40" height="50" rx="3" fill="#4CB8C4" opacity="0.8"/>
                  <!-- Pin connectors -->
                  <rect v-for="n in 10" :key="n" :x="55 + n * 18" y="240" width="8" height="15" rx="1" fill="#1C3F97" opacity="0.4"/>
                </svg>
                <svg v-else-if="i === 1" viewBox="0 0 300 300" class="w-full h-full">
                  <!-- SRAM chip illustration -->
                  <rect x="75" y="75" width="150" height="150" rx="8" fill="#1C3F97"/>
                  <rect x="90" y="90" width="120" height="120" rx="4" fill="#0F2259"/>
                  <circle cx="150" cy="150" r="35" fill="none" stroke="#4CB8C4" stroke-width="2"/>
                  <circle cx="150" cy="150" r="15" fill="#4CB8C4"/>
                  <!-- Pins -->
                  <rect v-for="n in 6" :key="'t'+n" :x="85 + n * 20" y="55" width="6" height="20" rx="1" fill="#7DD3E0"/>
                  <rect v-for="n in 6" :key="'b'+n" :x="85 + n * 20" y="225" width="6" height="20" rx="1" fill="#7DD3E0"/>
                  <rect v-for="n in 6" :key="'l'+n" x="55" :y="85 + n * 20" width="20" height="6" rx="1" fill="#7DD3E0"/>
                  <rect v-for="n in 6" :key="'r'+n" x="225" :y="85 + n * 20" width="20" height="6" rx="1" fill="#7DD3E0"/>
                </svg>
                <svg v-else viewBox="0 0 300 300" class="w-full h-full">
                  <!-- Flash memory illustration -->
                  <rect x="60" y="50" width="180" height="200" rx="12" fill="#E8F4F8" stroke="#4CB8C4" stroke-width="2"/>
                  <rect x="80" y="75" width="140" height="30" rx="4" fill="#1C3F97"/>
                  <text x="150" y="95" text-anchor="middle" fill="white" font-size="12" font-weight="bold">FLASH</text>
                  <rect x="80" y="120" width="60" height="40" rx="3" fill="#4CB8C4" opacity="0.6"/>
                  <rect x="155" y="120" width="60" height="40" rx="3" fill="#4CB8C4" opacity="0.6"/>
                  <rect x="80" y="175" width="60" height="40" rx="3" fill="#7DD3E0" opacity="0.6"/>
                  <rect x="155" y="175" width="60" height="40" rx="3" fill="#7DD3E0" opacity="0.6"/>
                  <!-- Connection dots -->
                  <circle v-for="n in 8" :key="n" :cx="75 + n * 20" cy="265" r="4" fill="#1C3F97" opacity="0.5"/>
                </svg>
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
