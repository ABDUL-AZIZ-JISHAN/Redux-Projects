
const Loading = ({title}) => {
    return (
        <h2 style={{fontSize: "18px"}}>
            {title || "Fetching..."}
        </h2>
    );
}

export default Loading;
