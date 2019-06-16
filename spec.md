# Specifications for the Rails with JavaScript Assessment

Specs:
- [ X ] Must have a Rails Backend and new requirements implemented through JavaScript.
- [ X ] Make use of ES6 features as much as possible (e.g. arrow functions, `let` & `const`).
- [ X ] Must translate the JSON responses into Javascript Model Objects using either ES6 class or constructor function syntax.
- [ X ] At least one of the JS Model Objects must have a method on the prototype.
    Trip has formatIndex and formatJournalEntries.
- [ X ] Must render at least one show page (show resource - 'one specific thing') via JavaScript and an Active Model Serialization JSON Backend.
    A user can click on a trip to view that trip's show page.
- [ X ] Must render at least one index page (index resource - 'list of things') via JavaScript and an Active Model Serialization JSON Backend.
    Clicking "View Your Trips" renders an index page of trips.
- [ X ] Your Rails application must return at least one serialized `has-many` relationship through JSON that is then rendered to the page.
    The trip show page shows trip_entries; a trip has_many trip_entries.
- [ X ] Must use your Rails application to render a form for creating a resource that is submitted dynamically through JavaScript, using a JSON response of the newly created resource to render to the DOM without a page refresh.
    In locations/new, a user can create a new location that is then rendered to the DOM without a page refresh.


Confirm
- [ ] You have a large number of small Git commits
- [ ] Your commit messages are meaningful
- [ ] You made the changes in a commit that relate to the commit message
- [ ] You don't include changes in a commit that aren't related to the commit message