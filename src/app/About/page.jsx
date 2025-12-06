// app/about/page.jsx  (server component)
import AboutSection from "../About/AboutSection"; // your existing client component
export const metadata = {
  title: "About Us — Learners Digital",
  description:
    "Discover Learners Digital's mission to build industry-ready talent through practical training and partnerships across GCC universities, corporates, and students.",
  authors: [{ name: "Learners Digital" }],
  openGraph: {
    title: "About Us — Learners Digital",
    description:
      "Discover Learners Digital's mission to build industry-ready talent through practical training and partnerships across GCC universities, corporates, and students.",
    url: "https://yourdomain.com/about",
    siteName: "Learners Digital",
    images: [
      {
        url: "https://yourdomain.com/og-images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Learners Digital - About"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Learners Digital",
    description:
      "Discover Learners Digital's mission to build industry-ready talent through practical training and partnerships across GCC universities, corporates, and students.",
    images: ["https://yourdomain.com/og-images/about-og.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://yourdomain.com/about"
  }
};



export default function AboutPage() {
  return <AboutSection />; // your existing client component
}
