import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="box-border h-64 w-64 p-4 border-2 mr-1 mb-1">
        <Image src="/girl1.jpg" alt="photo" width={256} height={256} />
        {/* <div>txt</div> */}
      </div>
      <div className="box-border h-64 w-64 p-4 border-2 mr-1 mb-1">
        <Image src="/girl2.jpg" alt="photo" width={256} height={256} />
      </div>
      <div className="box-border h-64 w-64 p-4 border-2 mr-1 mb-1">
        <Image src="/girl3.jpg" alt="photo" width={256} height={256} />
      </div>
    </div>
  );
}
