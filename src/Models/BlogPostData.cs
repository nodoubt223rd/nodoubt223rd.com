using Newtonsoft.Json;
using Squidex.ClientLibrary;
using System;
using System.Collections.Generic;

namespace Nodoubt.Blog.Project.Models
{
    public sealed class BlogPostData
    {
		[JsonConverter(typeof(InvariantConverter))]
		public string Author { get; set; }
		[JsonConverter(typeof(InvariantConverter))]
        public string Title { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Slug { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Text { get; set; }

		[JsonConverter(typeof(InvariantConverter))]
		public List<Guid> PostImage { get; set; }

		[JsonConverter(typeof(InvariantConverter))]
		public List<string> PostTags { get; set; }

        public string FinalImage { get; set; }
    }
}
