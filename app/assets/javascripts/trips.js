$(document).ready(function () {
    attachListeners()
});

function attachListeners() {
    $('#all_trips').click(function() {
        fetch(`/trips.json`)
            .then(res => res.json())
            .then(trips => {
                trips.forEach((trip) => {
                    let newTrip = new Trip(trip)
                    let postHtml = newTrip.formatIndex()
                    $('#trips-container').append(postHtml)
                })
            })
    });
} 


function Trip(trip) {
    this.id = trip.id 
    this.name = trip.name
    this.user = trip.user
}

Trip.prototype.formatIndex = function(){
    let postHtml = `
    <h2>${this.name}</h2>
    `
    return postHtml
}