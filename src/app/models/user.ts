export class UserModel{
    email= '';
    nombre='';
    descripcion='';
    password='';
    id_tienda='';

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}