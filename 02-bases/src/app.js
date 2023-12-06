const { getUUID } = require('./plugins/get-id.plugin');
const { getAge } = require('./plugins/get-age.plugin');
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/05-factory');
const getPokemonById = require('./js-foundation/06-promises');
const buildLogger = require('./plugins/logger.plugin');


const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto es algo malo');

// getPokemonById( 4 )
//     .then( ( pokemon ) => console.log(pokemon) )
//     .catch( ( err ) => console.error(err) )
//     .finally( () => console.log('Finalmente'));

// token de acceso
// Publicas


// ! Referencia a la función factory y uso
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '1999-06-05' };

// const john = makePerson( obj );

// console.log({ john });




// ! Referencia
// console.log(emailTemplate);

// const id = 2;

// getUserById( id, ( error, user ) => {
//     if( error ){
//         throw new Error(error);
//     }

//     console.log({user});
// });