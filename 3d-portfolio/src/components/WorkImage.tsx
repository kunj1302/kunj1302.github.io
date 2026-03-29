import { useState } from "react";
import { MdArrowOutward, MdPlayCircle } from "react-icons/md";
import VideoModal from "./VideoModal";

export interface WorkImageProps {
  image: string;
  alt?: string;
  link?: string;
  video?: string;
  video2?: string;
}

const WorkImage = ({
  image,
  alt = "",
  link,
  video,
  video2,
}: WorkImageProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const hasVideo = Boolean(video || video2);

  return (
    <>
      <div className="work-image">
        <div className="work-image-in">
          <img src={image} alt={alt} />
          <div className="work-image-actions">
            {link && (
              <a
                className="work-action work-action--github"
                href={link}
                target="_blank"
                rel="noreferrer"
                title="Open GitHub"
                data-cursor="disable"
              >
                <MdArrowOutward />
              </a>
            )}
            {hasVideo && (
              <button
                type="button"
                className="work-action work-action--play"
                onClick={() => setModalOpen(true)}
                title="Watch demo"
                data-cursor="disable"
              >
                <MdPlayCircle />
              </button>
            )}
          </div>
        </div>
      </div>
      <VideoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={alt}
        src={video}
        src2={video2}
      />
    </>
  );
};

export default WorkImage;
