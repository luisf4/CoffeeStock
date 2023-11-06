using System;
using System.Net.Http;
using System.Security.Cryptography;
using System.Threading.Tasks;

public class StockServices
{
    // Load the api keys from file 
    private string API_TOKEN_Finnhub = CredentialsLoader.LoadApiKeyFinnhub()!;
    private string API_TOKEN_Brapi = CredentialsLoader.LoadApiKeyBrapi()!;
    private string API_TOKEN_Polygon = CredentialsLoader.LoadApiKeyPolygon()!;


    // Polygon API USE
    //
    //
    //
    public async Task<string> GetStockInfo(string symbol,string range)
    {
        using HttpClient client = new();

        // Set the url 
        string url = $"https://brapi.dev/api/quote/{symbol}?range={range}&interval=1d&fundamental=true&dividends=false&token={API_TOKEN_Brapi}";

        // Makes a request 
        var res = await client.GetAsync(url);

        
        if (res.IsSuccessStatusCode)
        {
            var content = await res.Content.ReadAsStringAsync();
            return content; // Return JSON content as a string
        }
        else
        {
            // Handle error response here
            return "Error"; // You can also return an error message or throw an exception
        }
    }


}
