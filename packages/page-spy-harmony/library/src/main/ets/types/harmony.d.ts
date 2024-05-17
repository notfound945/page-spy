import { InitConfigBase } from './index';
import { AxiosInstance, AxiosStatic } from '@ohos/axios';

type InternalPlugins =
  | 'ConsolePlugin'
  | 'ErrorPlugin'
  | 'NetworkPlugin'
  | 'StoragePlugin'
  | 'DatabasePlugin'
  | 'PagePlugin'
  | 'SystemPlugin';

export interface InitConfig extends InitConfigBase {
  /**
   * The server base url. For example, "example.com".
   * - Create room: `https://${api}/room/create`
   * - Filter room: `https://${api}/room/list`
   * - Join WebSocket room: `wss://${api}/ws/room/join`
   */
  api: string;
  /**
   * All internal plugins are carried with PageSpy by default out of the box.
   * You can disable some plugins as needed.
   */
  disabledPlugins?: (InternalPlugins | string)[];
  /**
   * Reference of @ohos/axios
   */
  axios?: AxiosStatic | AxiosInstance;
}

export interface StorageRoomInfo {
  name: string;
  address: string;
  roomUrl: string;
  project: string;
  title: string;
  useSecret: boolean;
  secret: string;
}
