using System.Collections.Generic;

namespace OnRepeat.Models
{

    public class Playlist
    {
        public int PlaylistID { get; set; }
        public string PlaylistName { get; set; }

        public List<Track> Tracks { get; set; }
    }
}