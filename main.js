import Swal from 'sweetalert2';
import Invoice from './src/Invoice.js'
import './style.css';

// Swal.fire({
//     title : 'San kyi tar',
//     text : 'Hello hello hello',
//     icon : "info",
// });


const invoice= new Invoice();
invoice.init();