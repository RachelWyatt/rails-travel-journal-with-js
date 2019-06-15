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
        $('#app-container').html('')
        let id = $(this).attr('data-id')
        fetch(`/trips/${id}.json`)
        .then(res => res.json())
        .then(trip => {
            let newTrip = new Trip(trip)
            let journal = newTrip.formatJournalEntries()
            $('#app-container').append(journal)
    })
    })
    
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
    let array = this.trip_entries 
    let arr = []
    let journal_entries = 
    array.forEach(function(item) {
        arr.push(item.journal_entry) 
    })
    console.log(journal_entries)
    let postHtml = `
    <p> ${arr} </p> 
    `
    console.log(arr)
    return postHtml
}