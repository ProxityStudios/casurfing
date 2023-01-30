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

      <section className="mt-2 container mx-auto flex justify-between">
        <Sidebar />
        <main tabIndex={0} className="flex-1 border-2 border-black/20 bg-black/30 rounded duration-150 ease-linear focus-visible:bg-black/50 focus-visible:ring focus-visible:ring-teal-500">
          {children}
        </main>
        <aside tabIndex={0} className="border-2 border-black/20 bg-black/40 rounded-r-xl rounded-l duration-150 ease-linear focus-visible:bg-black/50 focus-visible:ring focus-visible:ring-teal-500">Conversation Creator</aside>
      </section>
    </>
  );
}