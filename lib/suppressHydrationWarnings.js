// utils/suppressHydrationWarnings.js

if (process.env.NODE_ENV === "development") {
    const originalError = console.error;
    console.error = (...args) => {
        // Ignore hydration attribute mismatch warnings
        if (
            typeof args[0] === "string" &&
            args[0].includes("Extra attributes from the server")
        ) {
            return;
        }
        originalError(...args);
    };
}
