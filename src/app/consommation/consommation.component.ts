import { Component } from '@angular/core';
import { consomationService } from './consomation.sevice';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consommation',
  templateUrl: './consommation.component.html',
  styleUrls: ['./consommation.component.css']
})
export class ConsommationComponent {
 cactegorie:any ; 
 catform!:FormGroup ;
 user:any ;
  role:any ;
  userform!:FormGroup;


constructor(private service : consomationService ){}

ngOnInit(){
this.service.allcategorie().subscribe((res)=>{
this.cactegorie=res ; 
})

this.catform = new FormGroup({
  nom : new FormControl("",Validators.required)
})

this.service.alluser().subscribe((res)=>{
  this.user=res ;
})
this.service.allrole().subscribe((res)=>{
this.role=res ; 
})

this.userform = new FormGroup({
  nom : new FormControl("",Validators.required),
  prenom : new FormControl("",Validators.required),
  email : new FormControl("",Validators.required),
  password : new FormControl("",Validators.required),
  username : new FormControl("",Validators.required),
  profil : new FormControl("",Validators.required)


})

}


ajouter(){
this.service.ajoutercategorie(this.catform.value).subscribe((res)=>{
if(res){
  window.alert("Ajouter avec succées")
}
})
}




ajouteruser(){
  console.log(this.userform.value)
  let u = {
    "nom":this.userform.value.nom,
    "prenom":this.userform.value.prenom,
    "username":this.userform.value.username,
    "email":this.userform.value.email,
    "password":this.userform.value.password
  }
this.service.ajouteruser(u,this.userform.value.profil).subscribe((res)=>{
  if(res){
    window.alert("User enregistrer avec succées")
    window.location.reload()
  }
  else{
    window.alert("email deja existe")
  }
})


}





}
