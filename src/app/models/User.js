import Sequelize, { Model } from 'sequelize';


class User extends Model {
   static init(sequelize) {
      super.init(
         {
            name: Sequelize.STRING,
            link_photo: Sequelize.STRING,
            whatsapp: Sequelize.STRING,
            estado: Sequelize.STRING,
            cidade: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
         },
         {
            sequelize,
         }
      );
   }
}

export default User;