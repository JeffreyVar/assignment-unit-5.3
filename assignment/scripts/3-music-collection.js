console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let albumToAdd = {
        albumTitle: title,
        artistName: artist,
        yearPublished: yearPublished,
    };
    collection.push(albumToAdd);
    console.log(albumToAdd);
}

addToCollection('Californication', 'Red Hot Chili Peppers', 1999);
addToCollection('Room for Squares', 'John Mayer', 2001);
addToCollection('Old Church Basement', 'Maverick City Music', 2021);
addToCollection('The Black Album', 'Jay-Z', 2003);
addToCollection('XX', 'The XX', 2009);
addToCollection('Rehab', 'Lecrae', 2010);
addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', 2006)
console.log(collection);
console.table(collection);

function showCollection(array) {
    console.log(array.length);
    for (item of collection) {
        console.log(`${item.albumTitle} by ${item.artistName}, published in ${item.yearPublished}`);
    }
}
showCollection(collection);

function findByArtist(artist) {
    let matchingResults = [];
    for (item of collection) {
        if (`${item.artistName}` === artist) {
            matchingResults.push(`${item.albumTitle} by ${item.artistName}, published in ${item.yearPublished}`);
        }
    } console.log(matchingResults);
}

findByArtist('Lecrae');
findByArtist('Backstreet Boys');
findByArtist('Red Hot Chili Peppers')

function search(artist, year) {
    let searchResults = [];
    for (item of collection) {
        if (`${item.artistName}` === artist && `${item.yearPublished}` == year) {
            searchResults.push(`${item.albumTitle} by ${item.artistName}, published in ${item.yearPublished}`)
        //} else if (`${item.artistName}` !== artist || `${item.yearPublished}` != year) {
          //  searchResults = [];
            //} else {
              //   searchResults = [(collection)];
            }
        } console.log(searchResults); 
    } 


search('John Mayer', 2001);
search('Red Hot Chili Peppers', 2010);
search('Ray Charles', 1957)
search();