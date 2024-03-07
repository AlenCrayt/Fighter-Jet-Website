import YouTube from "react-youtube";

export default function MainArticle({plane_selected}) {
    //The "main" article is assembled with the map() function by filling in tags with information from each plane object in the fighter_list array
    return (
        <article className="container text-center">
            <YouTube videoId={plane_selected.video} opts={{playerVars: {autoplay: 1, controls: 0}}} />
            <h2>{plane_selected.fighter_name}</h2>
            <p>{plane_selected.text_1}</p>
            <img src={plane_selected.images[1]} id="carousel_img" alt=""/>
            <p>{plane_selected.text_2}</p>
            <img src={plane_selected.images[2]} id="carousel_img" alt=""/>
            <p>{plane_selected.text_3}</p>
        </article>
    );
}