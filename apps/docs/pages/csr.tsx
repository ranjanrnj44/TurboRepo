import { useEffect, useState } from "react"; //react,state
import { Buttons } from "ui"; //shared library - btn
import styles from '../global-styles/style.module.css'; //css
import _ from 'lodash'; //loadash (NEW VERSION 4.17)
import { nanoid } from 'nanoid'; //nanoid (NEW VERSION 4)

//lodash and nanoid
let word = 'turborepo';
let randomID = nanoid();

//interface
interface IPost{
    id: number,
    email: string,
    username:string
}
//component
export default function Csr(){
    const [todo, setTodo] = useState<IPost[]>([]);

    useEffect(() => {
        const apiCall = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            setTodo(data);
        };
        setTimeout(() => apiCall(), 3000);
        //return
        return () => { };
    }, []);

    console.log(randomID);

    return (
        <>
            <h2>Nextjs CSR : <span style={{ color: "red" }}>{_.capitalize(word)}</span></h2>
            <h3>{todo.length === 0 && "Loading... ...."}</h3>
            <div className={styles.card_one}>
                {todo.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <h4>{item.email}</h4>
                        <p>{item.username}</p>
                        <Buttons />
                    </div>
                ))}
            </div>
        </>
    );
};