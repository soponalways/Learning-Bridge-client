import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner';
import { authClient } from '@/lib/auth-client'
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link'
import React from 'react'

export default function UserPopover() {
    const session = authClient.useSession();
    console.log("Session in UserPopover:", session);
    if (session.isPending === true) {
        return <Spinner />
    }
    if (!session.data) {
        return (
            <>
                <Button variant="outline" asChild>
                    <Link href={'/sign-in'}>Sign in</Link>
                </Button>
                <Button asChild>
                    <Link href={'/sign-up'}>Sign up</Link>
                </Button>
            </>
        )
    }
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        <AvatarImage src={session.data.user.image || 'https://github.com/shadcn.png'} />
                        <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader>
                        <PopoverTitle>{session.data.user.name}</PopoverTitle>
                        <PopoverDescription>{session.data.user.email}</PopoverDescription>
                    </PopoverHeader>
                    <Button variant={"outline"} asChild className=''>
                        <Link href={'/dashboard'}>Dashboard</Link>
                    </Button>
                </PopoverContent>
            </Popover>
        </>
    )
}
