using System.Collections.Generic;
using System.Threading.Tasks;
// Custom
using NodoubtBlog.Foundation.Models;


namespace NodoubtBlog.Foundation.Interfaces
{
    public interface IApiService
    {
        Task<(long Total, List<BlogPost> Posts)> GetBlogPostsAsync(int page = 0, int pageSize = 3);

        Task<List<Page>> GetPagesAsync();

        Task<BlogPost> GetBlogPostAsync(string id);

        Task<Page> GetPageAsync(string slug);
    }
}
