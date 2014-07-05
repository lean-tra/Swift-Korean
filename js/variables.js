; "use strict";

var gitcdn = "https://cdn.rawgit.com/lean-tra/Swift-Korean/master";

var pages = [
    { "page": "index", "isParent": true, "name": "Home", "doc": "About.txt" },
    { "page": "contributor", "isParent": true, "name": "Contributor", "doc": "contributor.txt" },
    {
        "page": "welcome-to-swift",
        "isParent": true,
        "name": "Welcome to Swift",
        "children": [
            { "page": "about-swift", "name": "About Swift", "doc": "chapter1.txt" },
            { "page": "a-swift-tour", "name": "A Swift Tour", "doc": "chapter2.txt" }
        ]
    },
    {
        "page": "language-guide",
        "isParent": true,
        "name": "Language Guide",
        "children": [
            { "page": "the-basics", "name": "The Basics", "doc": "chapter3.txt" },
            { "page": "basic-operators", "name": "Basic Operators", "doc": "chapter4.txt" },
            { "page": "string-and-characters", "name": "String and Characters", "doc": "chapter5.txt" },
            { "page": "collection-types", "name": "Collection Types", "doc": "chapter6.txt" },
            { "page": "control-flow", "name": "Control Flow", "doc": "chapter7.txt" },
            { "page": "functions", "name": "Functions", "doc": "chapter8.txt" },
            { "page": "closures", "name": "Closures", "doc": "chapter9.txt" },
            { "page": "enumerations", "name": "Enumerations", "doc": "chapter10.txt" },
            { "page": "classes-and-structures", "name": "Classes and Structures", "doc": "chapter11.txt" },
            { "page": "properties", "name": "Properties", "doc": "chapter12.txt" },
            { "page": "methods", "name": "Methods", "doc": "chapter13.txt" },
            { "page": "subscripts", "name": "Subscripts", "doc": "chapter14.txt" },
            { "page": "inheritance", "name": "Inheritance", "doc": "chapter15.txt" },
            { "page": "initialization", "name": "Initialization", "doc": "chapter16.txt" },
            { "page": "deinitialization", "name": "Deinitialization", "doc": "chapter17.txt" },
            { "page": "automatic-reference-counting", "name": "Automatic Reference Counting", "doc": "chapter18.txt" },
            { "page": "optional-chaining", "name": "Optional Chaining", "doc": "chapter19.txt" },
            { "page": "type-casting", "name": "Type Casting", "doc": "chapter20.txt" },
            { "page": "nested-types", "name": "Nested Types", "doc": "chapter21.txt" },
            { "page": "extensions", "name": "Extensions", "doc": "chapter22.txt" },
            { "page": "protocols", "name": "Protocols", "doc": "chapter23.txt" },
            { "page": "generics", "name": "Generics", "doc": "chapter24.txt" },
            { "page": "advanced-operators", "name": "Advanced Operators", "doc": "chapter25.txt" }
        ]
    },
    {
        "page": "language-reference",
        "isParent": true,
        "name": "Language Reference",
        "children": [
            { "page": "about-the-language-reference", "name": "About the Language Reference", "doc": "chapter26.txt" },
            { "page": "lexical-structure", "name": "Lexical Structure", "doc": "chapter27.txt" },
            { "page": "types", "name": "Types", "doc": "chapter28.txt" },
            { "page": "expressions", "name": "Expressions", "doc": "chapter29.txt" },
            { "page": "statements", "name": "Statements", "doc": "chapter30.txt" },
            { "page": "declarations", "name": "Declarations", "doc": "chapter31.txt" },
            { "page": "attributes", "name": "Attributes", "doc": "chapter32.txt" },
            { "page": "patterns", "name": "Patterns", "doc": "chapter33.txt" },
            { "page": "generic-parameters-and-arguments", "name": "Generic Parameters and Arguments", "doc": "chapter34.txt" },
            { "page": "summary-of-the-grammar", "name": "Summary of the Grammar", "doc": "chapter35.txt" }
        ]
    }
];
