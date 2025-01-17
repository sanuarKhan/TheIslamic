
import { FeatureCard } from "./FeatureCard";

export function FeatureSection() {
  const features = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3768394bc42aa00a9bfc57d3b7b6643142c4c97bc82e98965df0b74d9141447c?placeholderIfAbsent=true&apiKey=7cc451b09be74ab394917394dfb5a2db",
      title: "Quran",
      imageClassName: "aspect-[1.15] w-[107px]",
      route: "/quran",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bc32ed3f32f8d32504f8d316503fc267464e608a53cbc7644ca20d8bb9392f4d?placeholderIfAbsent=true&apiKey=7cc451b09be74ab394917394dfb5a2db",
      title: "Tafsir",
      imageClassName: "aspect-[1.09] w-[110px]",
      route: "/tafsir",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9bc95e2505a949331b28488237de10b6a1533e0736ac0a0801cf44ac82b7b?placeholderIfAbsent=true&apiKey=7cc451b09be74ab394917394dfb5a2db",
      title: "Theme",
      imageClassName: "aspect-[1.10] w-[110px] rounded-3xl",
      route: "/theme",
    },
  ];

  return (
    <div className="flex justify-center mt-24 w-full  max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex gap-5 justify-center items-center  max-md:flex-col">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
