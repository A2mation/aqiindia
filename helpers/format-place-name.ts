export function formatPlaceName(value: string) {
    return value
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .map(word =>
            word
                .split("-")
                .map(
                    part => part.charAt(0).toUpperCase() + part.slice(1)
                )
                .join("-")
        )
        .join(" ")
}