import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import {
  ApplePayIcon,
  GooglePayIcon,
  MasterCardIcon,
  PayPalIcon,
  VisaIcon,
} from "../icon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <section className="relative -bottom-20">
        <div className="container mx-auto px-6 md:px-0">
          <div className="bg-black rounded-2xl p-4 md:p-9 text-white flex flex-col gap-4 lg:flex-row items-center justify-between">
            <h2 className="font-bold text-4xl">
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h2>

            <div className="w-full max-w-xs">
              <div className=" w-full flex gap-2 items-center relative">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-4"
                >
                  <path
                    d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z"
                    fill="black"
                    fillOpacity="0.4"
                  />
                </svg>

                <Input
                  type="email"
                  placeholder="Enter your email"
                  variant="pill"
                  className="pl-12 text-black"
                />
              </div>
              <Button variant="secondary" className="mt-4 w-full">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className=" bg-gray-100  pt-32">
        <div className="container mx-auto px-6 md:px-0 ">
          <div className="grid grid-cols-2 gap-6 lg:flex justify-between">
            <div className="max-w-xs col-span-2">
              <div className="mb-9">
                <Link href="#" className="text-2xl font-bold mb-6">
                  SHOP.CO
                </Link>

                <p className="text-sm text-gray-600">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-white border hover:bg-black hover:text-white transition duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-white border hover:bg-black hover:text-white transition duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-white border hover:bg-black hover:text-white transition duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-white border hover:bg-black hover:text-white transition duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="max-w-xs">
              <p className="font-semibold tracking-widest uppercase lead-2 mb-3 lg:mb-6">
                COMPANY
              </p>

              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div className="max-w-xs">
              <p className="font-semibold tracking-widest uppercase lead-2 mb-3 lg:mb-6">
                HELP
              </p>

              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="max-w-xs">
              <p className="font-semibold tracking-widest uppercase lead-2 mb-3 lg:mb-6">
                FAQ
              </p>

              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Payments
                  </Link>
                </li>
              </ul>
            </div>

            <div className="max-w-xs">
              <p className="font-semibold tracking-widest uppercase lead-2 mb-3 lg:mb-6">
                RESOURCES
              </p>

              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mt-10" />

          <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-4">
            <p className="text-gray-500 text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="flex items-center">
              <VisaIcon />
              <MasterCardIcon />
              <PayPalIcon />
              <ApplePayIcon />
              <GooglePayIcon />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
