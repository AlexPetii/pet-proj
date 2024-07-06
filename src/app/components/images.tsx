import { list } from "@vercel/blob";
import Image from "next/image";

export async function Images() {
  async function allImages() {
    const blobs = await list();
    return blobs;
  }
  const images = await allImages();

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        {images.blobs.map((image) => (
          <Image
            className="box-border h-64 w-64 p-4 border-2 mr-1 mb-1"
            priority
            unoptimized
            key={image.pathname}
            src={image.url}
            alt="Image"
            width={256}
            height={256}
          />
        ))}
      </div>
    </section>
  );
}
