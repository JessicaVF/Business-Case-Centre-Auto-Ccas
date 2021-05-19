
export interface Annonce{
reference: string,
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
