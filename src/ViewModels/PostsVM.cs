using System.Collections.Generic;
using Nodoubt.Blog.Project.Models;

namespace Nodoubt.Blog.Project.ViewModels
{
    public sealed class PostsVM
    {
        public List<BlogPost> Posts { get; set; }

        public long Total { get; set; }

        public long Page { get; set; }

        public long PageSize { get; set; }
    }
}
