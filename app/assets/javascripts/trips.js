$(document).ready(function () {
    attachListeners()
});

function attachListeners() {
    $('#all_trips').click(function() {
        fetch(`/trips.json`)
            .then(res => res.json())
            .then(trips => {
                $('#trips-container').html('')
                trips.forEach((trip) => {
                    let newTrip = new Trip(trip)
                    console.log(newTrip)
                })
            })
    });
} 


function Trip(id, name, user) {
    this.id = id 
    this.name = name
    this.user = user
}