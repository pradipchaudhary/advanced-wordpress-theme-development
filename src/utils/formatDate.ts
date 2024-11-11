// src/utils/formatDate.ts
export function formatDate(date: string) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
}
