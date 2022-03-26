const JOBS_STORAGE_KEY = 'JOBS_STORAGE_KEY'
const THEME_STORAGE_KEY = 'THEME_STORAGE_KEY'

const storage = {
  getJobs() {
    return JSON.parse(localStorage.getItem(JOBS_STORAGE_KEY)) || []
  },
  setJobs(jobs) {
    localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(jobs))
  },
  getTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'light'
  },
  setTheme(theme) {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }
}

export default storage