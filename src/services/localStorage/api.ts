export const setValueToLocalStorage = async (key: string, value: string) => {
    await localStorage.set(key, value);
}

export const getValueToLocalStorage = async (key: string) => {
    await localStorage.get(key);
}