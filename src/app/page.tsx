import Link from "next/link";
import Gallery from "@/components/Gallery";

const mockUrls = [
  "https://utfs.io/f/403739a2-b078-493d-8e4a-87923b40adf0-nm65jp.jpg",
  "https://utfs.io/f/611d8fcd-47f9-4f74-b5e5-d62c4e8255fe-1mnr9c.jpeg",
  "https://utfs.io/f/d64a0ffb-08ea-46e2-8f0f-0eaaf18f3429-1x9crm.JPG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))  
      }
      </div>
    </main>
  );
}
