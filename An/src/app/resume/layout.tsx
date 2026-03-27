import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Karishma Bishnoi",
  description:
    "View and download Karishma Bishnoi's professional resume. Student developer with expertise in C++, UI/UX Design, and IoT.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Karishma Bishnoi",
    description:
      "View and download Karishma Bishnoi's professional resume featuring her experience and skills as a student developer.",
    url: "https://karishma-s-portfolio-phi.vercel.app/resume", 
    siteName: "Karishma Bishnoi",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Karishma Bishnoi Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Karishma Bishnoi",
    description:
      "View Karishma Bishnoi's professional resume and experience as a student developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/karishma-resume.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
