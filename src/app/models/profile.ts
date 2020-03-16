export class Profile {
    name= '';
    surname= '';
    description='';

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }

}