import React from "react";

function Rating({count,rate}){
    return  <>
                <span className="badge badge-pill bg-warning">{rate}/{count}</span>
            </>
}
export default Rating;