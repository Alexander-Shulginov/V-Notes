export function getLocalStorage(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    }
}

export function setLocalStorage<T>(key: string, data: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        throw new Error(`Error saving to localStorage: ${error}`)
    }
}
