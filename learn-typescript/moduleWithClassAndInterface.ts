import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("Vinamilk", "drink milk", 500);
const documentTwo: hasPrint = new Payment("Vietnam Airlines", "fly", 200);

const allDocuments: hasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
allDocuments.forEach((document) => {
    console.log(document.print());
});
