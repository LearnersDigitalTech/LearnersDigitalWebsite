"use client";
import VideoSlider from "../Components/VideoSlider/VideoSlider";

const videos = [
  {
    id: 1,
    poster: "/videos/poster2.png",
    title: "Onyx",
    subtitle: "Onyx Health Best in KLAS for FHIR-based health data interoperability. We power CMS-0057—and help define the standards that shape it.",
    youtubeUrl: "https://youtu.be/Sf3u_xT1avM" 
  },
  {
    id: 2,
    poster: "/videos/poster1.jpg",
    title: "Learners Digital",
    subtitle: "Learners Digital Celebration Video.",
    youtubeUrl: "https://youtu.be/16_2IwhIcDs"
  },
  {
    id: 3,
    poster: "/videos/poster3.jpg",
    title: "Abacus",
    subtitle: "Abacus Insights simplifies healthcare data with best-in-class data management solutions that improve data quality and drive valuable insights.",
    youtubeUrl: "https://youtu.be/HFU361oJh_k"
  },
  {
    id: 4,
    poster: "/videos/poster4.png",
    title: "Get Together of Onyx and NewWave",
    subtitle: "Teams unite to support special communities",
    youtubeUrl: "https://youtu.be/Kk6rEyBh7M0"
  },
  {
    id: 5,
    poster: "/videos/poster5.png",
    title: "University Placement Officers MeetUp 2025",
    subtitle: "Gathering with the placement Officers of differnt Universities.",
    youtubeUrl: "https://youtu.be/uhWzLVOsOcM"
  },
];

export default function VideoSection() {
  return (
    <main className="p-8">
      <VideoSlider videos={videos} visibleCount={3} />
    </main>
  );
}
