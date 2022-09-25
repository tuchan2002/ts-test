interface Person {
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number;
}

const tom: Person = {
    name: "Tom",
    age: 2,
    speak(language: string): void {
        console.log(language);
    },
    spend(amt: number): number {
        return amt;
    },
};
console.log(tom);
