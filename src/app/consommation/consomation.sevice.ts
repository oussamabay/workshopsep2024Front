import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environement/environement";

@Injectable({
    providedIn:"root",
})

export class consomationService{
    constructor(private http : HttpClient){}

allcategorie(){
    return this.http.get(CONFIG.URL+"cat/afficher")
}
ajoutercategorie(cat :any ){
return this.http.post(CONFIG.URL+"cat/ajouter",cat)
}



alluser(){
    return this.http.get(CONFIG.URL+"user/afficher")

}

allrole(){
    return this.http.get(CONFIG.URL+"role/afficher")

}


ajouteruser(u:any , profil:any){
    return this.http.post(CONFIG.URL+"user/ajouteravecrole?profil="+profil,u)


}
}