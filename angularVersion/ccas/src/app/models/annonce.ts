
export interface Annonce{
reference: number,
titre: string,
aneeMiseCirculation: number,
marque: string,
modele: string,
carburant: string,
kilometrage: number,
descriptionComplete: string,
descriptionCourt: string,
prix: number,
datePublication: Date,
photos: [string, string, string, string, string] | [string, string, string, string]
}
