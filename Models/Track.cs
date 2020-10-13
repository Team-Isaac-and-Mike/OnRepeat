namespace OnRepeat.Models
{
    public class Track
    {
        public int TrackId { get; set; }

        public string TrackName { get; set; }

        public string TrackGenre { get; set; }

        public string TrackArtist { get; set; }

        public string TrackImage { get; set; }

        public int PlaylistId { get; set; }
        public Playlist Playlist { get; set; }
    }
}