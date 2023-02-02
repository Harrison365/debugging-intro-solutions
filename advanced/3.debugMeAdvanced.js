function capitalArtists(arr) {
    const artists = arr.map((pair) => {
      return pair.split(" - ")[0].toUpperCase();
    });
    return artists;
  }