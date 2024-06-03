import Card from "./Card";
import { useSelector } from "react-redux";
import styles from '../styles/Cards.module.css'
export default function Cards() {
    const items = useSelector((state) => state.items)

    return (
        <div className={styles.container}>
            {items.map((country) => {
                return (
                    <Card
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        image={country.image}
                        continent={country.continent}
                    />
                )
            })}
        </div>
    )
}

