import { useEffect } from "react";
import "./styles/VideoModal.css";
import { MdClose } from "react-icons/md";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  src?: string;
  src2?: string;
};

const VideoModal = ({ open, onClose, title, src, src2 }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="video-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Demo video"}
      onClick={onClose}
    >
      <div
        className="video-modal-panel"
        onClick={(e) => e.stopPropagation()}
        data-cursor="disable"
      >
        <div className="video-modal-head">
          {title && <h3>{title}</h3>}
          <button
            type="button"
            className="video-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <MdClose />
          </button>
        </div>
        <div
          className={`video-modal-body ${src2 ? "video-modal-body--dual" : ""}`}
        >
          {src && (
            <video
              className="video-modal-video"
              src={src}
              controls
              playsInline
              autoPlay
            />
          )}
          {src2 && (
            <video
              className="video-modal-video"
              src={src2}
              controls
              playsInline
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
