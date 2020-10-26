using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using onrepeat.Models;

namespace onrepeat.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SpotifyProxyController : ControllerBase
    {


        [HttpPost]
        public async Task<ActionResult> PostPlaylistAsync([FromBody] TracksForSpotify tracks)

        {

            var url = $"https://api.spotify.com/v1/playlists/{tracks.PlaylistId}/tracks";
            var spotifyObject = new
            {
                uris = tracks.Uris
            };
            var tracksAsJson = JsonConvert.SerializeObject(spotifyObject);
            var request = new HttpRequestMessage(HttpMethod.Post, url);

            using var client = new HttpClient();

            request.Content = new StringContent(tracksAsJson, Encoding.UTF8, "application/json");

            request.Headers.Add("Authorization", $"Bearer {tracks.AccessToken}");

            var response = await client.SendAsync(request);

            string result = response.Content.ReadAsStringAsync().Result;
            Console.WriteLine(result);




            return Ok();

        }

    }

}
