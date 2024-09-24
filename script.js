// List of all question file names
const questions = [
    'questions/js_001.html',
    'questions/angular_001.html',
    'questions/angular_002.html',
    'questions/angular_003.html',
    'questions/angular_004.html',
    'questions/angular_005.html',
    'questions/angular_006.html',
    'questions/angular_007.html',
    'questions/angular_008.html',

    // Add all your question files here...
];

// Function to get a random question file from the list
function getRandomQuestionFile() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Function to load a question file and inject it into the container
function loadQuestion() {
    const questionFile = getRandomQuestionFile();
    
    // Use fetch API to load the HTML file
    fetch(questionFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            // Insert the HTML content into the question-container div
            document.getElementById('question-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the question:', error);
            document.getElementById('question-container').innerHTML = 
                '<div class="alert alert-danger">Error loading question. Please try again.</div>';
        });
}

// Load a random question on page load
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();

    // Reload a new random question when button is clicked
    document.getElementById('load-question-btn').addEventListener('click', loadQuestion);
});
