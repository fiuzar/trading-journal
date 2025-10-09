import Header from "@/components/root/header"
import Footer from "@/components/root/footer"
import Hero from "@/components/root/hero"
import HomeFeatures from "@/components/root/home-features";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <HomeFeatures />
      </main>
      
      <Footer />
    </>
  );
}
