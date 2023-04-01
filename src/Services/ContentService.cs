
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Nodoubt.Blog.Project.Interfaces;
using Nodoubt.Blog.Project.Models;
using Squidex.ClientLibrary;
using Squidex.ClientLibrary.Configuration;

namespace Nodoubt.Blog.Project.Services
{
    /// <summary>
    ///  Sends a request to Squidex to retrieve content.
    /// </summary>
    public class ContentService : IContentService
    {
        private readonly IContentsClient<BlogPost, BlogPostData> postsClient;
        private readonly IContentsClient<Page, PageData> pagesClient;

        /// <summary>
        /// Initializes a new instance of the <see cref="ContentService"/> class.
        /// This is the default contstructor.
        /// </summary>
        /// <param name="appOptions"></param>
        public ContentService(IOptions<SquidexOptions> appOptions)
        {
            var options = appOptions.Value;

            options.Configurator = AcceptAllCertificatesConfigurator.Instance;

            var clientManager =
                new SquidexClientManager(options);

            pagesClient = clientManager.CreateContentsClient<Page, PageData>("pages");
            postsClient = clientManager.CreateContentsClient<BlogPost, BlogPostData>("posts");
        }

        public async Task<(long Total, List<BlogPost> Posts)> GetBlogPostsAsync(int page = 0, int pageSize = 3)
        {
            var query = new ContentQuery { Skip = page * pageSize, Top = pageSize };

            var posts = await postsClient.GetAsync(query);

            return (posts.Total, posts.Items);
        }

        public async Task<List<Page>> GetPagesAsync()
        {
            var pages = await pagesClient.GetAsync();

            return pages.Items;
        }

        public async Task<Page> GetPageAsync(string slug)
        {
            var query = new ContentQuery
            {
                Filter = $"data/slug/iv eq '{slug}'"
            };

            var pages = await pagesClient.GetAsync(query);

            return pages.Items.FirstOrDefault();
        }

        public Task<BlogPost> GetBlogPostAsync(string id)
        {
            return postsClient.GetAsync(id);
        }
    }
}
