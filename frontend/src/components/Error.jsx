import {useRouteError} from "react-router-dom";

function Error(){
    const error= useRouteError();
    return(
<>
<p>Opps, you land on a wrong page</p>
<p>{error.message}</p>
<p>{error.status}</p>
</>
    )

}

export default Error;