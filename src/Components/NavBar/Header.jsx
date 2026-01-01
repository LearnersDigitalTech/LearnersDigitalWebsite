"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close menu when resized to larger screens
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ensure portal root exists & setup body padding for sticky header
  useEffect(() => {
    let root = document.getElementById("__drawer_root");
    if (!root) {
      root = document.createElement("div");
      root.id = "__drawer_root";
      document.body.appendChild(root);
    }

    document.body.style.paddingTop = "72px";

    return () => {
      document.body.style.paddingTop = "";
    };
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Corporates", href: "/Corporate" },
    { label: "Universities", href: "/University" },
    { label: "100% Club", href: "https://math100.learnersdigital.com" },
    // { label: "Opportunity", href: "/jobs" },
    { label: "About Us", href: "/About" },
    // { label: "Contact Us", href: "/Contact" }
  ];

  return (
    <>
      {/* Sticky header */}
      <header className="fixed top-0 inset-x-0 z-40 shadow-[0_2px_8px_rgba(0,0,0,0.12)] bg-gradient-to-r from-[#1a232b] to-[#14A4F3]">
        <div className="w-[98%] mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* LEFT: Logo + Mobile menu */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <div className="-ml-6 md:-ml-2">
              <Image
                src="/Hero/logo1.png"
                alt="Learners Digital Full Logo"
                width={50}
                height={15}
                className="object-contain"
                priority
              />
            </div>
            <div className="font-semibold text-white  text-2xl text-slate-900">Learners Digital</div>

          </div>

          {/* CENTER: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-white text-[16px] font-semibold opacity-95 hover:opacity-100 transition-all pb-1 ${pathname === n.href
                  ? 'border-b-2 border-white opacity-100'
                  : 'border-b-2 border-transparent'
                  }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Login + Enquiry */}
          {/* <div className="flex items-center gap-5 ml-10">
            <a href="/login" className="text-white text-[16px] font-semibold opacity-95 hover:opacity-100 hidden md:inline-block">
              Login
            </a>

            <a
              href="/Contact"
              className="flex items-center gap-2 bg-white text-[#1a232b] px-5 py-2 rounded-full font-bold shadow-[0px_4px_14px_rgba(0,118,200,0.25)] hover:-translate-y-[3px] hover:shadow-[0px_8px_22px_rgba(0,118,200,0.32)] transition-all duration-300 animate-[enquiryGlow_1.7s_ease-in-out_infinite]"
            >
              <span>Enquire Now</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M5 12h14M13 5l6 7-6 7" />
              </svg>
            </a>
          </div> */}

        </div>
      </header>

      {/* Drawer */}
      {open && (
        <DrawerLeft
          navItems={navItems}
          pathname={pathname}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}


/* -----------------------------------------
   LEFT-SIDE DRAWER COMPONENT (PORTAL)
----------------------------------------- */
function DrawerLeft({ onClose, navItems, pathname }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  const drawerContent = (
    <div className="fixed inset-0 z-50 flex">

      <div
        className="flex-1 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="
        w-[280px] max-w-[85vw] h-full 
        bg-white shadow-xl 
        rounded-r-2xl 
        transform transition-transform duration-300 
        flex flex-col
        translate-x-0
      ">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-2 rounded-full hover:bg-gray-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <div className="flex items-center gap-3 p-5 mt-6">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/Hero/logo1.png"    // change to your correct icon/logo file
              alt="Learners Digital Logo"
              width={30}
              height={15}
              className="object-cover"
            />
          </div>
          <div className="font-semibold text-slate-900">Learners Digital</div>
        </div>

        <nav className="flex flex-col gap-2 mt-3 px-5">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={onClose}
              className={`p-3 rounded-lg text-gray-800 ${pathname === n.href
                ? 'bg-blue-50 font-semibold border-l-4 border-blue-500'
                : 'hover:bg-gray-50'
                }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto p-5 flex gap-3">
          <a href="/login" className="text-gray-600 hover:text-black text-sm">Login</a>
          <a
            href="/Contact"
            className="ml-auto bg-[#0f6fa8] text-white px-4 py-2 rounded-full text-sm hover:opacity-95"
          >
            Enquiry Now
          </a>
        </div>
      </div>
    </div>
  );

  const portalRoot = document.getElementById("__drawer_root") || document.body;
  return createPortal(drawerContent, portalRoot);
}
