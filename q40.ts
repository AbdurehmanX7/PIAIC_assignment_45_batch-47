interface albumObject {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(
    artistName: string,
    album_title: string,
    numberOfTracks?: number
  ): albumObject {
    const myAlbum: albumObject = {
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
  