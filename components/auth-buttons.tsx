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
                <>
                    <Link href="/login">Login</Link>
                    <Link href="/register">SignUp</Link>
                </>
            )}
        </div>
    );
}
