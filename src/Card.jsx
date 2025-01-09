import { Link } from "react-router-dom";

function Card({
    image = "https://placehold.co/600x400",
    title,
    tags,
    content,
    categoria,
    published,
    id,
    onDelete,
}) {
    return (
        <>
            <img
                src={"https://placehold.co/600x400"}
                alt={title}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <div>{categoria}</div>
                <div>{tags}</div>
                <div>{published}</div>
                <Link to={`/posts/${id}`}>Vedi dettaglio</Link>
                <button onClick={onDelete}>Delete</button>
            </div>
        </>
    );
}



export default Card;