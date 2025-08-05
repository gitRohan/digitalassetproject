import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

export default function Home() {
  const perk=[
    {
      name: "Instant Delivery",
      Icons: ArrowDownToLine,
      description:"Get your digital assets delivered to your email in seconds and download them right to your device"
    },
    {
      name: "Guaranteed Quality",
      Icons: CheckCircle,
      description:"Every asset on our platform is verified by our team to ensure highest quality and authenticity"
    },
    {
      name: "For the Planet",
      Icons: Leaf,
      description:"We've pledged 1% of sales to the preservation and restoration of the nature."
    }
  ]
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col max-w-3xl items-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high quality {" "}
          <span className="text-blue-600">digital assets</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to AssetsHippo. Every assets on our platform are verified by our team to ensure quality and authenticity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/product" className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">

        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}
