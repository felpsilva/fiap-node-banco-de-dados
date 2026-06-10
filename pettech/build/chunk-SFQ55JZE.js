// src/lib/typeorm/migrations/1780532109501-ProductAutoGenerateUUID.ts
var ProductAutoGenerateUUID1780532109501 = class {
  async up(queryRunner) {
    await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        `);
    await queryRunner.query(`
            ALTER TABLE "product"
            ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
        `);
  }
  async down(queryRunner) {
    await queryRunner.query(`
            ALTER TABLE "product"
            ALTER COLUMN "id" DROP DEFAULT;
        `);
  }
};

export {
  ProductAutoGenerateUUID1780532109501
};
