import HuggingFace from "@/src/lib/api/huggingface";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HuggingFace inputs={""} />
    </main>
  );
}
