export default function RefeicoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" container backdrop-blur  mx-auto  ">
      <div className=" mx-4">{children}</div>
    </section>
  );
}
