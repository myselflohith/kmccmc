#!/usr/bin/env node
/**
 * Reset SQLite database to fix migration errors when adding new collections.
 * Run: pnpm run db:reset
 * Then start the app: pnpm dev
 * WARNING: This deletes all data in the database (users, media, gallery, etc.).
 */
import { readFileSync, unlinkSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// Load .env
try {
  const envPath = resolve(root, '.env')
  if (existsSync(envPath)) {
    const env = readFileSync(envPath, 'utf8')
    for (const line of env.split('\n')) {
      const m = line.match(/^\s*DATABASE_URL\s*=\s*(.+)\s*$/)
      if (m) {
        const url = m[1].trim().replace(/^["']|["']$/g, '')
        if (url.startsWith('file:')) {
          const filePath = url.slice(5).trim()
          const dbPath = filePath.startsWith('/') ? filePath : resolve(root, filePath)
          if (existsSync(dbPath)) {
            unlinkSync(dbPath)
            console.log('Deleted database:', dbPath)
          } else {
            console.log('No database file at:', dbPath)
          }
          console.log('Run "pnpm dev" to create a fresh database.')
          process.exit(0)
        }
      }
    }
  }
} catch (e) {
  console.error(e.message)
}
console.log('Could not find DATABASE_URL=file:... in .env')
process.exit(1)
