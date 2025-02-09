"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";

export default function AuthButtons() {
    const auth = useAuth();

    return (
        <div>
            {!!auth?.currentUser && (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            {!!auth.currentUser.photoURL && (
                                <Image
                                    src={auth.currentUser.photoURL}
                                    alt="{`${auth.currentUser.displayName}avatar`}"
                                    width={70}
                                    height={70}
                                />
                            )}
                            <AvatarFallback>
                                {(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            )}
            {!auth?.currentUser && (
                <div className="flex gap-2 items-center">
                    <Link
                        href="/login"
                        className="uppercase tracking-widest hover:underline"
                    >
                        Login
                    </Link>
                    <div className="h-8 w-[1px] bg-white/50" />
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
