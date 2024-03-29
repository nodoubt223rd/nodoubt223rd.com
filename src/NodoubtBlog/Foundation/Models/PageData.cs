﻿using Newtonsoft.Json;
using Squidex.ClientLibrary;

namespace NodoubtBlog.Foundation.Models
{
    public sealed class PageData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string Title { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Slug { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Text { get; set; }
    }
}
