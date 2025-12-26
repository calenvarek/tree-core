/**
 * @eldrforge/tree-core
 *
 * Dependency graph algorithms for monorepo package analysis.
 */

// Types
export type { PackageInfo, DependencyGraph, SerializedGraph } from './types';

// Package discovery
export {
    scanForPackageJsonFiles,
    parsePackageJson,
    shouldExclude
} from './dependencyGraph';

// Graph building
export {
    buildDependencyGraph,
    buildReverseGraph
} from './dependencyGraph';

// Graph analysis
export {
    topologicalSort,
    findAllDependents,
    validateGraph
} from './dependencyGraph';

// Serialization
export {
    serializeGraph,
    deserializeGraph
} from './dependencyGraph';

// Logger configuration
export { setLogger } from './dependencyGraph';
