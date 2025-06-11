const UserPermissions = require("../models/UserPermissions");
const User = require("../models/User");

module.exports = class AuthPermissionsController {
  static async setPermissions(req, res) {
    const { userType, accessLevel, role } = req.body;
    const userId = req.params.id;

    try {
      // Verificar se o usuário existe
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Criar ou atualizar as permissões do usuário
      const userPermissions = await UserPermissions.findOneAndUpdate(
        { userId },
        { userType, accessLevel, role },
        { upsert: true }
      );

      return res.status(200).json({
        message: "Permissões atualizadas com sucesso",
        userPermissions,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao atualizar permissões" });
    }
  }
};
