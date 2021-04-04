
import Charactors from "./Charactors";
import Keys from "./Keys";
import Words from "./Words";

export default class Practice {

    charactors: Charactors;
    keys: Keys;
    words: Words;

    infile: string;

    constructor() {
        this.charactors = new Charactors();
        this.keys = new Keys();
        this.words = new Words();

        this.infile = "Bible.txt";
    }



    generateAllPractices() {

        this.charactors.generatePractice("page-01.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1]);

        this.charactors.generatePractice("page-02.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1]);

        this.charactors.generatePractice("page-03.md",
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1]);

        this.charactors.generatePractice("page-04.md",
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]);


        this.charactors.generatePractice("page-05.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]);



        this.words.generatePractice(this.infile, "page-06.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]);


        // -----

        this.charactors.generatePractice("page-07.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2]);

        this.charactors.generatePractice("page-08.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2]);

        this.charactors.generatePractice("page-09.md",
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2]);

        this.charactors.generatePractice("page-10.md",
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]);


        this.charactors.generatePractice("page-11.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]);


        this.words.generatePractice(this.infile, "page-12.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]);



        // -----

        this.charactors.generatePractice("page-13.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0]);

        this.charactors.generatePractice("page-14.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0]);

        this.charactors.generatePractice("page-15.md",
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0]);

        this.charactors.generatePractice("page-16.md",
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0]);


        this.charactors.generatePractice("page-17.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0]);


        this.words.generatePractice(this.infile, "page-18.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0]);



        // -----


        this.charactors.generatePractice("page-19.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
        );


        this.charactors.generatePractice("page-20.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2]
        );


        this.charactors.generatePractice("page-21.md",
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2]
        );


        this.charactors.generatePractice("page-22.md",
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]

        );


        this.charactors.generatePractice("page-23.md",
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1],

            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2]
        );



        this.words.generatePractice(this.infile, "page-24.md",
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

        this.charactors.generatePractice("page-25.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0]
        );

        this.charactors.generatePractice("page-26.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],

            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0]

        );

        this.charactors.generatePractice("page-27.md",
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],

            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
        );

        this.charactors.generatePractice("page-28.md",
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2],

            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

        );


        this.charactors.generatePractice("page-29.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2],

            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0]
        );



        this.words.generatePractice(this.infile, "page-30.md",
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

        this.charactors.generatePractice("page-31.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1]
        );

        this.charactors.generatePractice("page-32.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],

            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1]
        );

        this.charactors.generatePractice("page-33.md",
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],

            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1]

        );

        this.charactors.generatePractice("page-34.md",
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]

        );


        this.charactors.generatePractice("page-35.md",
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1],
            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]

        );


        this.words.generatePractice(this.infile, "page-36.md",
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

        this.charactors.generatePractice("page-37.md",
            this.keys.rightIndexFingerKeys[2], this.keys.leftIndexFingerKeys[2],
            this.keys.rightIndexFingerKeys[0], this.keys.leftIndexFingerKeys[0],
            this.keys.rightIndexFingerKeys[1], this.keys.leftIndexFingerKeys[1]
        );

        this.charactors.generatePractice("page-38.md",
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

        this.charactors.generatePractice("page-39.md",
            this.keys.rightMiddleFingerKeys[2], this.keys.leftMiddleFingerKeys[2],
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],

            this.keys.rightMiddleFingerKeys[0], this.keys.leftMiddleFingerKeys[0],
            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],

            this.keys.rightMiddleFingerKeys[1], this.keys.leftMiddleFingerKeys[1],
            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1]

        );

        this.charactors.generatePractice("page-40.md",
            this.keys.rightThirdFingerKeys[2], this.keys.leftThirdFingerKeys[2],
            this.keys.rightPinkyFingerKeys[2], this.keys.leftPinkyFingerKeys[2],


            this.keys.rightThirdFingerKeys[0], this.keys.leftThirdFingerKeys[0],
            this.keys.rightPinkyFingerKeys[0], this.keys.leftPinkyFingerKeys[0],

            this.keys.rightThirdFingerKeys[1], this.keys.leftThirdFingerKeys[1],
            this.keys.rightPinkyFingerKeys[1], this.keys.leftPinkyFingerKeys[1]

        );


        this.charactors.generatePractice("page-41.md",
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



        this.words.generatePractice(this.infile, "page-42.md",
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



}
