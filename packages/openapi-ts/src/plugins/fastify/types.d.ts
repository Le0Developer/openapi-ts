import type { DefinePlugin, Plugin } from '../types';

export type UserConfig = Plugin.Name<'fastify'> & {
  /**
   * Should the exports from the generated files be re-exported in the index
   * barrel file?
   *
   * @default false
   */
  exportFromIndex?: boolean;
  /**
   * Name of the generated file.
   *
   * @default 'fastify'
   */
  output?: string;
};

export type FastifyPlugin = DefinePlugin<UserConfig>;
