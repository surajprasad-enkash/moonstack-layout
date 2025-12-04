import MorphSection from "@/components/MorphSection";

export default function Page() {
  return (
    <div>
      {/* <div className="h-[100vh]"></div> */}
      <MorphSection />

      <div className="bg-primary h-[200vh] p-10">
        Scroll down to see the shape change smoothly.
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
}
