# EDIT-THIS-README
HTML
1) three clickable pokemon 
2) images
3) table-- caught and seen pokemon-- results
    smaller divs within the divs to see the pokemon which are caught


JS
1) import pokemon data 
2) app.js -- declare 3 pokemon w/ random selection fxn
    if we have seen them, generate 3 more
3) while loop to generate 3 unique pokemon
4) render pokemon images fxn
    create 3 image elements
    append to div
5) get poke stats with a function
    get stats from local storage
6) set poke stats function with new stats (local storage)
7) increment seen fxn (local storage file)
    create a new stat if not seen before
        otherwise increment
8) increment caught fxn
        increment caught
9) utils file
    import pokemon from data
    export fxn getRandomPokemon
        declare your randomindex
        return
    export fxn findById
10) on click increment caught
    after 10x redirect to results page
    or load 3 more pokemon
11) results table or list on another page
