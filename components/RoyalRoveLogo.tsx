import Image from "next/image";
import "./RoyalRoveLogo.css";

export default function RoyalRoveLogo({ priority = false }: { priority?: boolean }) {
  return <span className="royal-rove-logo"><Image src="/images/royal-rove-logo-white.png" alt="Royal Rove" width={3508} height={2480} priority={priority} sizes="250px" /></span>;
}
