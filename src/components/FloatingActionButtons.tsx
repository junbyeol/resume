import { LuArrowUp, LuDownload } from "react-icons/lu";

type FloatingActionButtonLabels = {
  scrollTop: string;
  downloadResume: string;
};

type FloatingActionButtonsProps = {
  labels: FloatingActionButtonLabels;
  resumePdfUrl?: string;
  onDownloadResume?: () => void;
  isMobile?: boolean;
};

const baseButtonClassName =
  "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 shadow-lg transition focus-visible:outline-none focus-visible:ring-2 cursor-pointer";

export const FloatingActionButtons = ({
  labels,
  resumePdfUrl,
  onDownloadResume,
  isMobile = false,
}: FloatingActionButtonsProps) => {
  const handleScrollTop = () => {
    const rootScrollContainer = document.getElementById("root");

    if (rootScrollContainer) {
      rootScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const scrollingElement = document.scrollingElement;

    if (scrollingElement) {
      scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    if (onDownloadResume) {
      onDownloadResume();
      return;
    }

    if (!resumePdfUrl) {
      window.print();
      return;
    }

    window.open(resumePdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <button
        type="button"
        aria-label={labels.scrollTop}
        title={labels.scrollTop}
        className={
          baseButtonClassName + " bg-background text-text hover:bg-accent-muted"
        }
        onClick={handleScrollTop}
      >
        <LuArrowUp aria-hidden="true" />
        <span>{labels.scrollTop}</span>
      </button>
      {!isMobile && (
        <button
          type="button"
          aria-label={labels.downloadResume}
          title={labels.downloadResume}
          className={
            baseButtonClassName + " bg-accent text-background hover:opacity-80"
          }
          onClick={handleDownloadResume}
        >
          <LuDownload aria-hidden="true" />
          <span>{labels.downloadResume}</span>
        </button>
      )}
    </div>
  );
};
