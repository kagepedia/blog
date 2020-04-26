import Link from 'next/link';
const Post = ({ title, publishDate, slug }) => (
    <div className="container">
      <Link href="/post/[slug]" as={`/post/${slug}`}>
        <div className="text">
          <h2>{title}</h2>
          <h4>{publishDate}</h4>
        </div>
      </Link>

    <style jsx>{`
    .container {
      cursor: pointer;
      height: 453px;
      margin-bottom: 10px;
    }
    a {
      border-bottom: none;
    }
    a:hover {
      border-bottom: none;
    }
    .text {
      margin-top: -160px;
      padding: 24px;
      position: absolute;
    }
    h2 {
      color: red;
      font-size: 24px;
      margin-bottom: 0;
    }
    h4 {
      color: red;
      font-size: 16px;
      font-weight: 500;
      margin-top: 8px;
    }
    `}</style>
  </div>
);

export default Post;
