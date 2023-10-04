
const Loading = ({title}) => {
    return (
        <h2 style={{textAlign:"center", fontSize:"30px"}}>
            {title || "Fetching data..."}
        </h2>
    );
}

export default Loading;
