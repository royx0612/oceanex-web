const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/agency', component: AgencyProducts },
  { path: '/trade', component: TradeProducts },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: 'smooth' };
  },
});

const app = createApp({
  data() {
    return {
      currentLang: 'zh-TW',
    };
  },
  methods: {
    toggleLang() {
      this.currentLang = this.currentLang === 'zh-TW' ? 'en' : 'zh-TW';
      document.documentElement.lang = this.currentLang === 'zh-TW' ? 'zh-TW' : 'en';
    },
    t(key) {
      const keys = key.split('.');
      let value = siteContent[this.currentLang];
      for (const k of keys) {
        if (value === undefined) return key;
        value = value[k];
      }
      return value !== undefined ? value : key;
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (window.lucide) lucide.createIcons();
    });
  },
  updated() {
    this.$nextTick(() => {
      if (window.lucide) lucide.createIcons();
    });
  },
});

app.component('nav-bar', NavBar);
app.component('footer-section', FooterSection);
app.component('hero-banner', HeroBanner);
app.component('language-switcher', LanguageSwitcher);
app.component('scroll-to-top', ScrollToTop);

app.use(router);
app.mount('#app');
