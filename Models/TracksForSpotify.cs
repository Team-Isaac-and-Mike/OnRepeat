using System.Collections.Generic;

namespace onrepeat.Models
{
    public class TracksForSpotify
    {
        public List<string> Uris { get; set; }
        public string AccessToken { get; set; }

        public string PlaylistId { get; set; }
    }
}