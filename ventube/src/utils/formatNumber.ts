export const formatNumber = (number: number): string => {
    if (number >= 1_000_000) {
        return `${(number / 1_000_000).toFixed(1)}M`;
    } else if (number >= 1_000) {
        return `${(number / 1_000).toFixed(1)}K`;
    }
    return number.toString();
}