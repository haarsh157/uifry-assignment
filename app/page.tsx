import { Main } from "@/components/main";
import Advantages from "@/components/main/Advantages";
import Download from "@/components/main/Download";
import { Features } from "@/components/main/Features";
import Testimonials from "@/components/main/Testimonials";
import Faqs from "@/components/main/faqs";

export default function Home() {
  return (
    <main className="section">
      <Main />
      <Features />
      <Advantages />
      <Testimonials />
      <Faqs />
      <Download />
    </main>
  );
}
