
import * as fs from "fs";
import Keys from "./Keys";
import MersenneTwister from "mersenne-twister";


export default class Charactors {

    rng: MersenneTwister;

    keys: Keys;

    // rightIndexFingerKeys: any;
    // leftIndexFingerKeys: any;

    // rightMiddleFingerKeys: any;
    // leftMiddleFingerKeys: any;

    // rightThirdFingerKeys: any;
    // leftThirdFingerKeys: any;

    // rightPinkyFingerKeys: any;
    // leftPinkyFingerKeys: any;



    constructor() {

        this.rng = new MersenneTwister();

        this.keys = new Keys();

    }



    generateAllPractices() {

        this.generatePractice("page-1.md", this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1]);


        this.generatePractice("page-2.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1]);

        this.generatePractice("page-3.md",
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1]);

        this.generatePractice("page-4.md",
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]);


        this.generatePractice("page-5.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]);


        // -----

        this.generatePractice("page-6.md", this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2]);

        this.generatePractice("page-7.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2]);

        this.generatePractice("page-8.md",
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2]);

        this.generatePractice("page-9.md",
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]);


        this.generatePractice("page-10.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]);

        // -----

        this.generatePractice("page-11.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0]);

        this.generatePractice("page-12.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0]);

        this.generatePractice("page-13.md",
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0]);

        this.generatePractice("page-14.md",
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0]);


        this.generatePractice("page-15.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0]);


        // -----


        this.generatePractice("page-16.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
        );


        this.generatePractice("page-17.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2]
        );


        this.generatePractice("page-18.md",
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2]
        );


        this.generatePractice("page-19.md",
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]

        );


        this.generatePractice("page-20.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1],

            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]
        );



        // -----

        this.generatePractice("page-21.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0]
        );

        this.generatePractice("page-22.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],

            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0]

        );

        this.generatePractice("page-23.md",
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],

            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
        );

        this.generatePractice("page-24.md",
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2],

            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

        );


        this.generatePractice("page-25.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2],

            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0]
        );

        // -----

        this.generatePractice("page-26.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1]
        );

        this.generatePractice("page-27.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],

            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1]
        );

        this.generatePractice("page-28.md",
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],

            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1]

        );

        this.generatePractice("page-29.md",
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]

        );


        this.generatePractice("page-30.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]

        );


        // -----

        this.generatePractice("page-31.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1]
        );

        this.generatePractice("page-32.md",
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

        this.generatePractice("page-33.md",
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],

            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],

            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1]

        );

        this.generatePractice("page-34.md",
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2],


            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]

        );


        this.generatePractice("page-35.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2],

            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]

        );



        this.generatePractice("page-36.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2],

            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]

        );



    }


    generatePractice(outfile: string, ...keys: string[]): void {


        try {
            const fd = fs.openSync(outfile, "w");


            // You need to flatten the contents of the `keys` variable.
            // The contents of the `keys` (result of console.log(keys))
            // is something like follows:
            // [ [ 'h', 'j' ], [ 'h', 'j' ] ]
            // ---
            // [ [ 'h', 'j' ], [ 'h', 'j' ], [ 'k' ], [ 'd' ] ]

            console.log("");
            console.log(outfile);
            console.log(keys.flat());
            // const result: number[] = [];
            // for (let i = 0; i < 100; i++) {
            //     const unif = this.randomUniform(keys.flat().length);
            //     result.push(unif);
            // }
            // console.log(result);

            fs.writeSync(fd, "```\n");

            for (let k = 0; k < 2; k++) {
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        const q = [];
                        let p = [];

                        let a = this.randomPermutation(keys.flat()).slice(0, 4);
                        p.push(a.join(""));
                        p.push(a.join(""));
                        q.push(p.join(" "));
                        p = [];

                        a = this.randomPermutation(keys.flat()).slice(0, 4);
                        p.push(a.join(""));
                        p.push(a.join(""));
                        q.push(p.join(" "));
                        p = [];

                        a = this.randomPermutation(keys.flat()).slice(0, 4);
                        p.push(a.join(""));
                        p.push(a.join(""));
                        q.push(p.join(" "));
                        p = [];

                        a = this.randomPermutation(keys.flat()).slice(0, 4);
                        p.push(a.join(""));
                        p.push(a.join(""));
                        q.push(p.join(" "));
                        p = [];

                        fs.writeSync(fd, q.join("  ") + "\n");
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
