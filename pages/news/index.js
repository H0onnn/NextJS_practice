import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/nextjs-is-good">NextJS Is A Great</Link>
        </li>
        <li>Somgthing else</li>
      </ul>
    </>
  );
}

export default NewsPage;
