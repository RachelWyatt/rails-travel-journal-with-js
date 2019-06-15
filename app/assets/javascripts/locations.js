$(document).ready(function () {
    attachLocationListeners()
});

function attachLocationListeners() {
    $(':submit').click(function(e) {
        e.preventDefault();
        console.log("Locations clicked");
    })
};