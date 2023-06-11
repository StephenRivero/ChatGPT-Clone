'use client';

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
    children: React.ReactNode;
    session: Session | null;
}

// export function SessionProvider({ children, session }: Props) {
//     return (
//         <Provider>
//             {children}
//         </Provider>
//     );
// }

export const NextAuthProvider = ({ children, session }: Props) => {
    return <Provider>{children}</Provider>;
};