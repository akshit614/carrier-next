import { SignInButton, SignedOut, SignUpButton, UserButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox } from 'lucide-react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger, 
} 
  from './dropdown-menu'
import { Graduate } from 'next/font/google'


const Header = () => {
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 px-10'>
      <nav className='container mx-auto px-4 h-16 flex justify-between items-center'>
          <Link href={'/dashboard'}>
          <Image src={'vercel.svg'} alt='Logo' width={200}  height={20} className='h-12 py-1 w-auto object-contain'/>
          </Link>
        <div className='flex items-center space-x-2 md:space-x-5'>
        <SignedIn>
          <Link href={'/'}> 
          <Button> 
            <LayoutDashboard/> 
            <span className='hidden md:block'>Get Started</span> 
            </Button> 
          </Link>
          
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Button> 
            <span className='hidden md:block'>Growth Tools</span> 
            <ChevronDown/> 
            </Button> 
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={'/'} className='flex gap-3 items-center'>
              <FileText/> 
              <span>Build Resume</span> 
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/'} className='flex gap-3 items-center'>
                <PenBox/> 
                <span>Cover letter</span> 
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/'} className='flex gap-3 items-center'>
                <GraduationCap/> 
                <span>Interview Prep</span> 
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UserButton
          appearance={{elements : {
            avatarBox : "w-10 h-10"
          }}}
          />
        </SignedIn>
  
        <SignedOut>
          <SignInButton > 
            <Button variant="outline">SignIn</Button> 
          </SignInButton>
          <SignUpButton > 
            <Button variant="outline">Signup</Button> 
          </SignUpButton>
        </SignedOut>
        </div>
      </nav>
    </header>
  )
}

export default Header