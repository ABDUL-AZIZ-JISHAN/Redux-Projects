
const Error = ({title}) => {
    return (
        <h2 style={{color: "red", textAlign:'center'}}>
            {title || "Something went wrong. Please try again or check your server."}
        </h2>
    );
}

export default Error;
