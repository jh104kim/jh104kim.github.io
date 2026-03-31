import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#1428a0] flex items-center justify-center text-white text-xs font-bold">
              JH
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{profile.name}</p>
              <p className="text-xs text-gray-400">
                Compressor Engineering + AI Automation
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-gray-500 hover:text-[#1428a0] transition-colors"
            >
              {profile.email}
            </a>
            <a
              href={profile.notion}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#1428a0] transition-colors"
            >
              Notion
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            ⓒ 2026 김정현 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
