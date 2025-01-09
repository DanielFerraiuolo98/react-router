import { useParams } from "react-router-dom";

export default function PostPage() {
    const { id } = useParams();
    return <h1>Sono il post con id {id}</h1>;
}