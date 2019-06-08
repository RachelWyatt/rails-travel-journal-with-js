$(document).ready(function () {
    attachListeners()
});

function attachListeners() {
    $('#all_trips').click(function() {
        fetch(`/trips.json`)
            .then(res => res.json())
            .then(data => {
                $('#trips-container').html('hi')
            })
    });
} 