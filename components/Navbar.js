"use client";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";

export default function myNavbar() {
  return (
    <Navbar fluid={true} rounded={true} className="mx-auto max-w-7xl">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <span className="hidden md:flex text-zinc-600">Muhamad Yasmin Nul Hakim</span>
          <span className="flex md:hidden text-zinc-600">Muhamad Yasmin N H</span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          href={"/"}
          className="border-slate-100 border-b-2 p-2 md:p-0 md:border-b-0 flex slide-in-left-profile md:animate-none"
        >
          <Image
            src={"/user.png"}
            alt="Profile"
            width={22}
            height={10}
            className="rounded-full "
          />
          <span className="ms-2 md:ms-1 text-zinc-600">Profile</span>
        </Link>
        <Link
          href={"/contact"}
          className="border-slate-100 border-b-2 p-2 md:p-0 md:border-b-0 flex slide-in-left-contact md:animate-none"
        >
          <Image
            src={"/telephone.png"}
            alt="Contact Img"
            width={22}
            height={10}
            className="rounded-full "
          />
          <span className="ms-2 md:ms-1 text-zinc-600">Contact</span>
        </Link>
        <Link
          href={"/portofolio"}
          className="border-slate-100 border-b-2 p-2 md:p-0 md:border-b-0 flex slide-in-left-portofolio md:animate-none"
        >
          <Image
            src={"/portofolio.png"}
            alt="Portofolio"
            width={22}
            height={10}
            className=""
          />
          <span className="ms-2 md:ms-1 text-zinc-600">Portofolio</span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
