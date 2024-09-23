'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function HeroSection() {
  const params = useParams();
  const locale = params.locale;

  return (
    <div className="w-full">
      <section className="hero select-none">
        <div className="relative">
          <Image
            src="/images/feeling (12).jpg"
            alt="Welcome to Sampola"
            layout="responsive"
            width={1200}
            height={600}
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.55)] to-[rgba(255,255,255,0.1)] backdrop-blur-[0.6px]"></div>
        </div>
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold mb-4 text-[#45624E]">Welcome to Sampola</h1>
          <p className="text-xl mb-8">We offer local services and quality products</p>
          <Link
            href={`/${locale}/about`}
            className="bg-green-dark text-[#F5F7EE] px-6 py-2 rounded-full hover:bg-green-light transition duration-300"
          >
            Learn more
          </Link>
        </div>
      </section>
    </div>
  );
}
