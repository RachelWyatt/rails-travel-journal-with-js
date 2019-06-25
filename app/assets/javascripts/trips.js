$(document).ready(function () {
    attachListeners()
});

const attachListeners = () => {
    $('#all_trips').on('click', e => {
        e.preventDefault();
        fetch(`/trips.json`)
            .then(res => res.json())
            .then(trips => {
                trips.forEach(trip => {
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
            .done(data => {
                const newLocation = new Location(data)
                $('#new_location_container').html(`<div class="col col-md-auto ml-md-auto"><li>${newLocation.name}</li></div>`)
            });
    });

    $('#sort_alphabetically').on('click', function(e) {
        fetch(`/trips.json`)
        .then(res => res.json())
        .then(trips => {
            let tripArray = sortAlphabetically(trips);
            console.log(tripArray)
            tripArray.forEach(trip => {
                let tripName = trip.name
                console.log(tripName)
                $('#trips-alphabet').append(tripName)
            })
        })
    })
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

function sortAlphabetically(trips){
    let tripsSorted = trips.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    
    return tripsSorted
}

Trip.prototype.formatJournalEntries = function() {
    let result = ""
    this.trip_entries.forEach(function(el) {
        let date = el.created_at.slice(0,10)
        result += date + ': ' + el.journal_entry + '<br> '
    })
    return result
}