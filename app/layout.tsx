import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const integralcf = localFont({
  src: [
    {
      path: "../public/fonts/integralcf-regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/integralcf-bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-integralcf",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Next.js Commerce",
  description: "This is an example store built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${integralcf.variable} ${satoshi.variable} font-sans`}>
        <Banner className="bg-red-500">
          The data on this website is fictitious. It is used to demonstrate a
          website created with Next.js Commerce.
        </Banner>
        <Banner>
          Sign up and get 20% off to your first order.{" "}
          <Link href="#" className="underline font-semibold">
            Sign Up Now
          </Link>
        </Banner>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
