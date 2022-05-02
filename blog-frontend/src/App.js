import './App.css';

function App() {
  const blogs = [
    {
      bloggerName: "Jim Lays",
      blogTitle: "NFT's on the rise. Buy fast!!!",
      blogText: "Mumbai: Cricket non-fungible tokens (NFTs) platform Rario has raised $120 million, led by Dream Capital, the corporate venture capital and M&A arm of Dream Sports."
    },
    {
      bloggerName: "Kim Kardashian",
      blogTitle: "Best Blog Topics",
      blogText: "That said, unless you’re breaking ground on a very new or different topic, there’s probably quite a bit of competition out there. With this in mind, it’s really important that you consider which blogging niches will help you cut through the noise. Let’s talk about why narrowing your focus is so important and then take a look at 120 most profitable blog niche ideas you can write about."
    },
    {
      bloggerName: "Shiv Khera",
      blogTitle: "Google News",
      blogText: "Google News is a news aggregator service developed by Google. It presents a continuous flow of links to articles organized from thousands of publishers and magazines. Google News is available as an app on Android, iOS, and the Web."
    },
  ];

  return (
    <div>
      {blogs.map(blog => {
          return (
            <div>
              <h1>{blog.blogTitle}</h1>
              <h5>By {blog.bloggerName} </h5>
              <p>{blog.blogText}</p>
            </div>
          );
      })}
    </div>
  );
}

export default App;
