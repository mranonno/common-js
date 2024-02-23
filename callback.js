function greeting(person,name) {
    person(name);
}
function person(name) {
    console.log('good morning',name);
    
}

function gentleman(name) {
    console.log('good evening',name)
}
greeting(gentleman,'ad');
