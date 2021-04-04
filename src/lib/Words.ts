
import * as fs from "fs";
import Keys from "./Keys";
import MersenneTwister from "mersenne-twister";

export default class Words {

    rng: MersenneTwister;

    keys: Keys;

    constructor() {
        this.keys = new Keys();
        this.rng = new MersenneTwister();
    }


    generateAllPractices(infile: string) {

        this.generatePractice(infile, "page-37.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1]
        );

        this.generatePractice(infile, "page-38.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],

            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],

            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1]
        );


    }




    generatePractice(infile: string, outfile: string, ...keys: string[][]): void {

        const keyArray = keys.flat().concat(['a', 'i', 'u', 'e', 'o']);
        const chosenWords = new Set<string>();

        for (const w of this.readFile(infile)) {
            if (this.match(w, keyArray)) {
                chosenWords.add(w);
            }
        }

        console.log(keyArray);
        let printedWords: string[] = [];
        for (const w of chosenWords) {
            printedWords.push(w);
        }

        printedWords = this.randomPermutation(printedWords);



        try {
            const fd = fs.openSync(outfile, "w");
            fs.writeSync(fd, "```\n");

            let lineOfWords: string[] = [];
            for (let l = 0; l < 2; l++) {
                for (let k = 0; k < 8; k++) {
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 4; j++) {
                            lineOfWords.push(printedWords.pop());
                        }
                        fs.writeSync(fd, lineOfWords.join(" ") + "\n");
                        lineOfWords = [];
                    }
                    fs.writeSync(fd, "\n");
                }
                fs.writeSync(fd, "\n");
            }

            fs.writeSync(fd, "```\n");
            fs.closeSync(fd);
        }
        catch (e) {
            console.log(e.message);
        }



    }




    /** Check if the set of charactors in the given word 
     * is a subset of the set of charactors in the keys variable.
     *
     * @param word  A word. (/[A-Za-z]+/)
     * @param keys  A set of charactors compared.
     */
    match(word: string, keys: string[]): boolean {
        const chars = word.split("");
        return chars.every((c) => { return keys.indexOf(c) >= 0 });
    }


    /** Returns a list of words in the given infile.
     *
     * @param infile  A file name from which the words are obtained.
     */
    readFile(infile: string): string[] {

        const words: string[] = fs.readFileSync(infile, 'utf-8')
            .split("\n")
            .map((line: string) => {
                return line.split(" ");
            })
            .flat();


        // Unique the words.
        const pWord = /^[A-Za-z]{4,}$/;
        const data = new Set<string>();
        for (const w of words) {

            const m = pWord.exec(w);
            if (m !== null) { // matched!
                data.add(w);
            }
        }

        // Create a string array of the obtained words.
        const result: string[] = [];
        data.forEach((w: string) => {
            result.push(w);
        });

        return result;
    }


    randomPermutation(data: string[]): string[] {
        let i: number;
        const n: number = data.length;
        for (i = 0; i <= n - 2; i++) {
            let j = i + this.randomUniform(n - i);

            // swap data[i] and data[j]
            let t = data[i];
            data[i] = data[j];
            data[j] = t;
        }

        return data;
    }


    /** Returns a random integer [0, m-1] with uniform distribution.
     *
     * @param m An positive integer.
     */
    randomUniform(m: number): number {
        return Math.floor(this.rng.random() * m);
    }



}
