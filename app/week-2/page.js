import { Heading } from "./heading";

export default function Page() {
    let a = 5;
    let b = 10;
    let c = a + b;

    console.log("a:", a); // Debugging statement
    console.log("b:", b); // Debugging statement
    console.log("c:", c); // Debugging statement

    return (
        <main>
            <Heading />
            <p>The sum of a and b is {c}.</p>
        </main>
    );
}