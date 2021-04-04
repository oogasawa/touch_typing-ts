
import Charactors from "./lib/Charactors";
import Practice from "./lib/Practice";
import Words from "./lib/Words";

import yargs from "yargs";


main();

async function main() {

    const argv = yargs
        .command("chars", "Generates random charactors for practice")
        .command("words", "Generates word lists for practice")
        .command("sentences", "Generate sentences for practice")
        .demandCommand()
        .help()
        .argv;


    // console.log(argv);

    if (argv._[0] === "chars") {
        const chars = new Charactors();
        chars.generateAllPractices();
    }
    else if (argv._[0] === "words") {
        const words = new Words();
        console.log(words.generateAllPractices("/home/oogasawa/Downloads/Bible.txt"));
    }
    else if (argv._[0] === "sentences") {
        // generate_sentences();
    }
    else {
        const practice = new Practice();
        practice.generateAllPractices();
    }

}


// ---


