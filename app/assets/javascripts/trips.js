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

    $(document).on('click', "#trip_show", function(e) {
        let id = $(this).attr('data-id')
        fetch(`/trips/${id}.json`)
        .then(res => res.json())
        .then(trip => {
            console.log(trip)
        })
    })

    
} 


function Trip(trip) {
    this.id = trip.id 
    this.name = trip.name
    this.user = trip.user
}

Trip.prototype.formatIndex = function(){
    let postHtml = `
    <h2 button type="button" data-id="${this.id}" class="btn btn-primary" id="trip_show"> ${this.name}</h2> 
    `
    return postHtml
}