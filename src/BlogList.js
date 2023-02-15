const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    console.log(props, blogs, title);
  
    return (
      <div className="blog-list">
        {blogs.map((blogs) => (
  
          <div className="blog-preview" key={blogs.id}>
  
              
          <p>{title}</p>
            <h2>{blogs.title}</h2>
            <p>Written by {blogs.author}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList;
  