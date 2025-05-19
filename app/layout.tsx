import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jozef Kováč | QA Engineer & Test Automation Specialist",
  description: "Jozef Kováč is a QA Engineer with 6+ years of experience in test automation, tool development, and quality assurance for web and mobile applications.",
  keywords: ["QA Engineer", "Test Automation", "Playwright", "Cypress", "Robot Framework", "NextJS", "TypeScript", "Quality Assurance"],
  authors: [{ name: "Jozef Kováč" }],
  creator: "Jozef Kováč",
  publisher: "Jozef Kováč",
  metadataBase: new URL("https://jkovac.eu"),
  alternates: {
    canonical: "https://jkovac.eu",
  },
  openGraph: {
    title: "Jozef Kováč | QA Engineer & Test Automation Specialist",
    description: "QA Engineer with expertise in test automation, tool development, and quality assurance for web and mobile applications.",
    url: "https://jkovac.eu",
    siteName: "Jozef Kováč Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/dodo-programmer.png",
        width: 800,
        height: 800,
        alt: "Jozef Kováč",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jozef Kováč | QA Engineer & Test Automation Specialist",
    description: "QA Engineer with expertise in test automation, tool development, and quality assurance.",
    images: ["/dodo-programmer.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#C5F8FF] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#C9DECE] absolute top-[-6rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-center" />
            <Footer />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
