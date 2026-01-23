// Zugangscode versteckt, verschlüsselt, gesplittet, obfuskiert
function getSecretCode() {
    const p1 = "U1Yt";
    const p2 = "QUxQSEEt";
    const p3 = "MjAyNQ==";
    return atob(p1 + p2 + p3);
}

// Code prüfen
function checkAccess(input) {
    return input === getSecretCode();
}
