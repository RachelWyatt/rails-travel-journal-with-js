$(document).ready(function () {
    attachLocationListeners()
});

function attachLocationListeners() {
    $('#new_location').on("submit", function(e) {
        e.preventDefault();
        console.log("Submitting post")
    });
};
