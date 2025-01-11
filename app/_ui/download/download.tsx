import Image from "next/image";

export const DownloadButton = ({ url }: { url: string }) => (
  <a
    href={url}
    className="flex items-center justify-center gap-2 border border-white rounded-lg font-medium text-[15px] px-4 py-1 transition hover:bg-neutral-50 hover:bg-opacity-10"
    target="_blank"
  >
    Download
    <Image
      src="/icon/common/download.svg"
      alt="Download"
      width={16}
      height={14}
    />
  </a>
);
