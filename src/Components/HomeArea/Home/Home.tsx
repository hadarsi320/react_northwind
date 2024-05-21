import { notify } from "../../../Utils/notify";
import "./Home.css";

export function Home(): JSX.Element {
    const notif = () => (notify.success("🤷‍♂️"))

    return (
        <div className="Home">
			<button onClick={notif}>🍦</button>
        </div>
    );
}
