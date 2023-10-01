import { useSelector } from "react-redux";

export default function Player() {
    const {link} = useSelector(state => state.video).video;
    return (
        <iframe
            width="100%"
            className="aspect-video"
            src={link}
            title="Some video title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
