import Link from "next/link";
import localFont from "next/font/local";

const modernline = localFont({
  src: "../fonts/modernline-personal-use.regular.otf",
});

export default function SomeMore() {
  return (
    <main className="bg-black">
      <div className="relative bg-black">
        <img
          src="/heroBackground.jpeg"
          alt=""
          className="block h-screen w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-x-0 top-3/4 flex -translate-y-1/2 items-center justify-center">
          <span
            className={`${modernline.className} inline-block origin-center scale-x-150 text-7xl text-white`}
          >
            Jay
          </span>
        </div>
        <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3">
          <a
            href="https://www.instagram.com/_.jay.bro._?igsi=MTkwbGF3NjE4YnlnNw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/0 text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
          </a>
          <Link
            href="/"
            className="flex items-center justify-center border border-white/60 bg-white/0 px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            당신이 왔던 곳으로 돌아가세요
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-0.5 bg-black px-6 py-1 text-center text-[8px] font-bold uppercase tracking-widest text-white">
        <p>
          <span className="italic">shit</span> happens, stay focus, 감사합니다
        </p>
        <p>&copy; 2026 Jay&trade; - all rights reserved</p>
      </div>
    </main>
  );
}
