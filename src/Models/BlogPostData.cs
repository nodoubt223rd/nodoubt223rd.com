using Newtonsoft.Json;
using Squidex.ClientLibrary;
using System.Collections.Generic;

namespace Nodoubt.Blog.Project.Models
{
    public sealed class BlogPostData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string Title { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Slug { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Text { get; set; }
		//[JsonConverter(typeof(InvariantConverter))]
		//public string PostImage { get; set; }
		//[JsonConverter(typeof(InvariantConverter))]
		//public List<string> Tags { get; set; }
    }
}
