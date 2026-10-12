export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#05070d] px-6 py-5 text-center" style={{ backgroundColor: "#05070d" }}>
      <p className="text-xs text-white/45">
        © {year}{" "}
        <a
          href="https://www.driacom.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white/65 underline decoration-white/20 underline-offset-2 transition hover:text-white"
        >
          Driacom
        </a>{" "}- Prompt AI Generator
      </p>
    </footer>
  );
}
