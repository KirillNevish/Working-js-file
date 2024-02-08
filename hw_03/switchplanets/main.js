let planet = prompt('Search planet:');

switch (planet){
    case 'mercury':
    case 'Mercury':
        console.log(`${planet} in solar system`);
        break;
    case 'venus':    
    case 'Venus':
        console.log(`${planet} in solar system`);
        break;
    case 'earth':
    case 'Earth':
        console.log(`${planet} in solar system`);
        break;
    case 'mars':
    case 'Mars':
        console.log(`${planet} in solar system`);
        break;
    case 'jupiter':
    case 'Jupiter':
        console.log(`${planet} in solar system`);
        break;
    case 'saturn':
    case 'Saturn':
        console.log(`${planet} in solar system`);
        break;
    case 'uranus':
    case 'Uranus':
        console.log(`${planet} in solar system`);
        break;
    case 'neptune':
    case 'Neptune':
        console.log(`${planet} in solar system`);
        break;
    default:
        console.log(`${planet} not in solar system`); 
        break;
}