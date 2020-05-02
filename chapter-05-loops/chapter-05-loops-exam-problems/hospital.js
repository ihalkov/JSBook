function hospital(args) {
    let period = parseInt(args[0]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= period; i++) {
        let currentPatients = parseInt(args[i]);

        if (i % 3 === 0 && (untreatedPatients > treatedPatients)) {
            doctors++;    
        }

        if (doctors >= currentPatients) {
            treatedPatients += currentPatients;
        } else {
            treatedPatients += doctors;
            untreatedPatients += (currentPatients - doctors);
        }
    }
    let treatedOutput = `Treated patients: ${treatedPatients}.`;
    let untreatedOutput = `Untreated patients: ${untreatedPatients}.`;

    console.log(treatedOutput);
    console.log(untreatedOutput);
}

hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);