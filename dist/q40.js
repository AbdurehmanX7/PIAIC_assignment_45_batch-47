"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artistName, album_title, numberOfTracks) {
    const myAlbum = {
        artist: artistName,
        title: album_title,
    };
    if (numberOfTracks !== undefined) {
        myAlbum.tracks = numberOfTracks;
    }
    return myAlbum;
}
const album_1 = make_album('artist1', 'title_1');
const album_2 = make_album('artist2', 'title_2', 2);
const album_3 = make_album('artist3', 'title_3', 3);
console.log(album_1);
console.log(album_2);
console.log(album_3);
