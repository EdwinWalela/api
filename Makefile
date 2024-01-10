migrate:
	 npx sequelize-cli db:migrate --url 'postgres://scanwize:scanwize@localhost/scanwize' --migrations-path ./api/src/migrations

makemigration:
	npx sequelize-cli migration:generate --name <migration-name>                       

seed:
	npx sequelize-cli db:seed:all --url 'postgres://scanwize:scanwize@localhost/scanwize' --seeders-path ./api/src/seeders