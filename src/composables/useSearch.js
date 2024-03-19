import { ref } from 'vue'

export default function useSearch() {
  const isSearchOpen = ref(false)
  function toggleSearch() {
    console.log(isSearchOpen.value)
    isSearchOpen.value = !isSearchOpen.value
  }

  function closeSearch() {
    console.log('Close')
    isSearchOpen.value = false
  }
  function openSearch() {
    console.log('Open')
    isSearchOpen.value = true
  }
  return {
    isSearchOpen,
    toggleSearch,
    openSearch,
    closeSearch
  }
}
