import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Lang {
    tag: string
    name: string
}

const availableLangs: Lang[] = [
    { tag: 'ru', name: 'Русский' },
    { tag: 'en', name: 'English' }
]

export function useLang() {
    const { locale } = useI18n()
    const currentLang = computed(() => locale.value)

    function setLang(tag: string) {
        locale.value = tag
        localStorage.setItem('lang', tag)
    }

    return {
        langs: availableLangs,
        currentLang,
        setLang
    }
}
