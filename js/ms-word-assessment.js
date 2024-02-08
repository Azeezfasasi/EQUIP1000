function calculateScore() {
    var score = 0;

    // Question 1
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "Insert page breaks before each section and apply different formatting.") {
        score += 1;
    }

    // Question 2
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === "Use the chart creation tool independently of the table.") {
        score += 1;
    }

    // Question 3
    var q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === "Use the Insert Table menu and specify desired number of rows and columns.") {
        score += 1;
    }

    // Question 4
    var q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === "In the Page Layout tab, under background and header/footer options.") {
        score += 1;
    }

    // Question 5
    var q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q5Answer.value === "Utilize the Undo button repeatedly until you reach the desired point.") {
        score += 1;
    }

    // Question 6
    var q6Answer = document.querySelector('input[name="q6"]:checked');
    if (q6Answer && q6Answer.value === "Manually format each element (headings, paragraphs, lists) individually.") {
        score += 1;
    }

    // Question 7
    var q7Answer = document.querySelector('input[name="q7"]:checked');
    if (q7Answer && q7Answer.value === "Share the document using cloud storage and collaborative editing tools provided by platforms like OneDrive or Google Drive.") {
        score += 1;
    }

    // Question 8
    var q8Answer = document.querySelector('input[name="q8"]:checked');
    if (q8Answer && q8Answer.value === "Utilize the built-in 'Help' function and check for software updates.") {
        score += 1;
    }

    return score;
}

function showScoreModal() {
    var totalQuestions = 8; // Update with the total number of questions
    var score = calculateScore();
    var percentage = (score / totalQuestions) * 100;

    var modalScoreElement = document.getElementById('modal-score');
    modalScoreElement.textContent = "You got " + score + " out of " + totalQuestions + " questions";

    var modalPercentageElement = document.getElementById('modal-percentage');
    modalPercentageElement.textContent = "" + percentage.toFixed(2) + "%";

    var scoreModal = document.getElementById('score-modal');
    scoreModal.style.display = 'block';
}

function closeScoreModal() {
    var scoreModal = document.getElementById('score-modal');
    scoreModal.style.display = 'none';
}