// Simple function to test
function greet(name) {
    if (!name) return "Hello, Guest!";
    return `Hello, ${name}!`;
}

// Simple test runner
function runTests() {
    console.log("Running unit tests...");
    const test1 = greet("Jenkins") === "Hello, Jenkins!";
    const test2 = greet() === "Hello, Guest!";

    if (test1 && test2) {
        console.log("✅ All tests passed!");
        process.exit(0);
    } else {
        console.error("❌ Tests failed!");
        process.exit(1);
    }
}

runTests();