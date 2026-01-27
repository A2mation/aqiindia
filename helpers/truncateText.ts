export function truncateText(text: string, maxLength: number) {
    // Split the text into an array of words
    let words = text.split(' ');

    // If the number of words is less than or equal to the maxLength, return the original text
    if (words.length <= maxLength) {
        return text;
    }

    // Otherwise, truncate the text and append '...' at the end
    return words.slice(0, maxLength).join(' ') + '...';
}