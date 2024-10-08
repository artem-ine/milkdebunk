/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @param {VideoProps}
 */
const Video = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="video"
    >
    <div
      dangerouslySetInnerHTML={{
        __html: slice.primary.video.html,
      }}
      />
    </section>
  );
};

export default Video;
