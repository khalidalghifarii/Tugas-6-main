import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'
import path from 'path'

const dbConfig = defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: path.join(app.makePath('database/db'), 'db.sqlite3'), 
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig