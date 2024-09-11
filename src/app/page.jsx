import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eaque
          voluptates ipsam aliquid laborum harum quia magni amet, sunt libero
          tenetur vel ducimus voluptatibus repellat modi fuga sapiente placeat
          ea! Quisquam iusto asperiores fugit corrupti quaerat. Aspernatur optio
          sit fugiat illo temporibus, tenetur odio iure culpa deserunt corrupti
          voluptatum eos provident dolorum libero architecto magni
          necessitatibus atque veniam facere eaque accusamus at neque autem
          corporis! Et natus tenetur fuga deserunt magni minus quibusdam
          consectetur consequatur harum, rem sequi debitis optio corporis
          sapiente quam fugit. Doloremque, enim. Perferendis ullam ipsum
          possimus numquam iusto commodi? Quidem ab iure minus, facere est autem
          provident quia esse tempore architecto, earum nulla eum molestias
          temporibus cumque ipsa eaque maxime harum! Minima debitis obcaecati
          libero animi consequuntur rem veniam adipisci est, placeat voluptate.
          Quibusdam deserunt sint fuga autem eaque perspiciatis maiores
          explicabo veritatis, quas, debitis, porro rem. Eligendi id totam aut
          ad est! Ipsa doloremque dolores accusamus, numquam rem repellendus
          voluptate cum animi! Officiis qui alias, quos omnis quam corrupti
          recusandae quod fuga dolore in id provident ipsa aperiam, ullam
          architecto debitis, accusamus autem aliquid voluptatem dolores et
          optio assumenda odio? Earum laboriosam totam illo corporis repellendus
          saepe vero accusamus animi fugit quod quia voluptatibus ducimus vel
          modi quae rerum nostrum, atque error? Eaque laudantium fuga amet
          tempora. Doloremque provident laboriosam, fugiat debitis consequatur
          itaque repellendus sequi quidem fugit aperiam praesentium, atque ex
          vitae animi harum nemo reiciendis voluptate. Quidem mollitia
          repudiandae voluptatum quo deserunt molestias quis aliquid praesentium
          incidunt quibusdam sint vitae alias quasi neque facere quod eos
          dignissimos exercitationem consequatur omnis, aut officiis nam saepe.
          Earum labore cupiditate possimus eaque dolorem, id sed, ea saepe
          fugiat quaerat, voluptate eos accusantium dolore ipsum beatae. Minus
          quae dolore sequi blanditiis suscipit quia maxime possimus, enim fuga
          voluptas quod rerum aliquid ullam accusantium quidem illo neque aut,
          eius asperiores. Molestias, aperiam est dolorum temporibus cupiditate
          ullam suscipit doloribus voluptas iusto provident, quisquam voluptatum
          expedita mollitia harum quibusdam deleniti officia. Rem aspernatur
          provident numquam sequi cum culpa, deleniti recusandae nostrum quia
          maxime sint ea, est labore doloribus suscipit saepe! Dolore hic sint
          commodi praesentium exercitationem iusto fugit repudiandae! Sunt unde
          voluptas, nihil laboriosam iure quo soluta tenetur deserunt tempore,
          natus ratione, neque quaerat aspernatur fugit rem perspiciatis!
          Commodi neque, laudantium recusandae necessitatibus nulla nihil beatae
          voluptatem aperiam deleniti eum rerum nisi aspernatur, obcaecati
          similique ut, esse sed sequi facere explicabo ex! Itaque, cum non
          rerum sequi minima velit reprehenderit maiores corrupti, repellendus
          repellat architecto quis in, debitis eaque ipsum quo veniam. Eaque ut
          eveniet nulla laudantium dignissimos, repellendus libero hic magnam
          reprehenderit! Porro sit quam pariatur voluptas consectetur neque eum
          hic quas nihil optio sequi voluptatum harum nostrum praesentium,
          minima amet enim dicta soluta et omnis eaque autem ratione officia
          asperiores. Nemo, est itaque omnis in totam consequatur modi quasi
          sequi animi nihil ipsa voluptate distinctio alias saepe delectus porro
          harum similique, cupiditate sed vitae cum, deleniti dignissimos quis.
          Quae, voluptatum. Perspiciatis vero esse, obcaecati, tempore voluptate
          eligendi sint unde corrupti rerum cum nostrum aliquam, necessitatibus
          debitis excepturi.
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
