import Link from "next/link";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <h1>First post</h1>
      <Link href="/">
        <a>Go to home page</a>
      </Link>
    </Layout>
  );
}
