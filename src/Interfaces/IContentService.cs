using System.Collections.Generic;
using System.Threading.Tasks;
using Nodoubt.Blog.Project.Models;

namespace Nodoubt.Blog.Project.Interfaces
{
    public interface IContentService
    {
        Task<(long Total, List<BlogPost> Posts)> GetBlogPostsAsync(int page = 0, int pageSize = 3);

        Task<List<Page>> GetPagesAsync();

        Task<BlogPost> GetBlogPostAsync(string id);

        Task<Page> GetPageAsync(string slug);
    }
}
