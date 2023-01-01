import Header from "@/components/Header";

export default function CasurfingLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <Header />

      <section className="mt-2 container mx-auto grid grid-cols-12 gap-x-10 h-5/6">
        <aside tabIndex={0} className="border-2 border-black/20 col-span-3 bg-black/40 rounded-l-xl p-5 duration-150 ease-linear focus:bg-black/80">Conversations</aside>
        <main tabIndex={0} className="border-2 border-black/20 col-span-6 bg-black/30 p-3 duration-150 ease-linear focus:bg-black/80">
          {children}
        </main>
        <aside tabIndex={0} className="border-2 border-black/20 col-span-3 bg-black/40 rounded-r-xl p-6 duration-150 ease-linear focus:bg-black/80">Conversation Creator</aside>
      </section>
    </>
  );
}