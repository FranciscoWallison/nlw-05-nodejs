import { createConnection } from 'typeorm';

const db = process.env.NODE_ENV === 'test'
? process.env.CONNECTION_DRIVE + "_test"
: process.env.CONNECTION_DRIVE;

const connection = createConnection(db as string);
export { connection };