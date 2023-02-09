import React from "react'";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props){
    const [open,setOpen] = React.useState(false);

    return (
        <>
            <FormDialog
                open={open}
                setOpen={setOpen}
                title={props.name}
                category={props.category}
                cost={props.cost}


            />


            <div className="card-container" onClick={() =>
            setOpen(true)
            }>
            <h1 className="card-title">{props.name}
            </h1>
            <p className="card-id">{props.id}</p>
            </div>
        </>
    )
}