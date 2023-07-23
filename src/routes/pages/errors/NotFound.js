import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div>
                Not Found!
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}