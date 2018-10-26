declare module "gonzales-pe" {
  export function parse(css: string, options: IParseOptions): IParseTree;

  export function first(type: nodeType): IParseTree | null;

  export type nodeType =
    | "arguments"
    | "atkeyword"
    | "atrule"
    | "attributeFlags"
    | "attributeMatch"
    | "attributeName"
    | "attributeSelector"
    | "attributeValue"
    | "block"
    | "brackets"
    | "class"
    | "color"
    | "combinator"
    | "condition"
    | "conditionalStatement"
    | "declaration"
    | "declarationDelimiter"
    | "default"
    | "delimiter"
    | "dimension"
    | "escapedString"
    | "extend"
    | "expression"
    | "function"
    | "global"
    | "id"
    | "ident"
    | "important"
    | "include"
    | "interpolatedVariable"
    | "interpolation"
    | "keyframesSelector"
    | "loop"
    | "mixin"
    | "multilineComment"
    | "namePrefix"
    | "namespacePrefix"
    | "namespaceSeparator"
    | "number"
    | "operator"
    | "parentheses"
    | "parentSelector"
    | "parentSelectorExtension"
    | "percentage"
    | "placeholder"
    | "progid"
    | "property"
    | "propertyDelimiter"
    | "pseudoClass"
    | "pseudoElement"
    | "raw"
    | "ruleset"
    | "space"
    | "selector"
    | "singlelineComment"
    | "string"
    | "stylesheet"
    | "typeSelector"
    | "unicodeRange"
    | "universalSelector"
    | "urange"
    | "uri"
    | "value"
    | "variable"
    | "variablesList";

  export type syntax = "css" | "less" | "sass" | "scss";

  export type childNodeCallback = (
    childNode: IParseTree,
    index?: number,
    parseTree?: IParseTree
  ) => void;

  export interface IParseOptions {
    syntax?: syntax;
    context?: nodeType;
    tabSize?: number;
  }

  export interface IPosition {
    line: number;
    column: number;
  }

  export interface IParseTree {
    content: string | IParseTree[];
    end: IPosition;
    length: number;
    start: IPosition;
    syntax: syntax;
    type: nodeType;

    contains(type: nodeType): boolean;

    eachFor(type: nodeType, callback: childNodeCallback): void;

    first(type?: nodeType): IParseTree;

    forEach(type: nodeType, callback: childNodeCallback): void;

    get(index: number): IParseTree;

    insert(index: number, node: IParseTree): void;

    is(type: nodeType): boolean;

    last(type: nodeType): IParseTree | null | undefined;

    removeChild(index: number): IParseTree;

    toJson(): string;

    toString(): string;

    traverse(callback: childNodeCallback): void;

    traverseByType(type: nodeType, callback?: childNodeCallback): void;

    traverseByTypes(types: nodeType[], callback?: childNodeCallback): void;
  }
}
