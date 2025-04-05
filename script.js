document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let marks = parseInt(document.getElementById("marks").value);
    let extra = document.getElementById("extra").value;

    let feedback = `Feedback for ${name} in ${subject}: `;

    if (marks >= 90) {
        feedback += "Excellent performance with deep understanding. Keep challenging yourself with advanced problems.";
    } else if (marks >= 75) {
        feedback += "Good performance. Focus on refining problem-solving skills and clarity in concepts.";
    } else if (marks >= 50) {
        feedback += "Average performance. Needs to focus more on understanding key topics and practicing regularly.";
    } else {
        feedback += "Needs significant improvement. Should work on basics, seek help when needed, and practice consistently.";
    }

    if(extra) {
        feedback += ` Additional Comments: ${extra}`;
    }

    document.getElementById("result").innerHTML = feedback;
});
