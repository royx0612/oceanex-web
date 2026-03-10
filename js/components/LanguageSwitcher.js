const LanguageSwitcher = {
  props: ['currentLang'],
  emits: ['toggle-lang'],
  template: `
    <button
      @click="$emit('toggle-lang')"
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-200 hover:border-ocean-cyan hover:text-ocean-blue transition-all duration-200"
    >
      <i data-lucide="languages" class="w-4 h-4"></i>
      <span>{{ currentLang === 'zh-TW' ? 'EN' : '中文' }}</span>
    </button>
  `,
};
