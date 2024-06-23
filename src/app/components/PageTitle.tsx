import Link from "next/link";

interface props {
  title: string;
}

export default function PageTitle({ title }: props) {
  return (
    <>
      <div className="  ">
        <h1 className=" pt-6 text-center font-bold mt-6 mb-6 text-black md:text-white ">
          {title}
        </h1>
        <Link href="/" className="text-white ml-4 bg-black p-2 rounded-md">
          Voltar
        </Link>
      </div>
    </>
  );
}
