interface testInterface {
    a: string;
    b?: string;
}
const testMethod = ({ a, b = "vietnam" }: testInterface) => {
    console.log(a, b);
};
testMethod({ a: "tu" });
