export default function SideBar(props) {
  const { handleToggleModal, data } = props;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${data?.title}`;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="learnMore"
        >
          <p>Learn More on Youtube</p>
        </a>
        <a
          href="https://apod.nasa.gov/apod/astropix.html"
          target="_blank"
          rel="noopener noreferrer"
          className="courtesy"
        >
          <p>Image and data courtesy of NASA’s Astronomy Picture of the Day</p>
        </a>

        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
