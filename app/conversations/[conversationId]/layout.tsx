import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function CasurfingLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <Header />

      <section className="mt-2 container mx-auto grid grid-cols-12 gap-x-10 h-5/6">
        <Sidebar />
        <main tabIndex={0} className="border-2 border-black/20 col-span-6 bg-black/30 rounded duration-150 ease-linear focus-visible:bg-black/50 focus-visible:ring focus-visible:ring-teal-500">
          {children}
        </main>
        <aside tabIndex={0} className="border-2 border-black/20 col-span-3 bg-black/40 rounded-r-xl rounded-l duration-150 ease-linear focus-visible:bg-black/50 focus-visible:ring focus-visible:ring-teal-500">Conversation Creator</aside>
      </section>
    </>
  );
}