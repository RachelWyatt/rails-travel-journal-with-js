$(document).ready(function () {
    attachLocationListeners()
});

function attachLocationListeners() {
    $('#all_locations').click(function() {
        console.log("Locations index clicked");
    })
    $(':submit').click(function(e) {
        e.preventDefault();
        console.log("Locations clicked");
    })
};

function Location(location) {
    this.id = location.id 
    this.name = location.name
    this.user = trip.user
}