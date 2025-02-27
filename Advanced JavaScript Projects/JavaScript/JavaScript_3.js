// data attribute assignment
function show_candidate(candidate) {
    var candidateName = candidate.getAttribute("data-candidate");
    alert("The " + candidate.innerHTML + " candidate for the 2024 presidential election was "
        + candidateName);
}