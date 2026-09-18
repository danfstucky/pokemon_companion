import { create } from 'zustand';

const STORAGE_KEY = 'theme';

function getInitialDarkMode() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored === 'dark';
  } catch {
    // storage unavailable (private mode, blocked site data) - fall through to system preference
  }
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(darkMode) {
  document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
}

export const useUiStore = create((set) => ({
  darkMode: getInitialDarkMode(),
  setDarkMode: (darkMode) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, darkMode ? 'dark' : 'light');
    } catch {
      // non-persistent is fine
    }
    set({ darkMode });
  },
  toggleDarkMode: () => useUiStore.getState().setDarkMode(!useUiStore.getState().darkMode),
}));
