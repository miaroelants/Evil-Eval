function foo() {
    console.log("voor de error")
    throw new Error("fout")
    console.log("na de error")
}

function bar() {
    console.log("voor de call naar foo")
    foo()
    console.log("na de call naar foo")
}

try {
    bar()
} catch (e) {
    console.log("er ging iets fout")
}
