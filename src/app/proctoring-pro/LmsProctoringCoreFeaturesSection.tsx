import {
  Camera,
  LockKeyhole,
  ShieldAlert,
  ScanFace,
  Images,
  FileBarChart2,
} from "lucide-react";

type CoreFeature = {
  title: string;
  icon: React.ElementType;
  points: string[];
};

const coreFeatures: CoreFeature[] = [
  {
    title: "Webcam Image Capture",
    icon: Camera,
    points: [
      "Captures webcam images automatically during quiz attempts",
      "Default capture interval: every 30 seconds configurable",
      "Images saved as PNG files",
      "Image size configurable by width",
    ],
  },
  {
    title: "Quiz Access Control",
    icon: LockKeyhole,
    points: [
      "Prevents quiz start unless webcam access is granted",
      "Optional face validation before quiz start",
      "Face validation can be enabled or disabled per configuration",
    ],
  },
  {
    title: "Suspicious Activity Detection",
    icon: ShieldAlert,
    points: [
      "Webcam disabled during quiz",
      "Switching browser tabs or applications",
      "Screen resizing",
      "Copy and paste actions",
      "Pressing the F12 key developer tools",
    ],
  },
  {
    title: "Face Recognition",
    icon: ScanFace,
    points: [
      "Brain Station Face Matching API",
      "AWS Face Rekognition support",
      "Validate quiz participant identity",
      "Reduce impersonation risk during exams",
    ],
  },
  {
    title: "Image and User Management",
    icon: Images,
    points: [
      "Upload base images for users",
      "Upload images individually or in bulk ZIP file",
      "Detect whether a face exists in uploaded images",
      "Update or delete user images",
      "Filter users by image and face-detection status",
    ],
  },
  {
    title: "Reporting",
    icon: FileBarChart2,
    points: [
      "Individual user proctoring reports",
      "Image analysis reports matched or unmatched",
      "Suspicious activity logs",
      "Copy-paste logs",
      "Downloadable PDF proctoring reports",
    ],
  },
];

export default function LmsProctoringCoreFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] px-6 py-[105px] text-[#07112b]">
      {/* Background soft glow */}
      <div className="pointer-events-none absolute -left-[220px] top-[120px] h-[520px] w-[520px] rounded-full bg-[#08a7df]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[240px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex rounded-full bg-white px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8] shadow-[0_12px_30px_rgba(17,30,64,0.06)]">
            Proctoring Pro
          </span>

          <h2 className="mt-6 text-[42px] font-black leading-[1.06] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            Core Features
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            Powerful Moodle proctoring tools designed to protect exam integrity,
            verify learners, detect suspicious activity, and generate clear
            reporting.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#111E40] p-8 text-white shadow-[0_24px_70px_rgba(17,30,64,0.14)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_34px_95px_rgba(17,30,64,0.24)]"
              >
                {/* Top hover line */}
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#08a7df] via-[#54c8ee] to-[#ffab2e] opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Decoration circles */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />

                <div className="relative z-10">
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-white/8 text-[#54c8ee] transition duration-300 group-hover:bg-[#08a7df] group-hover:text-white">
                    <Icon size={34} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-9 max-w-[340px] text-[28px] font-black leading-[1.12] tracking-[-0.06em] text-white md:text-[32px]">
                    {feature.title}
                  </h3>

                  <ul className="mt-7 space-y-3.5">
                    {feature.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#54c8ee]" />
                        <p className="text-[14px] font-medium leading-[1.5] tracking-[-0.025em] text-white/82 md:text-[15px]">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}