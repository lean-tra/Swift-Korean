; "use strict";

var pages = [
    { "page": "index", "name": "Home", "doc": "About.txt" },
    { "page": "AboutSwift", "name": "About Swift", "doc": "chapter1.txt" },
    { "page": "ASwiftTour", "name": "A Swift Tour", "doc": "chapter2.txt" },
    { "page": "TheBasics", "name": "The Basics", "doc": "chapter3.txt" },
    { "page": "BasicOperators", "name": "Basic Operators", "doc": "chapter4.txt" },
    { "page": "StringAndCharacters", "name": "String and Characters", "doc": "chapter5.txt" },
    { "page": "CollectionTypes", "name": "Collection Types", "doc": "chapter6.txt" },
    { "page": "ControlFlow", "name": "Control Flow", "doc": "chapter7.txt" },
    { "page": "Functions", "name": "Functions", "doc": "chapter8.txt" },
    { "page": "Closures", "name": "Closures", "doc": "chapter9.txt" },
    { "page": "Enumerations", "name": "Enumerations", "doc": "chapter10.txt" },
    { "page": "ClassesAndStructures", "name": "Classes and Structures", "doc": "chapter11.txt" },
    { "page": "Properties", "name": "Properties", "doc": "chapter12.txt" },
    { "page": "Methods", "name": "Methods", "doc": "chapter13.txt" },
    { "page": "Subscripts", "name": "Subscripts", "doc": "chapter14.txt" },
    { "page": "Inheritance", "name": "Inheritance", "doc": "chapter15.txt" },
    { "page": "Initialization", "name": "Initialization", "doc": "chapter16.txt" },
    { "page": "Deinitialization", "name": "Deinitialization", "doc": "chapter17.txt" },
    { "page": "AutomaticReferenceCounting", "name": "Automatic Reference Counting", "doc": "chapter18.txt" },
    { "page": "OptionalChaining", "name": "Optional Chaining", "doc": "chapter19.txt" },
    { "page": "TypeCasting", "name": "Type Casting", "doc": "chapter20.txt" },
    { "page": "NestedTypes", "name": "Nested Types", "doc": "chapter21.txt" },
    { "page": "Extensions", "name": "Extensions", "doc": "chapter22.txt" },
    { "page": "Protocols", "name": "Protocols", "doc": "chapter23.txt" },
    { "page": "Generics", "name": "Generics", "doc": "chapter24.txt" },
    { "page": "AdvancedOperators", "name": "Advanced Operators", "doc": "chapter25.txt" },
    { "page": "AboutTheLanguageReference", "name": "About the Language Reference", "doc": "chapter26.txt" },
    { "page": "LexicalStructure", "name": "Lexical Structure", "doc": "chapter27.txt" },
    { "page": "Types", "name": "Types", "doc": "chapter28.txt" },
    { "page": "Expressions", "name": "Expressions", "doc": "chapter29.txt" },
    { "page": "Statements", "name": "Statements", "doc": "chapter30.txt" },
    { "page": "Declarations", "name": "Declarations", "doc": "chapter31.txt" },
    { "page": "Attributes", "name": "Attributes", "doc": "chapter32.txt" },
    { "page": "Patterns", "name": "Patterns", "doc": "chapter33.txt" },
    { "page": "GenericParametersAndArguments", "name": "Generic Parameters and Arguments", "doc": "chapter34.txt" },
    { "page": "SummaryOfTheGrammar", "name": "Summary of the Grammar", "doc": "chapter35.txt" }
];

var hierarchies = [
    {
        "parent": "Welcome to Swift",
        "children": [
            "AboutSwift",
            "ASwiftTour"
        ]
    },
    {
        "parent": "Language Guide",
        "children": [
            "TheBasics",
            "BasicOperators",
            "StringAndCharacters",
            "CollectionTypes",
            "ControlFlow",
            "Functions",
            "Closures",
            "Enumerations",
            "ClassesAndStructures",
            "Properties",
            "Methods",
            "Subscripts",
            "Inheritance",
            "Initialization",
            "Deinitialization",
            "AutomaticReferenceCounting",
            "OptionalChaining",
            "TypeCasting",
            "NestedTypes",
            "Extensions",
            "Protocols",
            "Generics",
            "AdvancedOperators"
        ]
    },
    {
        "parent": "Welcome to Swift",
        "children": [
            "AboutTheLanguageReference",
            "LexicalStructure",
            "Types",
            "Expressions",
            "Statements",
            "Declarations",
            "Attributes",
            "Patterns",
            "GenericParametersAndArguments",
            "SummaryOfTheGrammar"
        ]
    }
];
