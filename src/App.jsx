import { useEffect, useState } from "react"
import "./style.css"

export function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState(false)

    const CHUCK_NORRIS_RANDOM_JOKE = 'https://api.chucknorris.io/jokes/random?category='
    const categories = 'https://api.chucknorris.io/jokes/categories'
    const [options, setOptions] = useState([]);
    const [filtro, setFiltro] = useState('animal');

    const dropdownchange = (e) => {
        setFiltro(e.target.value)
    }


    const cargardatos = () => {
        fetch(categories)
            .then(res => res.json())
            .then((data) => {
                setOptions(data);
                setIsLoading(false);
            })
    }


    const hacerclick = () => {
        fetch(CHUCK_NORRIS_RANDOM_JOKE + filtro)
            .then(res => res.json())
            .then((data) => {
                setValue(data.value);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        if (isLoading) {
            fetch(CHUCK_NORRIS_RANDOM_JOKE)
                .then(res => res.json())
                .then((data) => {
                    setValue(data.value);
                    setIsLoading(false);
                })
            cargardatos();
        }
    }, [isLoading, filtro])


    if (isLoading) {
        return (
            <div className="App">
                <h1>Loading...</h1>
            </div>
        );
    }


    return (
        <body>
            <nav>
                <div className="menu">
                    <div className="logo">
                        <p></p>
                    </div>
                </div>
            </nav>

            <div className="img"></div>

            <div className="center">
                <div className="title">
                    <h1>Chuck Norris Jokes</h1>
                </div>
                <div className="joke">
                    <p>{value}</p>
                </div>
                <div className="bttn">
                <button onClick={hacerclick}>
                    Generate joke
                </button>
                {options && (<>
                <select className="select" onChange={dropdownchange} id="categories">
                    {options.map((option) => (
                        <option key={option} value={option} >
                            {option}
                        </option>
                    ))}
                </select>
            </>)}
            </div>
         </div>
        </body>
    )
}

