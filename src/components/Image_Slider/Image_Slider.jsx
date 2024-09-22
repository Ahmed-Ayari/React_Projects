import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, page = 1, limit = 6 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data ! please wait</div>;
  }

  if (error !== null) {
    return <div>Error occured, {error}</div>;
  }

  function previous(){
    setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide - 1)
  }

  function next(){
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className="container">
      <div className="is_container">
        <BsArrowLeftCircleFill className="arrow arrow_left" onClick={previous}/>
        {images && images.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                alt={image.download_url}
                src={image.download_url}
                className={
                    currentSlide === index ? "current_image" : "current_image hide_image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill className="arrow arrow_right" onClick={next}/>
        <span className="circle_indicator">
          {images && images.length
            ? images.map((_, index) => (
                <button key={index} className={
                    currentSlide === index ? "current_indicator" : "current_indicator inactive_indicator"}
                    onClick={() => setCurrentSlide(index)}
                    ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
