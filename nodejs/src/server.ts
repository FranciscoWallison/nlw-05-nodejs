import { http } from './http';
import './websocket/client';
import './websocket/admin';

http.listen(process.env.PORT);