function magic() {
    const messages = [
        "✨ Believe in yourself!",
        "🌟 Every day is a new beginning.",
        "💡 Code is like magic, but real.",
        "🚀 Keep pushing forward!",
        "🎯 Focus and achieve greatness."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Example usage:
console.log(magic());