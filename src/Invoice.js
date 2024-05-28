import { productRender } from "./app/product.js";
import { recordObservers } from "./app/record.js";
import { manageProductBtnHandler, newProductFormHandler, printBtnHandler, recordFormHandler, recordGroupHandler } from "./core/handlers.js";
import { closeDrawer, manageProductBtn, newProductForm, printBtn, recordForm, recordGroup } from "./core/selector.js";
import { products } from "./core/variable.js";

class Invoice{

    observers(){
        recordObservers();
    }

    initialRender(){
        productRender(products);
    }

    listener(){
        manageProductBtn.addEventListener("click",manageProductBtnHandler)
        closeDrawer.addEventListener("click",manageProductBtnHandler);
        newProductForm.addEventListener("submit",newProductFormHandler);
        recordForm.addEventListener("submit",recordFormHandler);
        recordGroup.addEventListener("click",recordGroupHandler);
        printBtn.addEventListener("click",printBtnHandler);


    }

    init(){
        console.log("Invoice app start");
        this.initialRender();
        this.listener();
        this.observers();
    }
}

export default Invoice;