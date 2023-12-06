function calculerSommeAchat(prixAchats: number[]): number {
  return prixAchats.reduce((acc, curr) => acc + curr, 0);
}

function rendreMonnaie(sommeAchats: number, sommePayee: number): void {
  let monnaie = sommePayee - sommeAchats;

  if (monnaie < 0) {
    console.error('Erreur : Somme payée insuffisante.');
    return;
  }

  const coupures = [10, 5, 1];

  console.info(`Monnaie à rendre : ${monnaie.toFixed(2)} Euros`);

  coupures.forEach((coupure) => {
    const nombreCoupures = Math.floor(monnaie / coupure);
    monnaie -= nombreCoupures * coupure;

    const devise = coupure === 1 ? 'Euro' : 'Euros';

    for (let i = 0; i < nombreCoupures; i++) {
      console.info(`${coupure} ${devise}`);
    }
  });
}

const prixAchats = [5, 10, 15];
const sommeAchats = calculerSommeAchat(prixAchats);

console.info('Somme à payer : ' + sommeAchats.toFixed(2) + ' Euros');

const sommePayee = 58;
console.info('Somme payée : ' + sommePayee.toFixed(2) + ' Euros');

rendreMonnaie(sommeAchats, sommePayee);
