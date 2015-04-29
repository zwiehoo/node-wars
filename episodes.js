module.exports = {
    // Epizod I
    //
    // Zwróć stringa "Come to the Dark Side"
    //
    // Jak testować: http://localhost:8080/phase/1
    phase1: function phase1() {
    	return "Come to the Dark Side";
    },
    // Epizod II
    // Zwróc podany string małymi literami
    //
    // Jak testować: http://localhost:8080/phase/2/JakisTekst
    phase2: function phase2(string) {
    	return string.toLowerCase();
    },
    // Epizod III
    //
    // Zwróć długość podanego stringa w znakach
    //
    // Jak testować: http://localhost:8080/phase/2/JakisTekst
    phase3: function phase3(string) {
    	return string.length;
    },
    // Epizod IV
    //
    // Jeżeli number zawiera się w podanych przedziałach zwróć oczekiwaną wartość:
    //
    // od 0 do 10  - "These aren't the droids you're looking for"
    // od 11 do 20 - "Use the Force, Luke."
    // od 21 do 30 - "The Force will be with you... always."
    // dla pozostałych wartośći - "Remember, the Force will be with you always."
    //
    // Jak testować: http://localhost:8080/phase/4/5
    // 5 to dowolny number
    phase4: function phase4(number) {
        if (number >= 0 && number <= 10) return "These aren't the droids you're looking for";
        if (number >= 11 && number <= 20) return "Use the Force, Luke.";
        if (number >= 21 && number <= 30) return "The Force will be with you... always.";

        return "Remember, the Force will be with you always.";
    },
    // Epizod V
    //
    // X i y to długości boków prostokąta. Zwróc długość przekątnej.
    //
    // Jak testować: http://localhost:8080/phase/5/2.50/3.20
    // 2.50 i 3.50 to odpowiednio długości boków x i y
    phase5: function phase5(x, y) {
    	return Math.sqrt(x*x + y*y);
    },

    // Epizod VI
    //
    // Zwróć tablicę liczb od a do b
    //
    // Jak testować: http://localhost:8080/phase/6/4/10
    // 4 i 10 to odpowiednio a i b
    phase6: function phase6(a, b) {
        var array = [];

    	for (i = a; i <= b; i++) {
            array.push(i);
        }

        return array;
    },

    finalPhase: function finalPhase() {
    	return "Dark Side";
    }
}
