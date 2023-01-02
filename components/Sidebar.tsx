function Sidebar() {
    return <aside tabIndex={0} className="border-2 border-black/20 col-span-3 bg-black/40 rounded-l-xl rounded-r duration-150 ease-linear focus-visible:bg-black/50 focus-visible:ring focus-visible:ring-teal-500">
       <div className="mx-auto px-4">
        <div className="h-10 mt-3 p-1 w-full bg-black/50 rounded-lg flex items-center justify-center">
            <button className="hover:bg-white/[0.1] cursor-pointer rounded-lg text-sm font-bold block w-full h-full bg-white bg-white/5 duration-150 ease-in-out focus-visible:ring focus-visible:ring-teal-500">All</button>
            <button className="hover:bg-white/[0.1] cursor-pointer rounded-lg text-sm font-medium block w-full h-full duration-150 focus-visible:ring ease-in-out focus-visible:ring-teal-500">Stared</button>
        </div>
       </div>

       <hr className="mx-auto w-10/12 h-px border-none bg-black/70 my-2" />

       <div>
            All conversations
        </div> 
    </aside>
}

export default Sidebar;