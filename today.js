 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane"}); // Return the formatted date and time

    // Convert the string back into a date object and return it
    return new Date(aestTime)
};
