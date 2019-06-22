$(document).ready(function () {
    attachListeners()
});

function attachListeners() {
    $('#all_trips').click(function(e) {
        e.preventDefault();
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
            let newTrip = new Trip(trip)
            let journal = newTrip.formatJournalEntries()
            $('#trips-show-container').append(journal)
    })
    })

    $('#new_location').on("submit", function(e) {
        e.preventDefault();
        const values = ($(this).serialize())
        $.post('/locations', values)
            .done(function(data) {
                
                const newLocation = new Location(data)
                $('#new_location_container').html(`<div class="col col-md-auto ml-md-auto"><li>${newLocation.name}</li></div>`)
            });
    });
    
} 

function Location(location) {
    this.id = location.id 
    this.name = location.name
}

function Trip(trip) {
    this.id = trip.id 
    this.name = trip.name
    this.user = trip.user
    this.trip_entries = trip.trip_entries
}

Trip.prototype.formatIndex = function(){
    let postHtml = `
    <h2 button type="button" data-id="${this.id}" class="btn btn-primary" id="trip_show"> ${this.name}</h2> 
    `
    return postHtml
}

Trip.prototype.formatJournalEntries = function() {
    let result = ""
    this.trip_entries.forEach(function(el) {
        let date = el.created_at.slice(0,10)
        result += date + ': ' + el.journal_entry + '<br> '
    })
    return result

}