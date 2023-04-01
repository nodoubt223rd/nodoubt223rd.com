using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;
// Custom
using NodoubtBlog.Foundation.Interfaces;
using NodoubtBlog.Foundation.Models;
// Third Party
using Squidex.ClientLibrary;
using Squidex.ClientLibrary.Configuration;
using Squidex.ClientLibrary.Utils;

namespace NodoubtBlog.Foundation.Services
{
    public class ApiService : IApiService
    {
        private readonly IContentsClient<BlogPost, BlogPostData> _postsClient;
        private readonly IContentsClient<Page, PageData> _pagesClient;

        public ApiService(IOptions<SquidexOptions> appOptions)
        {
            var options = appOptions.Value;

            options.Configurator = AcceptAllCertificatesConfigurator.Instance;

            var clientManager =
                new SquidexClientManager(options);

            _pagesClient = clientManager.CreateContentsClient<Page, PageData>("pages");
            _postsClient = clientManager.CreateContentsClient<BlogPost, BlogPostData>("posts");
        }

        public Task<BlogPost> GetBlogPostAsync(string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<(long Total, List<BlogPost> Posts)> GetBlogPostsAsync(int page = 0, int pageSize = 3)
        {
            throw new System.NotImplementedException();
        }

        public Task<Page> GetPageAsync(string slug)
        {
            throw new System.NotImplementedException();
        }

        public Task<List<Page>> GetPagesAsync()
        {
            throw new System.NotImplementedException();
        }
    }
}
