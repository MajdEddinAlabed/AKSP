import { TrashIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Question() {
  return (
    <main>
      <div className="text-center pt-32">
        <h1 className="text-5xl">Welcome to ASKP Question</h1>
      </div>

      <div className="text-center mt-20">
        <p className="max-w-[750px] mx-auto leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam.
          Velit itaque ullam error, labore veritatis nam quas alias deserunt
          expedita cupiditate modi consectetur accusamus molestiae fuga eum
          eveniet quo aspernatur illum et vero. Atque, autem? Dignissimos
          quisquam reprehenderit, nulla facere nemo reiciendis ab id iusto odio
          eum temporibus minima illum vitae itaque illo asperiores hic harum
          neque iure. Necessitatibus dolores vero minima temporibus debitis
          accusantium quaerat dolorum incidunt quod eos fugit consequuntur
          consequatur nobis, aspernatur cum adipisci veritatis corporis magnam
          nihil, doloribus ipsum earum quas. Hic vero ut consequatur saepe?
          Explicabo eius corrupti eveniet aspernatur exercitationem at dolorum
          consequatur!
        </p>
      </div>
    </main>
  );
}
// import { GetServerSideProps } from "next";

// export default function Question({
//   title,
//   content,
// }: {
//   title: string;
//   content: string;
// }) {
//   return (
//     <main>
//       <div className="text-center pt-32">
//         <h1 className="text-5xl">{title}</h1>
//       </div>

//       <div className="text-center mt-20">
//         <p className="max-w-[750px] mx-auto leading-8">{content}</p>
//       </div>
//     </main>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   // For now, we'll use static data
//   const data = {
//     title: "Welcome to ASKP",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam. Velit itaque ullam error, labore veritatis nam quas alias deserunt expedita cupiditate modi consectetur accusamus molestiae fuga eum eveniet quo aspernatur illum et vero. Atque, autem? Dignissimos quisquam reprehenderit, nulla facere nemo reiciendis ab id iusto odio eum temporibus minima illum vitae itaque illo asperiores hic harum neque iure. Necessitatibus dolores vero minima temporibus debitis accusantium quaerat dolorum incidunt quod eos fugit consequuntur consequatur nobis, aspernatur cum adipisci veritatis corporis magnam nihil, doloribus ipsum earum quas. Hic vero ut consequatur saepe? Explicabo eius corrupti eveniet aspernatur exercitationem at dolorum consequatur!",
//   };

//   return {
//     props: data,
//   };
// };
