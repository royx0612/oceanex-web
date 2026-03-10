const NavBar = {
  props: ['currentLang', 't'],
  emits: ['toggle-lang'],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <router-link to="/" class="flex-shrink-0">
            <img
              :src="currentLang === 'zh-TW' ? 'assets/images/logo-zh.png' : 'assets/images/logo-en.png'"
              alt="Oceanex Technology"
              class="h-12 md:h-14 w-auto"
            />
          </router-link>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-1">
            <router-link
              to="/"
              class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-ocean-blue transition-colors rounded-md"
              :class="{ 'text-ocean-blue nav-link-active': $route.path === '/' }"
            >{{ t('nav.home') }}</router-link>

            <router-link
              to="/about"
              class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-ocean-blue transition-colors rounded-md"
              :class="{ 'text-ocean-blue nav-link-active': $route.path === '/about' }"
            >{{ t('nav.about') }}</router-link>

            <!-- Agency Dropdown -->
            <div class="relative dropdown">
              <router-link
                to="/agency"
                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-ocean-blue transition-colors rounded-md flex items-center gap-1"
                :class="{ 'text-ocean-blue nav-link-active': $route.path === '/agency' }"
              >
                {{ t('nav.agency') }}
                <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
              </router-link>
              <div class="dropdown-menu absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                <a href="https://www.teamgroupinc.com" target="_blank" rel="noopener"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue transition-colors">
                  {{ currentLang === 'zh-TW' ? '十銓科技' : 'Team Group' }}
                  <i data-lucide="external-link" class="w-3 h-3 inline ml-1 opacity-50"></i>
                </a>
                <a href="https://www.gifarlcm.com" target="_blank" rel="noopener"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue transition-colors">
                  {{ currentLang === 'zh-TW' ? '晶發科技' : 'GiFARL / ChipPlus' }}
                  <i data-lucide="external-link" class="w-3 h-3 inline ml-1 opacity-50"></i>
                </a>
                <a href="https://www.puyasemi.com/" target="_blank" rel="noopener"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue transition-colors">
                  {{ currentLang === 'zh-TW' ? '普冉科技' : 'Puya Semi' }}
                  <i data-lucide="external-link" class="w-3 h-3 inline ml-1 opacity-50"></i>
                </a>
              </div>
            </div>

            <!-- Trade Dropdown -->
            <div class="relative dropdown">
              <router-link
                to="/trade"
                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-ocean-blue transition-colors rounded-md flex items-center gap-1"
                :class="{ 'text-ocean-blue nav-link-active': $route.path === '/trade' }"
              >
                {{ t('nav.trade') }}
                <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
              </router-link>
              <div class="dropdown-menu absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                <router-link to="/trade?cat=cpu" class="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue transition-colors">CPU</router-link>
                <router-link to="/trade?cat=gpu" class="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue transition-colors">GPU</router-link>
                <router-link to="/trade?cat=memory" class="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue transition-colors">Memory</router-link>
                <router-link to="/trade?cat=lan" class="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue transition-colors">LAN</router-link>
              </div>
            </div>

            <router-link
              to="/contact"
              class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-ocean-blue transition-colors rounded-md"
              :class="{ 'text-ocean-blue nav-link-active': $route.path === '/contact' }"
            >{{ t('nav.contact') }}</router-link>
          </div>

          <!-- Right: Lang + Mobile Toggle -->
          <div class="flex items-center gap-3">
            <language-switcher :current-lang="currentLang" @toggle-lang="$emit('toggle-lang')"></language-switcher>
            <button
              @click="mobileOpen = !mobileOpen"
              class="md:hidden p-2 text-gray-700 hover:text-ocean-blue transition-colors"
              aria-label="Toggle menu"
            >
              <i :data-lucide="mobileOpen ? 'x' : 'menu'" class="w-6 h-6" :key="mobileOpen"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div v-if="mobileOpen" class="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div class="px-4 py-3 space-y-1">
            <router-link @click="mobileOpen = false" to="/"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue rounded-md transition-colors">
              {{ t('nav.home') }}
            </router-link>
            <router-link @click="mobileOpen = false" to="/about"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue rounded-md transition-colors">
              {{ t('nav.about') }}
            </router-link>
            <router-link @click="mobileOpen = false" to="/agency"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue rounded-md transition-colors">
              {{ t('nav.agency') }}
            </router-link>
            <div class="pl-8 space-y-1">
              <a href="https://www.teamgroupinc.com" target="_blank" rel="noopener"
                class="block px-4 py-2 text-sm text-gray-500 hover:text-ocean-blue">
                {{ currentLang === 'zh-TW' ? '十銓科技' : 'Team Group' }}
                <i data-lucide="external-link" class="w-3 h-3 inline ml-1"></i>
              </a>
              <a href="https://www.gifarlcm.com" target="_blank" rel="noopener"
                class="block px-4 py-2 text-sm text-gray-500 hover:text-ocean-blue">
                {{ currentLang === 'zh-TW' ? '晶發科技' : 'GiFARL / ChipPlus' }}
                <i data-lucide="external-link" class="w-3 h-3 inline ml-1"></i>
              </a>
              <a href="https://www.puyasemi.com/" target="_blank" rel="noopener"
                class="block px-4 py-2 text-sm text-gray-500 hover:text-ocean-blue">
                {{ currentLang === 'zh-TW' ? '普冉科技' : 'Puya Semi' }}
                <i data-lucide="external-link" class="w-3 h-3 inline ml-1"></i>
              </a>
            </div>
            <router-link @click="mobileOpen = false" to="/trade"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue rounded-md transition-colors">
              {{ t('nav.trade') }}
            </router-link>
            <div class="pl-8 space-y-1">
              <router-link @click="mobileOpen = false" to="/trade?cat=cpu" class="block px-4 py-2 text-sm text-gray-500 hover:text-ocean-blue">CPU</router-link>
              <router-link @click="mobileOpen = false" to="/trade?cat=gpu" class="block px-4 py-2 text-sm text-gray-500 hover:text-ocean-blue">GPU</router-link>
              <router-link @click="mobileOpen = false" to="/trade?cat=memory" class="block px-4 py-2 text-sm text-gray-500 hover:text-ocean-blue">Memory</router-link>
              <router-link @click="mobileOpen = false" to="/trade?cat=lan" class="block px-4 py-2 text-sm text-gray-500 hover:text-ocean-blue">LAN</router-link>
            </div>
            <router-link @click="mobileOpen = false" to="/contact"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-ocean-sky hover:text-ocean-blue rounded-md transition-colors">
              {{ t('nav.contact') }}
            </router-link>
          </div>
        </div>
      </transition>
    </nav>
  `,
  data() {
    return { mobileOpen: false };
  },
  watch: {
    '$route'() {
      this.mobileOpen = false;
    },
  },
  updated() {
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
};
