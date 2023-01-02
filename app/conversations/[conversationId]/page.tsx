"use client";

import { FormEvent, useState } from "react";

const Conversation = () => {
   const [message, setMessage] = useState<string | false>(false);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
   }

   return (
      <div className="flex flex-col h-full justify-between">
         <div className="flex-1">Messages</div>

         <form onSubmit={handleSubmit}>
            <div className="bg-black/40 rounded flex items-start">
               <input
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-transparent text-white/80 placeholder-white/30 text-sm font-medium block p-2.5"
                  autoFocus
                  placeholder="Sent a message to conversation..." />

               <button disabled={!message} type="submit" className="duration-150 cursor-pointer text-teal-500 opacity-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm p-2.5 text-center inline-flex items-center">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Send the message</span>
               </button>
            </div>
         </form>
      </div>
   );
};

export default Conversation;
