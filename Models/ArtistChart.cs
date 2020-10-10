using System.Collections.Generic;

namespace OnRepeat.Models
{

    public class ArtistChart
    {
        public int ChartId { get; set; }

        public string ChartName { get; set; }

        public List<Artist> Artists { get; set; }

    }
}