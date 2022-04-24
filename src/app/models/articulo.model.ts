export class articulo{
    constructor(
        public codigo: number = -1,
        public nombre: string = "",
        public precio: number = 0,
        public impuesto: number = 0,
        public total: number = 0
    ){}
}