import Link from "next/link";
import routes from "@/utils/routes";
import Tabs from "@/components/Tabs";

const Index = () => {

  return (
     <div className="flex items-center justify-center h-full w-full">
       <Link href={routes.getHome()} className="px-6 py-3 rounded-full bg-teal-200 text-black text-lg font-medium hover:bg-teal-300 active:bg-teal-200 duration-200">
        Use The Application
      </Link>
     </div>
  );
};

export default Index;
