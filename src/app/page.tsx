import dynamic from "next/dynamic";

const Office = dynamic(() => import("src/components/3D/Office"), { ssr: false });

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <>
      <section className="w-[1000px] h-[1000px] m-auto">
        <Office />
      </section>
    </>
  );
}
