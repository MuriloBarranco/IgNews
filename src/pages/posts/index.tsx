import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import styles from "./styles.module.scss";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpti: string;
  updatedAt: string;
};

interface postsProps {
  posts: Post[];
}

export default function Posts({ posts }: postsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpti}</p>
              </a>
            </Link>
          ))}
          
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const prismic = getPrismicClient();

  const responsePosts = await prismic.getByType("publication", {
    pageSize: 100,
  });

  const posts = responsePosts.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpti: post.data.content.find((content) => content.type == "paragraph")?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-br",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: { posts },
  };
}
