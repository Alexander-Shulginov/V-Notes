export function getLocalStorage(key: string): string {
    const value = localStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    } else {
        throw new Error(`${key} is not defined on LocalStorage`)
    }
}

export function setLocalStorage<T>(key: string, data: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        throw new Error(`Error saving to localStorage: ${error}`)
    }
}
