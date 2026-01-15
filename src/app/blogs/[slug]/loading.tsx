import Loader from "@/components/Loader/Loader";

export default function Loading() {
  // Define the Loading UI here
  return (
    <div className="flex h-[100vh] text-[#fff] items-center justify-center">
      <Loader />
    </div>
  );
}
