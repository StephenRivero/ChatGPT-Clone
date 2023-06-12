'use client';

import { useSession, signOut, } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat"
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

function SideBar() {
    
    const { data: session} = useSession();

    const [chats, loading, error] = useCollection(
        session && 
            query(
                // collection(db, 'users', session.user?.email!, "chats"), orderBy("createdAt", "asc")
                collection(db, 'users', session.user?.email!, "chats"), orderBy("createdAt", "desc")
            )
    );

    console.log(chats);
    
    return (
        <div className="p-2 flex flex-col h-screen">
           <div className="flex-1">
            <div>
                <NewChat />
                <div>
                    {/* ModelSelection */}
                </div>
                {/* Map through through ChatRows */}
                {chats?.docs.map(chat => (
                    <ChatRow key={chat.id} id={chat.id} />
                ))}

            </div>
            </div>
            <div>
                {/* <div onClick={()=> signOut()} className="flex items-center gap-2 mx-auto h-12 w-fit cursor-pointer mb-1 hover:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white z-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <p className="text-white font-[500]">Logout</p>
                </div> */}
            </div>
            {session && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    onClick={()=> signOut()}
                    src={session.user?.image!}
                    alt="Profile pic" 
                    className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
                />
            )}
        </div>
    );
    
}

export default SideBar