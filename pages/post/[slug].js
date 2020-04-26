import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from '../../components/head';
import Nav from '../../components/nav';
import PostDetail from '../../components/postdetail'

const client = require('contentful').createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

export default () => {
  const router = useRouter()
  const { slug } = router.query
  
  async function fetchEntries() {
    const entries = await client.getEntries({
        'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': slug,
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="hero">
        <h1 className="title">Welcome to Post Detail Pages</h1>
        {posts.length > 0
          ? posts.map(p => (
              <PostDetail
                title={p.fields.title}
                publishDate={p.fields.publishDate}
                discription={p.fields.discription}
                body={p.fields.body}
                key={p.fields.slug}
              />
            ))
          : null}
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          padding-bottom: 12px;
          line-height: 1.15;
          font-size: 37px;
        }
        .title {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
