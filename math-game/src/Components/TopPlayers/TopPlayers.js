import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

import '../../Sass/TopPlayers.scss';

import API from '../../Api/Api';

import Levels from './Levels';
import Loader from '../Loader/Loader';

const TopPlayers = () => {

    const [level1, setLevel1] = useState([]);
    const [level2, setLevel2] = useState([]);
    const [level3, setLevel3] = useState([]);
    const [loader, setLoader] = useState(true);

    // useEffect(()=>{
    //     if(!consultar) return;
    
    //     const consultarAPI = async () =>{
    //       const {nombre, categoria} = busqueda;
    //       const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
    
    //       const resultado = await axios(url);
    //       guardarRecetas(resultado.data.drinks);
    //     }
    //     consultarAPI();
    //   },[busqueda,consultar]);


    useEffect(()=> {

        axios.get(API.GET_POST_PLAYER)
        .then(res => {

            // console.log(res.data);
            setLoader(false);

            setLevel1(res.data[0]);
            setLevel2(res.data[1]);
            setLevel3(res.data[2]);
        })
        .catch(err => {
            alert(err.message);
        })
    },[])

    // console.log(level1, level2)

    return(

        <Loader visible={loader}>

            <div className='DivTop'>
                <header>

                    <div className='Div1'></div>

                    <div className='Div2'>
                        <h2>MathTrix</h2>
                    </div>

                    <div className='Div3'>
                        <Link to='/'>Home</Link>

                        <Link to='/play'>Play</Link>
                    </div>

                    

                </header>
                <h1>Top Players</h1>


                <div className='DivTableContainer'>

                    <div className='DivTable'>

                        <table>

                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Player</th>
                                    <th>Points</th>
                                    <th>Level</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    level1.map((item, pos) => {
                                        return <Levels key={item._id} position={pos+1}
                                                player={item.player}
                                                points={item.points}
                                                level='Easy'/>
                                    })
                                }
                            </tbody>
                        </table>

                    </div>

                    <div className='DivTable'>
                        <table>

                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Player</th>
                                    <th>Points</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    level2.map((item, pos) => {
                                        return <Levels  key={item._id} position={pos+1}
                                                player={item.player}
                                                points={item.points}
                                                level='Medium'/>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='DivTable'>
                        <table>

                        <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Player</th>
                                    <th>Points</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    level3.map((item, pos) => {
                                        return <Levels  key={item._id} position={pos+1}
                                                player={item.player}
                                                points={item.points}
                                                level='Hard'/>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            
        </Loader>
    )
}

export default TopPlayers;