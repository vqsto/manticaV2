export class DevisData {
	projet: string;
	cpProjet: number;
	villeProjet: string;
	typeProjet: string;
	etat: string;
	norme: string;
	bbc: string;
	usage: string;
	situationActuelle: string;
	avancement: string;
	civilite: string;
	nom: string;
	prenom: string;
	cp: number;
	ville: string;
	preference: string;
	telPort: number;
	telFixe: number;
	mail: string;
	montant: Promise<number>;
	notaire: Promise<number>;
	budget: Promise<number>;
};