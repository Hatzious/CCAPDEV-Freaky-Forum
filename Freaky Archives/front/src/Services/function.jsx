export function prettyDate(baseDate) {
    const date = new Date(baseDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${month}/${day}/${year}`;
}

export function prettyTime(baseDate) {
    const date = new Date(baseDate);

    const hours = String(date.getHours()).padStart(2, '0');

    return `${hours}`;
}
