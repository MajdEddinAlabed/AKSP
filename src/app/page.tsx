import Image from "next/image";
import { useState } from "react";
import "src/ui/globals.css"


export default function Home() {
  // const [communities, setCommunities] = useState<any[] | undefined>([]);

  // const getCommunities = async () => {
  //   const client = new Client();
  //   const communities = await client.communitiesAll.communitiesAll();
  //   setCommunities(communities);
  // };
  return (
    <main>
      <div className="text-center pt-32">
        <h1 className="text-5xl">Welcome to ASKP</h1>
      </div>
{/* 
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
      </div> */}
      <div className="flex justify-center items-center">
        <ul className="w-10">
          <li className="">
            <h1 className="font-serif text-xl">
              Coding Community
            </h1>
            <p>meap company wow</p>
          </li>
          <div className="py-2"></div>
          <li className="">
            <h1>
              meap
            </h1>
            <p>meap company wow</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
