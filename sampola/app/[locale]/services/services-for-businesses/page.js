'use client'
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

export default function ServicesForCompany() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <h1 className="text-5xl font-bold text-green mb-4 text-center p-6">
          Services for Company
        </h1>

        <div className="flex w-full justify-center">
          <Separator className="my-4 h-[2px] w-[95%] bg-green justify-center" />
        </div>

        {/* Upholstery and restoration section */}
        <div className="my-8 px-6" >
          <h2 className="text-2xl font-bold text-green-dark">Your Business Ally for Success</h2>
          <p className="mt-4">
            At Sampola, we offer a variety of services for businesses. Contact us, and together we will find the best solution for your enterprise!
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Separator className="my-4 h-[2px] w-[95%] bg-green justify-center" />
        </div>

        {/* Section for services */}
        <div className="my-8 px-6" >
          <h2 className="text-2xl font-bold text-green-dark"></h2>
          <div className="flex flex-col space-y-8 mt-6">
			  {/* Combined Assembly and Subcontracting in one row */}
            <div className="flex space-x-6">

              {/* Assembly */}
              <div className="flex flex-col items-center">
                <Image
                  src="https://dummyimage.com/600x600/ddd/000.png&text=Placeholder"
                  alt="Upholstery accessories"
                  width={250}
                  height={200}
                  className="object-cover rounded-2xl shadow-lg"
                />
                <h3 className="text-xl font-bold text-green-dark mt-2">Assembly and packaging work</h3>
                <p className="mt-2 text-center">
                  Our assembly and packaging services ensure that your products are prepared efficiently and professionally. Let us help streamline your production process and enhance your product presentation!
                </p>
                <Button className="bg-green-dark rounded-full hover:bg-green-light text-[#F5F7EE] w-28 mt-6">
                  Apply now
                </Button>
              </div>

              {/* Subcontracting */}
              <div className="flex flex-col items-center">
                <Image
                  src="https://dummyimage.com/600x600/ddd/000.png&text=Placeholder"
                  alt="Upholstery accessories"
                  width={250}
                  height={200}
                  className="object-cover rounded-2xl shadow-lg"
                />
                <h3 className="text-xl font-bold text-green-dark mt-2">Subcontracting work</h3>
                <p className="mt-2 text-center">
                  Our subcontracting services offer flexible solutions tailored to your project needs. Let us help you manage workloads and meet deadlines.
                </p>
                <Button className="bg-green-dark rounded-full hover:bg-green-light text-[#F5F7EE] w-28 mt-6">
                  Apply now
                </Button>
              </div>

            </div>
			<Separator className="bg-green-dark h-[2px]" />
            <div className="flex space-x-6">

              {/* EAN-codes */}
              <div className="flex flex-col items-center">
                <Image
                  src="https://dummyimage.com/600x600/ddd/000.png&text=Placeholder"
                  alt="Upholstery accessories"
                  width={250}
                  height={200}
                  className="object-cover rounded-2xl shadow-lg"
                />
                <h3 className="text-xl font-bold text-green-dark mt-2">EAN-codes labeling and replacements</h3>
                <p className="mt-2 text-center">
                  We specialize in EAN code labeling and replacements to ensure your products meet retail standards. Trust us to streamline your inventory management and enhance your product visibility in the market!
                </p>
                <Button className="bg-green-dark rounded-full hover:bg-green-light text-[#F5F7EE] w-28 mt-6">
                  Apply now
                </Button>
              </div>

              {/* Freight */}
              <div className="flex flex-col items-center">
                <Image
                  src="https://dummyimage.com/600x600/ddd/000.png&text=Placeholder"
                  alt="Upholstery accessories"
                  width={250}
                  height={200}
                  className="object-cover rounded-2xl shadow-lg"
                />
                <h3 className="text-xl font-bold text-green-dark mt-2">Freight forwarding and deliveries</h3>
                <p className="mt-2 text-center">
                  We provide comprehensive freight forwarding and delivery services to ensure your products reach their destination safely and on time.
                </p>
                <Button className="bg-green-dark rounded-full hover:bg-green-light text-[#F5F7EE] w-28 mt-6">
                  Apply now
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
