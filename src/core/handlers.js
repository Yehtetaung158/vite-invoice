import Swal from 'sweetalert2';
import { productUi } from "../app/product";
import { calculateRecordTotal, recordUi, recordUpdate } from "../app/record";
import { app, newProductForm, productDrawer, productSelect, quantityInput, recordForm, recordGroup } from "./selector";
import { products } from "./variable";
import { toast } from './function.js';

export const manageProductBtnHandler = () => {
    productDrawer.classList.toggle("translate-x-full");
    productDrawer.classList.add("duration-200");
};

export const newProductFormHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(newProductForm);

    console.log(formData.get("new_product_name"));
    console.log(formData.get("new_product_price"));

    const newProduct = {
        id: Date.now(),
        name: formData.get("new_product_name"),
        price: formData.get("new_product_price"),
    };

    productGroup.append(productUi(newProduct));
    productSelect.append(new Option(newProduct.name, newProduct.id));
    products.push(newProduct);

    newProductForm.reset();
};

export const recordFormHandler = (event) => {
    event.preventDefault();
    // id => product => price,name
    const currentProduct = products.find(
        (product) => product.id == productSelect.value
    );
    // console.log(productSelect.value);
    // console.log(currentProduct);
    // console.log(quantityInput.valueAsNumber);

    const isExist = app.querySelector(`[product-id='${currentProduct.id}']`);

    if (isExist) {
       recordUpdate(currentProduct.id,quantityInput.valueAsNumber)
    } else {
        recordGroup.append(
            recordUi(
                currentProduct.id,
                currentProduct.name,
                currentProduct.price,
                quantityInput.valueAsNumber,
            )
        );

    }
        recordForm.reset();
};

export const recordGroupHandler = (event) => {
    // console.log(event.target);
    if (event.target.classList.contains("record-del")) {
        Swal.fire({
            title: "Are you sure delete?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "comfirm"
          }).then((result) => {
            if (result.isConfirmed) {
                event.target.closest("tr").remove();
                toast("Delete is successfull");
            }
          });
        
        
    } else if (event.target.classList.contains("q-add")) {
        recordUpdate(event.target.closest("tr").getAttribute("product-id"), 1)
    } else if (event.target.classList.contains("q-sub")) {
        recordUpdate(event.target.closest("tr").getAttribute("product-id"), -1)
    }
};

export const printBtnHandler = () => {
    print();
};