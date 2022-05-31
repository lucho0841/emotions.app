import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Animo } from "../models/animo";
import { ConfigService } from "./config.service";

@Injectable({
    providedIn: 'root',
})
export class EmocionService {
    readonly userUrl = environment.baseURL_identityService;
    constructor(
        private config: ConfigService,
    ) { }

    crearAnimo(item: Animo){
        let methodURL = `${this.userUrl}/Emociones/crearPersona`;
        return this.config.PostAnonymous(methodURL, item);
    }

    obtenerAnimos(){
        let methodURL = `${this.userUrl}/Emociones/getAllPersonas`;
        return this.config.GetAnonymous(methodURL);
    }

    eliminarAnimo(id: number){
        let methodURL = `${this.userUrl}/Emociones/deletePersona?AnimoId=${id}`;
        return this.config.Delete(methodURL);
    }
}