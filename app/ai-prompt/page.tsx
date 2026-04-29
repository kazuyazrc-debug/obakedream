import type { Metadata } from "next";
import { AiPromptPanel } from "@/components/AiPromptPanel";

export const metadata: Metadata = {
  title: "AIに夢をもう少し深く読んでもらう | おばけの夢占い",
  description: "ChatGPT / Gemini / Claude に貼り付けるための夢読みメモを作ります。",
};

export default function AiPromptPage() {
  return <AiPromptPanel />;
}
