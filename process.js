const dbArray = [
    {
        player: 'pl1',
        points: 1000,
        position: 1
    },
    {
        player: 'pl2',
        points: 700,
        position: 2
    },
    {
        player: 'pl3',
        points: 700,
        position: 3
    },
    {
        player: 'pl4',
        points: 700,
        position: 4
    },
    {
        player: 'pl5',
        points: 500,
        position: 5
    },
    {
        player: 'pl6',
        points: 500,
        position: 6
    },
    {
        player: 'pl7',
        points: 500,
        position: 7
    },
]

/* 
if points greater 
    -> push obj;
    -> fill with next position;

if points equal 
    -> compare Array positions
    -> fill those positions to newArray
    -> push obj to newArray;
    -> while checking pos < 7 -> break;

if points lesser and pos < 7
    -> compare Array positions
    -> fill those position to newArray
    -> push obj to newArray
 */

const player = {
    player: 'new',
    points: 700
}

let position = 1;
let resArray = [];

function processPos(array, newArray, obj, pos) {

    let flag = false;

    for(let i = 0; i < array.length; i++){

        console.log(pos, 'pos')

        if(pos >= 7){
            break;
        }
        else if(array[i].points < obj.points){

            console.log('obj greater');

            console.log('greater pos', pos);

            if(flag === false){

                obj.position = pos;

                newArray.push(obj); 

                flag = true;

                pos += 1;

                for(let j = i; j < array.length; j++){
    
                    if(pos >= 7){
                        break;
                    }
    
                    console.log('pos for greater', pos);

                    array[j].position = pos;
    
                    newArray.push(array[j]);

                    pos += 1;
                }

                break;
            }
        }
        else if(array[i].points > obj.points){

            console.log('obj minor');
        }
        else if(array[i].points === obj.points){
            console.log('obj equal');

            newArray.push(array[i]);

            pos += 1;

            //aca hay que chequear q el proximo no sea equal

            for(let j = i+1; j < array.length; j++){

                if(pos >= 7){
                    break;
                }
                else if(array[j].points === obj.points){

                    array[j].position = pos;

                    newArray.push(array[j]);
                }
                else {
                    obj.position = pos;

                    newArray.push(obj);

                    pos += 1;

                    break;
                }
                pos += 1;
            }

            console.log('pos equal', pos);

            // if(flag === false){

            //     obj.position = pos;

            //     newArray.push(obj); 

            //     flag = true;

            //     pos += 1;

            //     for(let j = i + 1; j < array.length; j++){
    
            //         if(pos >= 7){
            //             break;
            //         }
    
            //         console.log('pos for equal', pos);

            //         array[j].position = pos;
    
            //         newArray.push(array[j]);

            //         pos += 1;
            //     }
            //     break;
            // }
        }

        pos += 1;
    }

    // newArray.push('return arr')

    return newArray;
}


const p = processPos(dbArray, resArray, player, position);

console.log(p);