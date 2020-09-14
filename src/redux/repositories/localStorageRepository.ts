export const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = (key: string) => {
    const list = localStorage.getItem(key) || '[]';
    return JSON.parse(list);
}