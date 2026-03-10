const TradeProducts = {
  props: ['t', 'currentLang'],
  template: `
    <div>
      <!-- Page Header -->
      <section class="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('trade.pageTitle') }}</h1>
          <p class="text-white/80 text-lg mb-4">{{ t('trade.pageSubtitle') }}</p>
          <div class="flex items-center gap-2 text-white/60 text-sm">
            <router-link to="/" class="hover:text-white transition-colors">{{ t('nav.home') }}</router-link>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
            <span class="text-white/90">{{ t('trade.pageTitle') }}</span>
          </div>
        </div>
      </section>

      <!-- Product Content -->
      <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Sidebar / Tabs -->
            <div class="lg:w-64 flex-shrink-0">
              <div class="lg:sticky lg:top-28">
                <!-- Mobile: horizontal tabs -->
                <div class="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                  <button
                    v-for="cat in categories"
                    :key="cat.id"
                    @click="activeCategory = cat.id"
                    class="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200"
                    :class="activeCategory === cat.id
                      ? 'bg-ocean-blue text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue'"
                  >
                    <i :data-lucide="cat.icon" class="w-4 h-4"></i>
                    {{ cat.name }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Content Area -->
            <div class="flex-1 min-w-0">
              <transition name="fade" mode="out-in">
                <div :key="activeCategory">
                  <div v-for="cat in categories" v-show="cat.id === activeCategory" :key="cat.id">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="w-12 h-12 bg-ocean-blue rounded-xl flex items-center justify-center">
                        <i :data-lucide="cat.icon" class="w-6 h-6 text-white"></i>
                      </div>
                      <h2 class="text-2xl md:text-3xl font-bold text-gray-900">{{ cat.name }}</h2>
                    </div>
                    <p v-if="cat.desc" class="text-gray-600 mb-8 leading-relaxed">{{ cat.desc }}</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div v-for="brand in cat.brands" :key="brand.name"
                        class="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover">
                        <div class="flex items-center gap-3 mb-3">
                          <div class="w-10 h-10 bg-ocean-sky rounded-lg flex items-center justify-center">
                            <i data-lucide="building-2" class="w-5 h-5 text-ocean-blue"></i>
                          </div>
                          <h3 class="text-lg font-semibold text-gray-900">{{ brand.name }}</h3>
                        </div>
                        <p v-if="brand.desc" class="text-gray-600 text-sm mb-4 leading-relaxed">{{ brand.desc }}</p>
                        <div v-if="brand.items && brand.items.length" class="flex flex-wrap gap-2 mb-4">
                          <span v-for="item in brand.items" :key="item"
                            class="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-md text-sm border border-gray-100">
                            {{ item }}
                          </span>
                        </div>
                        <div v-if="brand.tags && brand.tags.length" class="flex flex-wrap gap-1.5">
                          <span v-for="tag in brand.tags" :key="tag"
                            class="px-2.5 py-1 bg-ocean-sky text-ocean-blue rounded-full text-xs font-medium">
                            {{ tag }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Decorative illustration per category -->
                    <div class="mt-10 flex justify-center opacity-60">
                      <svg v-if="cat.id === 'cpu'" viewBox="0 0 400 120" class="w-full max-w-md">
                        <rect x="120" y="10" width="160" height="100" rx="8" fill="#E8F4F8" stroke="#1C3F97" stroke-width="2"/>
                        <rect x="140" y="30" width="120" height="60" rx="4" fill="#1C3F97" opacity="0.15"/>
                        <text x="200" y="67" text-anchor="middle" fill="#1C3F97" font-size="18" font-weight="bold">CPU</text>
                        <rect v-for="n in 8" :key="'t'+n" :x="125 + n * 17" y="0" width="4" height="10" fill="#4CB8C4"/>
                        <rect v-for="n in 8" :key="'b'+n" :x="125 + n * 17" y="110" width="4" height="10" fill="#4CB8C4"/>
                        <rect v-for="n in 4" :key="'l'+n" x="110" :y="20 + n * 20" width="10" height="4" fill="#4CB8C4"/>
                        <rect v-for="n in 4" :key="'r'+n" x="280" :y="20 + n * 20" width="10" height="4" fill="#4CB8C4"/>
                      </svg>
                      <svg v-else-if="cat.id === 'gpu'" viewBox="0 0 400 120" class="w-full max-w-md">
                        <rect x="50" y="15" width="300" height="90" rx="8" fill="#E8F4F8" stroke="#4CB8C4" stroke-width="2"/>
                        <rect x="70" y="30" width="80" height="60" rx="4" fill="#1C3F97" opacity="0.2"/>
                        <rect x="170" y="30" width="40" height="60" rx="4" fill="#4CB8C4" opacity="0.2"/>
                        <rect x="230" y="30" width="40" height="60" rx="4" fill="#4CB8C4" opacity="0.2"/>
                        <rect x="290" y="30" width="40" height="60" rx="4" fill="#7DD3E0" opacity="0.2"/>
                        <text x="110" y="67" text-anchor="middle" fill="#1C3F97" font-size="16" font-weight="bold">GPU</text>
                      </svg>
                      <svg v-else-if="cat.id === 'memory'" viewBox="0 0 400 120" class="w-full max-w-md">
                        <rect x="50" y="20" width="300" height="70" rx="6" fill="#E8F4F8" stroke="#7DD3E0" stroke-width="2"/>
                        <rect v-for="n in 8" :key="n" :x="60 + n * 34" y="30" width="24" height="50" rx="2" :fill="n % 2 === 0 ? '#1C3F97' : '#4CB8C4'" opacity="0.3"/>
                        <rect v-for="n in 12" :key="'p'+n" :x="65 + n * 24" y="90" width="6" height="12" rx="1" fill="#1C3F97" opacity="0.3"/>
                      </svg>
                      <svg v-else viewBox="0 0 400 120" class="w-full max-w-md">
                        <rect x="80" y="20" width="240" height="80" rx="8" fill="#E8F4F8" stroke="#4CB8C4" stroke-width="2"/>
                        <circle cx="140" cy="60" r="20" fill="#1C3F97" opacity="0.2"/>
                        <circle cx="200" cy="60" r="20" fill="#4CB8C4" opacity="0.2"/>
                        <circle cx="260" cy="60" r="20" fill="#7DD3E0" opacity="0.2"/>
                        <line x1="160" y1="60" x2="180" y2="60" stroke="#1C3F97" stroke-width="2"/>
                        <line x1="220" y1="60" x2="240" y2="60" stroke="#4CB8C4" stroke-width="2"/>
                        <text x="200" y="115" text-anchor="middle" fill="#1C3F97" font-size="12">LAN</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
      activeCategory: 'cpu',
    };
  },
  computed: {
    categories() {
      return this.t('trade.categories');
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    const cat = this.$route.query.cat;
    if (cat && ['cpu', 'gpu', 'memory', 'lan'].includes(cat)) {
      this.activeCategory = cat;
    }
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
  watch: {
    '$route.query.cat'(val) {
      if (val && ['cpu', 'gpu', 'memory', 'lan'].includes(val)) {
        this.activeCategory = val;
      }
    },
  },
  updated() {
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
};
