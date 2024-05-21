import "./PageNotFound.css";

export function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<p>The page you are looking for doesn't exist.</p>

            <iframe 
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                allow="autoplay" 
                title="Page Not Found"
            ></iframe>
        </div>
    );
}
