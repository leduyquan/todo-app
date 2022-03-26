const JOBS_STORAGE_KEY = 'JOBS_STORAGE_KEY'

const storage = {
  get() {
    return JSON.parse(localStorage.getItem(JOBS_STORAGE_KEY)) || []
  },
  set(jobs) {
    localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(jobs))
  }
}

export default storage