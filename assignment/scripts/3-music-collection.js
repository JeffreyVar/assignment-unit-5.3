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
addToCollection('Rehad', 'Lecrae', 2010);
console.log(collection);
console.table(collection);

function showCollection(array) {
    console.log(array.length);
    for (item of collection) {
        console.log(`${item.albumTitle} by ${item.artistName}, published in ${item.yearPublished}`);
    }
}
showCollection(collection);