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
    points: 900
}

let position = 1;
let resArray = [];

function processPos(array, newArray, obj, pos) {

    let flag = false;

    for(let i = 0; i < array.length; i++){

        console.log('pos MAIN', pos);

        if(obj.points > array[i].points){

            obj.position = pos;

            newArray.push(obj);

            pos += 1;

            for(let j = i; j < array.length; j ++){

                // console.log('array J, pos', pos);

                if(pos >= 10){

                    // console.log('break');
                    return newArray;
                }
                else {

                    array[j].position = pos;

                    newArray.push(array[j]);
                }
                pos += 1;
            }

            return newArray;
        }
        else if(obj.points < array[i].points){

            console.log('pos else if <', pos);

            for(let j = i; j < array.length; j++){

                if(pos > 10){

                    return newArray;
                }
                
                if(array[j].points >= obj.points && flag === false){

                    newArray.push(array[j]);
                }
                else if(array[j].points < obj.points && flag === false){

                    console.log('flag')
                    obj.position = pos;

                    newArray.push(obj);

                    flag = true;
                }
                else if(flag === true){

                    newArray.push(array[j]);
                }

                pos +=1;
            }

        }

    }

    return newArray;
}


const p = processPos(dbArray, resArray, player, position);

console.log(p);