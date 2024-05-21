import { TestAuth } from "../TestAuth/TestAuth";
import "./Home.css";

export function Home(): JSX.Element {
    return (
        <div className="Home">
            <TestAuth />
        </div>
    );
}
