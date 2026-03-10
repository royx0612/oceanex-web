const FooterSection = {
  props: ['t'],
  template: `
    <footer class="bg-ocean-dark text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Logo & Description -->
          <div>
            <img src="assets/images/logo-en.png" alt="Oceanex" class="h-10 w-auto brightness-0 invert mb-4" />
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t('footer.desc') }}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ t('footer.quickLinks') }}</h3>
            <ul class="space-y-2">
              <li>
                <router-link to="/about" class="text-gray-300 hover:text-ocean-cyan text-sm transition-colors">
                  {{ t('nav.about') }}
                </router-link>
              </li>
              <li>
                <router-link to="/agency" class="text-gray-300 hover:text-ocean-cyan text-sm transition-colors">
                  {{ t('nav.agency') }}
                </router-link>
              </li>
              <li>
                <router-link to="/trade" class="text-gray-300 hover:text-ocean-cyan text-sm transition-colors">
                  {{ t('nav.trade') }}
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="text-gray-300 hover:text-ocean-cyan text-sm transition-colors">
                  {{ t('nav.contact') }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ t('footer.contactInfo') }}</h3>
            <ul class="space-y-3 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <i data-lucide="map-pin" class="w-4 h-4 mt-0.5 text-ocean-cyan flex-shrink-0"></i>
                <span>{{ t('contact.address') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <i data-lucide="mail" class="w-4 h-4 mt-0.5 text-ocean-cyan flex-shrink-0"></i>
                <a href="mailto:audi.lu@oceanex.com.tw" class="hover:text-ocean-cyan transition-colors">
                  audi.lu@oceanex.com.tw
                </a>
              </li>
              <li class="flex items-start gap-2">
                <i data-lucide="clock" class="w-4 h-4 mt-0.5 text-ocean-cyan flex-shrink-0"></i>
                <span>{{ t('contact.hours') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-10 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          {{ t('footer.copyright') }}
        </div>
      </div>
    </footer>
  `,
  mounted() {
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
};
