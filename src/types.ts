export type EnvVarType = 'string' | 'number' | 'enum' | 'boolean';

export interface EnvVarSchemaBase {
  required?: boolean;
  default?: any;
}

export interface BooleanSchema extends EnvVarSchemaBase {
  type: 'boolean';
}

export interface StringSchema extends EnvVarSchemaBase {
  type: 'string';
}

export interface NumberSchema extends EnvVarSchemaBase {
  type: 'number';
}

export interface EnumSchema extends EnvVarSchemaBase {
  type: 'enum';
  values: string[];
}

export type EnvVarSchema = StringSchema | NumberSchema | EnumSchema | BooleanSchema;

export type EnvSchema = Record<string, EnvVarSchema>;
