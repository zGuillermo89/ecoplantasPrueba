// rootReducer.js
import { combineReducers } from 'redux';
import catalogoReducer from './catalogoSlice';
import prosupuestoReducer from './prosupuestoSlice';
// Importa otros reductores si tienes más

const rootReducer = combineReducers({
  catalogo: catalogoReducer,
  presupuesto: prosupuestoReducer
  // Añade otros reductores aquí
});

export default rootReducer;