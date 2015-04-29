module.exports = {
    // Faza ataku
    //
    // Podaj akcję dla każdego ze swoich X-Wingów
    //
    // Dostępne akcje:
    // - "wait"
    // - "attack"
    // - "help {team} {point}"
    phase1: function phase1(fighterNumber, myPoints, otherPoints) {
        var pointsAlfa = otherPoints['alfa'];
        var pointsBeta = otherPoints['beta'];
        var pointsGamma = otherPoints['gamma'];

        switch (fighterNumber) {
            case 1: // Zawsze czekaj
                return "wait";
            case 2: // Zawsze atakuj
                return "attack";
            case 3: // Stragegia pomagamy alfie o ile możemy
                if (pointsAlfa == 0 && myPoints > 10) return "help alfa 5";
                return "wait";
            case 4: // Zawsze pomagaj, nawet jak nie masz czym ;)
                return "help beta 5";
            case 5: // Go to hell!
                return "attack";
            case 6: // Atakuj jeżeli cię stać
                if (myPoints > 10) return "attack";
                return "wait";
            case 7:
                return "attack";
            case 8:
                return "attack";
            case 9:
                return "attack";
            case 10:
        }

        return "bullshit";
    },
    phase2: function phase1(fighterNumber, yourPoints, otherPoints) {
        // TODO
    },
    phase3: function phase1(fighterNumber, yourPoints, otherPoints) {
        // TODO
    },
    phase4: function phase1(fighterNumber, yourPoints, otherPoints) {
        // TODO
    },
    phase5: function phase1(fighterNumber, yourPoints, otherPoints) {
        // TODO
    },
    phase6: function phase1(fighterNumber, yourPoints, otherPoints) {
        // TODO
    }
}
