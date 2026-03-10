const ContactPage = {
  props: ['t', 'currentLang'],
  template: `
    <div>
      <!-- Page Header -->
      <section class="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('contact.pageTitle') }}</h1>
          <p class="text-white/80 text-lg mb-4">{{ t('contact.pageSubtitle') }}</p>
          <div class="flex items-center gap-2 text-white/60 text-sm">
            <router-link to="/" class="hover:text-white transition-colors">{{ t('nav.home') }}</router-link>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
            <span class="text-white/90">{{ t('contact.pageTitle') }}</span>
          </div>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('contact.formTitle') }}</h2>
              <form @submit.prevent="sendEmail" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.formName') }} *</label>
                    <input v-model="form.name" type="text" required
                      class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-cyan focus:border-ocean-cyan outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.formCompany') }}</label>
                    <input v-model="form.company" type="text"
                      class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-cyan focus:border-ocean-cyan outline-none transition-all text-sm" />
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.formEmail') }} *</label>
                    <input v-model="form.email" type="email" required
                      class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-cyan focus:border-ocean-cyan outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.formPhone') }}</label>
                    <input v-model="form.phone" type="tel"
                      class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-cyan focus:border-ocean-cyan outline-none transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.formMessage') }} *</label>
                  <textarea v-model="form.message" rows="5" required
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-cyan focus:border-ocean-cyan outline-none transition-all text-sm resize-none"></textarea>
                </div>
                <button type="submit"
                  class="inline-flex items-center gap-2 bg-ocean-blue hover:bg-ocean-dark text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  <i data-lucide="send" class="w-4 h-4"></i>
                  {{ t('contact.formSubmit') }}
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('contact.infoTitle') }}</h2>
              <div class="bg-gray-50 rounded-xl p-8 space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-ocean-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <i data-lucide="building-2" class="w-6 h-6 text-white"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ t('contact.company') }}</h3>
                    <p class="text-gray-600 text-sm">Oceanex Technology Co., Ltd.</p>
                    <p class="text-gray-500 text-xs mt-1">{{ t('contact.taxId') }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-ocean-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                    <i data-lucide="map-pin" class="w-6 h-6 text-white"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ currentLang === 'zh-TW' ? '公司地址' : 'Address' }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('contact.address') }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-ocean-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <i data-lucide="mail" class="w-6 h-6 text-white"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:audi.lu@oceanex.com.tw" class="text-ocean-blue hover:text-ocean-cyan text-sm transition-colors">
                      {{ t('contact.email') }}
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-ocean-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <i data-lucide="phone" class="w-6 h-6 text-white"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ currentLang === 'zh-TW' ? '電話' : 'Phone' }}</h3>
                    <a href="tel:+886937459758" class="text-ocean-blue hover:text-ocean-cyan text-sm transition-colors">
                      {{ t('contact.phone') }}
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-ocean-sky rounded-xl flex items-center justify-center flex-shrink-0">
                    <i data-lucide="clock" class="w-6 h-6 text-ocean-blue"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{ currentLang === 'zh-TW' ? '營業時間' : 'Business Hours' }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('contact.hours') }}</p>
                  </div>
                </div>
              </div>

              <!-- Google Map -->
              <div class="mt-6 rounded-xl overflow-hidden shadow-md border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6!2d121.4592!3d25.0138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8126cec4e59%3A0x0!2zMjXCsDAwJzQ5LjciTiAxMjHCsDI3JzMzLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1"
                  width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
      form: {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    sendEmail() {
      const subject = encodeURIComponent(
        this.currentLang === 'zh-TW'
          ? '[拓洋科技] 來自網站的訊息 - ' + this.form.name
          : '[Oceanex] Website Inquiry - ' + this.form.name
      );
      const body = encodeURIComponent(
        (this.currentLang === 'zh-TW' ? '姓名' : 'Name') + ': ' + this.form.name + '\n' +
        (this.currentLang === 'zh-TW' ? '公司' : 'Company') + ': ' + this.form.company + '\n' +
        'Email: ' + this.form.email + '\n' +
        (this.currentLang === 'zh-TW' ? '電話' : 'Phone') + ': ' + this.form.phone + '\n\n' +
        (this.currentLang === 'zh-TW' ? '訊息內容' : 'Message') + ':\n' + this.form.message
      );
      window.location.href = 'mailto:audi.lu@oceanex.com.tw?subject=' + subject + '&body=' + body;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
  updated() {
    this.$nextTick(() => { if (window.lucide) lucide.createIcons(); });
  },
};
