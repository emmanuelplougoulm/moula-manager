interface JSXOptions {
    pragma?: string;
    pragmaFrag?: string;
    throwIfNamespace?: false;
    runtime?: 'classic' | 'automatic';
    importSource?: string;
}
type MdxCompileOptions = any;
interface CompileOptions {
    skipCsf?: boolean;
    mdxCompileOptions?: MdxCompileOptions;
    jsxOptions?: JSXOptions;
}

interface MdxOptions {
    filepath?: string;
    skipExport?: boolean;
    wrapExport?: string;
    remarkPlugins?: any[];
    rehypePlugins?: any[];
    skipCsf?: boolean;
    jsxOptions?: JSXOptions;
}

declare const compile: (code: string, options?: MdxOptions) => Promise<string>;
declare const compileSync: (code: string, options?: MdxOptions) => string;

export { CompileOptions, JSXOptions, MdxCompileOptions, compile, compileSync };
