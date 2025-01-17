import { FeatureSection } from "../features/FeatureSection";
import SearchBar from "../SearchBar";

export function MainLayout() {
  return (
    <main
      className="flex overflow-hidden flex-col   pb-64 bg-red-50 max-md:px-5 max-md:pb-24 w-full container mx-auto"
      role="main"
    >
      <SearchBar />

      <FeatureSection />
    </main>
  );
}