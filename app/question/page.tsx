import Image from "next/image";
import { GetServerSideProps } from "next";

export default function Question({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <main>
      <div className="text-center pt-32">
        <h1 className="text-5xl">{title}</h1>
      </div>

      <div className="text-center mt-20">
        <p className="max-w-[750px] mx-auto leading-8">{content}</p>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from your database
  const res = await fetch("https://your-database-url.com");
  const data = await res.json();

  return {
    props: {
      title: "Welcome to ASKP Question Page",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam. Velit itaque ullam error, labore veritatis nam quas alias deserunt expedita cupiditate modi consectetur accusamus molestiae fuga eum eveniet quo aspernatur illum et vero. Atque, autem? Dignissimos quisquam reprehenderit, nulla facere nemo reiciendis ab id iusto odio eum temporibus minima illum vitae itaque illo asperiores hic harum neque iure. Necessitatibus dolores vero minima temporibus debitis accusantium quaerat dolorum incidunt quod eos fugit consequuntur consequatur nobis, aspernatur cum adipisci veritatis corporis magnam nihil, doloribus ipsum earum quas. Hic vero ut consequatur saepe? Explicabo eius corrupti eveniet aspernatur exercitationem at dolorum consequatur!",
    },
  };
};
