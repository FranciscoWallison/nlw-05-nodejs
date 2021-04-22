import {Connection as Connection_ } from './sqlite_mysql_postgre/Connection';
import {Connection as Connection_mongo} from './mongodb/Connection';

const Connection = process.env.CONNECTION_DRIVE === 'mongodb' ? Connection_mongo : Connection_;

import {Message as Message_ } from './sqlite_mysql_postgre/Message';
import {Message as Message_mongo} from './mongodb/Message';

const Message = process.env.CONNECTION_DRIVE === 'mongodb' ? Message_mongo : Message_;

import {Setting as Setting_ } from './sqlite_mysql_postgre/Setting';
import {Setting as Setting_mongo} from './mongodb/Setting';

const Setting = process.env.CONNECTION_DRIVE === 'mongodb' ? Setting_mongo : Setting_;

import {User as User_ } from './sqlite_mysql_postgre/User';
import {User as User_mongo} from './mongodb/User';

const User = process.env.CONNECTION_DRIVE === 'mongodb' ? User_mongo : User_;

export { Connection, Message, Setting, User };