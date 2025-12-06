// app/layout.tsx
import "./globals.css";
import Header from "../Components/NavBar/Header"; // see note about casing below
import Footer from "../Components/Footer/Footer";

export const metadata = {
  title: "Learners Digital",
  description: "Learners Digital",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
