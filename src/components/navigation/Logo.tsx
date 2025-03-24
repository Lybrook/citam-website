import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="CITAM Kitale"
        width={150}
        height={50}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
};

export default Logo;
