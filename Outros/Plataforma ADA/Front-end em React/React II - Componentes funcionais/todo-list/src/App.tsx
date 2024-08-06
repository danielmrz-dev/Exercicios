import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import "./styles/global.css";

function App() {

	const [toggle, setToggle] = useState(false);

    // useEffect(() => {
    //     console.log("Executando a função do useEffect.");
	// 	return () => {
	// 		console.log("Isso aqui será executado quando o componente for desmontado.");
			
	// 	}
    // }, [toggle]);

    return (
        <>
            <Header />
            <Tasks />

			<button onClick={() => setToggle(!toggle)}>Toggle</button>
        </>
    );
}

export default App;
