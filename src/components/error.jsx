
const Error = ({title}) => {
    return (
        <h2 style={{fontSize: "18px", color: "red", margin: "20px 0", textAlign:"center"}}>
            {title || "Something went wrong ..."}
        </h2>
    );
}

export default Error;
