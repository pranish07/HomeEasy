import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Header from "@/components/ui/navbar";
import Search  from "@/components/ui/search" 

export default function Home() {
  return(
    <div>
      <Navbar/>
      <Button variant="outline">Button</Button>;
      <Search/>
      <Footer />
    </div>
  )
}
