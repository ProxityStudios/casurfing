"use client";

import routes from "@/utils/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(routes.getConversation("1"));
  }, [])

  return (
     <div className="">
       Redirecting to recent conversation
     </div>
  );
};

export default Index;
