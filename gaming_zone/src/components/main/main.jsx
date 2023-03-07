import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";
import "./main.css"
const Main = ()=> {
    const [action, setAction] = useState([]);
    const [puzzle, setPuzzle] = useState([]);
    const [combat,setCombat] = useState([]);
    const [boardgame,setBoardgame] =useState([])
    useEffect(()=> {
        axios.get('http://localhost:1337/api/actions?populate=*').then((action)=> {
            setAction(action.data.data)
            // to get the data make it publish 
            
            // console.log(action.data.data) 
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/puzzles?populate=*').then((puzzle)=> {
            setPuzzle(puzzle.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/combats?populate=*').then((combat)=> {
            setCombat(combat.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/board-games?populate=*').then((boardgame)=> {

        //http://localhost:1337/api/board-games
            setBoardgame(boardgame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
    return (
        <>
            <Header/>
            <section>
                <article><span className="category">ACTION GAMES</span></article>
                {action.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <article><span className="category">PUZZLE GAMES</span></article>
                {puzzle.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
                 <article><span className="category">COMBAT GAMES</span></article>
                {combat.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}

                 <article><span className="category">BOARD GAMES</span></article>
                {boardgame.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
            </section>
        </>
    )
}
export default Main