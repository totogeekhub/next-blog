import Layout from "@/components/Layout"
import Link from 'next/link'

export default function index({data}) {
  const title = "Lista de Blogs"
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati ad impedit perferendis officia iure fuga vel autem exercitationem esse, quas maxime voluptate, libero sint sunt minus animi omnis, neque qui. Tempore porro deleniti hic, maiores repellendus nihil recusandae cum amet impedit assumenda corporis saepe, beatae corrupti aliquam. Tempore nesciunt delectus temporibus est animi laboriosam fugiat fugit unde corporis saepe. Similique, odit harum exercitationem cum voluptates rerum."
  return (
    <Layout title={title} description={description}>
        <h1>Lista de Blogs</h1>
        {
          data.map(({id, title, body}) => (
            <div key={id}>
              <h3>
                <Link href={`/blog/${id}`}>
                  {id} - {title}
                </Link>
                </h3>
              <p>{body}</p>
              <br />
            </div>
          ))
        }
    </Layout>
  )
}

export async function getStaticProps () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}
