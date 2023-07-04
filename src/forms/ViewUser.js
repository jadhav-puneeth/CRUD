import React from "react";

export default function Viewuser(props){
    return (
        <>
            <form>
                <label>Name</label>
                <input type="text" name="name" value={props.user.name} readOnly/>
                <label>Username</label>
                <input type="text" name="username" value={props.user.username} readOnly/>
                <button onClick={() => props.setdisplay('view')} className="button muted-button">
                    Back
                </button>
            </form>
        </>
    )
}