import { useQuery } from "@tanstack/react-query";
const Query = () => {
    const { data: comments, isLoading, error } = useQuery({
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/comments?_limit=10').then(
                (res) => res.json()

            ), queryKey: ['comments'],
    });

    if (isLoading) {
        return < h2 > ......loading </h2>;
    }

    if (error) {
        return <div className="error"> Error: couldn't fetch data </div>;
    }

    return (
        <div>
            <h1 className="title">Email address of users</h1>
            {comments.map((comment) => (
                <h2 key={comment.id} className="users">
                    {comment.id}.
                    {comment.email}
                </h2>
            ))}
        </div>
    );

};

export default Query