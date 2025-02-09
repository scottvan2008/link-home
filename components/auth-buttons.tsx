"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";

export default function AuthButtons() {
    const auth = useAuth();

    return (
        <div>
            {!!auth?.currentUser && (
                <>
                    <div>{auth.currentUser.email}</div>
                    <div
                        onClick={() => {
                            auth.logout();
                        }}
                    >
                        Logout
                    </div>
                </>
            )}
            {!auth?.currentUser && (
                <div className="flex gap-2 items-center">
                    <Link
                        href="/login"
                        className="uppercase tracking-widest hover:underline"
                    >
                        Login
                    </Link>
                    <div className="h-8 w-[1px] bg-white/50"/>
                    <Link
                        href="/register"
                        className="uppercase tracking-widest hover:underline"
                    >
                        SignUp
                    </Link>
                </div>
            )}
        </div>
    );
}
