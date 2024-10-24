// Predefined explanations for each directory
const directoryExplanations = {
    "/bin": "This directory contains binary executables. Common Linux commands you need to use in single-user modes are stored here.",
    "/etc": "This directory holds configuration files and shell scripts used for system administration.",
    "/home": "Home directories for users. Each user has a directory inside /home with personal files.",
    "/var": "Stores variable data such as logs, databases, emails, and more.",
    "/usr": "Contains the majority of user utilities and applications.",
    "/root": "This is the home directory of the root user (superuser).",
    "/tmp": "Holds temporary files created by system processes or applications.",
    "/opt": "Optional application software packages are installed here."
};

// Function to show the explanation when a directory is clicked
function showExplanation(event) {
    event.preventDefault(); // Prevent link from navigating
    const directory = event.target.getAttribute("data-dir"); // Get the directory name
    const explanationText = directoryExplanations[directory]; // Look up explanation

    // Display explanation
    const explanationElement = document.getElementById("explanation-text");
    explanationElement.innerText = `${directory}: ${explanationText}`;
}
